"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, MessageCircle, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "How much does a custom website cost?",
        answer: "Our business websites typically range from $800 to $2,000, depending on the number of pages and features. We provide a fixed quote before starting."
    },
    {
        question: "How long does it take to build a project?",
        answer: "A standard website takes 1-2 weeks. Custom software or apps usually take 4-8 weeks. We provide a detailed timeline during our kickoff call."
    },
    {
        question: "Do you provide support after launch?",
        answer: "Yes! We offer 30 days of free support after launch. We also have monthly maintenance packages to keep your software secure and updated."
    },
    {
        question: "What do I need to get started?",
        answer: "Just an idea! We'll help you refine your requirements, design the solution, and build it. If you have designs or branding already, that's great too."
    }
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    {/* Contact Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's Talk About Your <span className="text-gradient">Growth</span>
                        </h1>
                        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                            Ready to automate your business or launch a new product? We're here to help. Fill out the form or reach out directly.
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
                                    <h3 className="font-bold text-lg mb-1">Response Time</h3>
                                    <p className="text-slate-400">We usually reply within 2-4 hours.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-purple/10 border border-white/10">
                            <h3 className="font-bold text-lg mb-2">Book a Free Strategy Call</h3>
                            <p className="text-slate-400 mb-4 text-sm">Skip the email tag. Schedule a 15-minute Zoom call to discuss your project.</p>
                            <Button variant="outline" className="w-full bg-black/50 hover:bg-black/70">Schedule Now</Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 md:p-10">
                        <h2 className="text-2xl font-bold mb-6">Get a Quote</h2>
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
                                <label htmlFor="budget" className="text-sm font-medium text-slate-300">Estimated Budget</label>
                                <select
                                    id="budget"
                                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                                >
                                    <option value="" className="bg-neutral-900">Select a range</option>
                                    <option value="800-2k" className="bg-neutral-900">$800 - $2,000</option>
                                    <option value="2k-5k" className="bg-neutral-900">$2,000 - $5,000</option>
                                    <option value="5k-10k" className="bg-neutral-900">$5,000 - $10,000</option>
                                    <option value="10k+" className="bg-neutral-900">$10,000+</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project goals..."
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

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                    className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-semibold text-lg">{faq.question}</span>
                                    {openFaqIndex === index ? (
                                        <ChevronUp className="w-5 h-5 text-slate-400" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-slate-400" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {openFaqIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
