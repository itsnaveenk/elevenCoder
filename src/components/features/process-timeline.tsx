"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
    { icon: <Search className="w-5 h-5" />, title: "Discovery", desc: "We dive deep into your goals." },
    { icon: <PenTool className="w-5 h-5" />, title: "Wireframes", desc: "Blueprints for success." },
    { icon: <Layout className="w-5 h-5" />, title: "UI/UX Design", desc: "Pixel-perfect aesthetics." },
    { icon: <Code2 className="w-5 h-5" />, title: "Development", desc: "Clean, scalable code." },
    { icon: <TestTube className="w-5 h-5" />, title: "Testing", desc: " rigorous QA process." },
    { icon: <Rocket className="w-5 h-5" />, title: "Launch", desc: "Deploy and monitor." },
];

export function ProcessTimeline() {
    return (
        <section className="py-24">
            <Container>
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
                    <p className="text-slate-400">A proven process for predictable results.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-slate-400 mb-6 group-hover:border-accent-cyan group-hover:text-accent-cyan transition-colors relative z-10">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-xs text-slate-500">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
