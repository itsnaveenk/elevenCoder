"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function GlobalImpact() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Map Graphic (Simplified with CSS/SVG) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="2" fill="white" />
                    <circle cx="250" cy="150" r="2" fill="white" />
                    <circle cx="300" cy="250" r="2" fill="white" />
                    <circle cx="600" cy="200" r="2" fill="white" />
                    <circle cx="650" cy="180" r="2" fill="white" />
                    <circle cx="700" cy="220" r="2" fill="white" />
                    <circle cx="800" cy="300" r="2" fill="white" />
                    {/* Connecting lines */}
                    <path d="M200 200 L250 150 L600 200 L800 300" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-6">
                                <Globe className="w-4 h-4" />
                                Global Scale
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Built for <span className="text-gradient">Global Audiences.</span><br />
                                Designed for Scale.
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We build reliable, fast, beautiful software that works across countries, languages, and markets. Your business shouldn't be limited by borders.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                                    <div className="text-sm text-slate-500">Uptime Guarantee</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">&lt;100ms</div>
                                    <div className="text-sm text-slate-500">Global Latency</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-sm text-slate-500">Support Coverage</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-white mb-1">Multi</div>
                                    <div className="text-sm text-slate-500">Language Ready</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl"
                        >
                            {/* Abstract Globe Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative animate-[spin_10s_linear_infinite]">
                                    <div className="absolute inset-0 rounded-full border-t border-accent-cyan/50" />
                                    <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                                        <div className="absolute inset-0 rounded-full border-b border-accent-purple/50" />
                                        <div className="w-32 h-32 rounded-full bg-accent-blue/10 blur-xl" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute top-10 left-10 p-4 glass-panel rounded-xl animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium">System Operational</span>
                                </div>
                            </div>

                            <div className="absolute bottom-10 right-10 p-4 glass-panel rounded-xl animate-float" style={{ animationDelay: "1s" }}>
                                <div className="flex items-center gap-3">
                                    <div className="text-xs text-slate-400">Active Users</div>
                                    <span className="text-sm font-bold">12,405</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
