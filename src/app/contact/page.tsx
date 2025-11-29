"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert("Message sent! We'll get back to you shortly.");
    };

    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Talk About Your <span className="text-gradient">Project</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                            Ready to take your business to the next level? Fill out the form or reach out to us directly. We usually reply within 2-6 hours.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 text-accent-cyan">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email Us</h3>
                                    <p className="text-slate-400">hello@elevencoder.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 text-accent-cyan">
                                    <MessageCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                                    <p className="text-slate-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-white/5 text-accent-cyan">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                                    <p className="text-slate-400">Mon - Fri: 9am - 6pm EST</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 border border-white/10">
                            <h3 className="font-bold text-lg mb-2">Schedule a Call</h3>
                            <p className="text-slate-400 mb-4 text-sm">Prefer to talk face-to-face? Book a free 15-minute discovery call.</p>
                            <Button variant="outline" className="w-full">Book Now</Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 md:p-10">
                        <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <Input id="name" placeholder="John Doe" required className="bg-white/5 border-white/10 focus:border-accent-cyan" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                    <Input id="email" type="email" placeholder="john@company.com" required className="bg-white/5 border-white/10 focus:border-accent-cyan" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="company" className="text-sm font-medium text-slate-300">Company Name</label>
                                <Input id="company" placeholder="Acme Inc." className="bg-white/5 border-white/10 focus:border-accent-cyan" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="budget" className="text-sm font-medium text-slate-300">Budget Range</label>
                                <select
                                    id="budget"
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                                >
                                    <option value="" className="bg-neutral-900">Select a budget</option>
                                    <option value="2k-5k" className="bg-neutral-900">$2k - $5k</option>
                                    <option value="5k-10k" className="bg-neutral-900">$5k - $10k</option>
                                    <option value="10k-25k" className="bg-neutral-900">$10k - $25k</option>
                                    <option value="25k+" className="bg-neutral-900">$25k+</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project goals, timeline, and requirements..."
                                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-accent-cyan"
                                    required
                                />
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}
