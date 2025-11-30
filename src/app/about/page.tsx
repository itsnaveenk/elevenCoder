"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap, Brain, Rocket, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const values = [
    {
        icon: <Target className="w-6 h-6" />,
        title: "Business First, Code Second",
        description: "We don't just write code; we solve business problems. Every feature we build is designed to increase revenue or save time."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Speed & Agility",
        description: "As a specialized team, we move faster than large agencies. No bureaucracy, no endless meetings—just results."
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "AI Native",
        description: "We integrate Artificial Intelligence into everything we build, giving your business a competitive edge."
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Direct Communication",
        description: "You talk directly to the engineers building your product, not a project manager. Clear, honest, and fast updates."
    }
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        We Bridge the Gap Between <span className="text-gradient">Business & Tech</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-8">
                        ElevenCoder is a boutique software agency that helps non-technical founders and business owners build world-class digital products.
                    </p>
                </div>

                {/* Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20 z-10" />
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                            alt="Team collaboration"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            We believe that every business needs to become a digital business to survive. But most agencies speak a language that business owners don't understand.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed mb-6">
                            Our mission is to make high-end software development accessible, transparent, and ROI-focused. We strip away the jargon and focus on what matters: <strong>Growth, Efficiency, and Automation.</strong>
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-4">
                                <div className="w-12 h-12 rounded-full border-2 border-black bg-slate-800 flex items-center justify-center text-xs font-bold">AM</div>
                                <div className="w-12 h-12 rounded-full border-2 border-black bg-slate-700 flex items-center justify-center text-xs font-bold">SC</div>
                            </div>
                            <p className="text-sm text-slate-500">
                                Led by a dedicated team of senior engineers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The "Team of Two" Advantage */}
                <div className="mb-32 bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-cyan/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-medium mb-6">
                            <Rocket className="w-4 h-4" />
                            The Boutique Advantage
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With a Small Team?</h2>
                        <p className="text-lg text-slate-400 mb-12">
                            Large agencies have overhead, slow processes, and junior developers. We offer a different approach.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-6 rounded-xl bg-black/20 border border-white/5">
                                <h3 className="font-bold text-lg mb-2 text-white">Faster Delivery</h3>
                                <p className="text-sm text-slate-400">Decisions are made instantly. Code is shipped daily. We don't waste time.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-black/20 border border-white/5">
                                <h3 className="font-bold text-lg mb-2 text-white">Senior Expertise</h3>
                                <p className="text-sm text-slate-400">You get 100% senior engineer attention. No interns touching your codebase.</p>
                            </div>
                            <div className="p-6 rounded-xl bg-black/20 border border-white/5">
                                <h3 className="font-bold text-lg mb-2 text-white">Cost Effective</h3>
                                <p className="text-sm text-slate-400">You pay for code and strategy, not for our office rent or middle management.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Businesses Trust Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="glass-card p-8 hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-accent-purple/10 flex items-center justify-center text-accent-purple mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        We only take on a limited number of clients to ensure quality. Let's see if we're a good fit.
                    </p>
                    <Button size="xl" asChild>
                        <Link href="/contact">
                            Book a Free Consultation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
}
