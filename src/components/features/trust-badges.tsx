"use client";

import { Container } from "@/components/ui/container";
import { Users, Zap, Brain, Layers, MessageSquare, ShieldCheck } from "lucide-react";

const features = [
    {
        icon: <Users className="w-6 h-6" />,
        title: "Small, Powerful Team",
        description: "Direct access to senior engineers. No middlemen.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Startup Speed",
        description: "We ship in weeks, not months. Rapid iteration.",
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "AI Expertise",
        description: "Native AI integration in every solution we build.",
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Scalable Architecture",
        description: "Built to handle millions of users from day one.",
    },
    {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Transparent Comms",
        description: "Weekly updates, clear pricing, no surprises.",
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Long-term Support",
        description: "We don't just build and leave. We're your partners.",
    },
];

export function TrustBadges() {
    return (
        <section className="py-24 bg-neutral-900/50 border-y border-white/5">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Why Top Companies Choose Us</h2>
                    <p className="text-slate-400">We bring big-tech expertise to growing businesses.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <div className="p-3 rounded-lg bg-white/5 text-white border border-white/10 shrink-0">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
