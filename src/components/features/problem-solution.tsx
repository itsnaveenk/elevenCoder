"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const problems = [
    {
        problem: "Your business needs automation.",
        solution: "We build AI workflows.",
        description: "Stop wasting time on manual tasks. We automate your processes.",
    },
    {
        problem: "You need a modern app.",
        solution: "We build production-ready apps.",
        description: "Launch faster with our scalable, high-performance web & mobile apps.",
    },
    {
        problem: "You want global visibility.",
        solution: "We design world-class experiences.",
        description: "Stand out in the global market with premium, localized designs.",
    },
    {
        problem: "You need operational efficiency.",
        solution: "We automate internal processes.",
        description: "Streamline your operations with custom dashboards and tools.",
    },
];

export function ProblemSolution() {
    return (
        <section className="py-24 bg-neutral-900/30">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        We Solve <span className="text-gradient">Real Business Problems</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        Don't let technical debt and manual processes hold you back.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col sm:flex-row gap-6 items-start group hover:bg-white/[0.08]"
                        >
                            <div className="flex-1 space-y-4">
                                <div className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors">
                                    <XCircle className="w-6 h-6 text-red-500/70 shrink-0" />
                                    <p className="font-medium line-through decoration-red-500/50 decoration-2">{item.problem}</p>
                                </div>
                                <div className="flex items-start gap-3 text-white">
                                    <CheckCircle2 className="w-6 h-6 text-accent-cyan shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg mb-1">{item.solution}</p>
                                        <p className="text-sm text-slate-400">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
