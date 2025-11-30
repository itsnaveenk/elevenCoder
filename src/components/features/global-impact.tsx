"use client";

import { Container } from "@/components/ui/container";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Globe } from "lucide-react";
import { MouseEvent } from "react";

export function GlobalImpact() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section
            className="py-24 relative overflow-hidden group"
            onMouseMove={handleMouseMove}
        >
            {/* Ethereal Shadow Background */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(36, 38, 39, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

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
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium mb-6 cursor-default"
                            >
                                <Globe className="w-4 h-4" />
                                Global Scale
                            </motion.div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Built for <span className="text-gradient">Global Audiences.</span><br />
                                Designed for Scale.
                            </h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                We build reliable, fast, beautiful software that works across countries, languages, and markets. Your business shouldn't be limited by borders.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { value: "99.9%", label: "Uptime Guarantee" },
                                    { value: "<100ms", label: "Global Latency" },
                                    { value: "24/7", label: "Support Coverage" },
                                    { value: "Multi", label: "Language Ready" }
                                ].map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="p-4 rounded-xl hover:bg-white/5 transition-colors cursor-default"
                                    >
                                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-sm text-slate-500">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm shadow-2xl group"
                        >
                            {/* Abstract Globe Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full border border-white/10 flex items-center justify-center relative animate-[spin_10s_linear_infinite] group-hover:[animation-play-state:paused]">
                                    <div className="absolute inset-0 rounded-full border-t border-accent-cyan/50" />
                                    <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                                        <div className="absolute inset-0 rounded-full border-b border-accent-purple/50" />
                                        <div className="w-32 h-32 rounded-full bg-accent-blue/10 blur-xl" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                whileHover={{ scale: 1.1, zIndex: 10, cursor: "grab" }}
                                whileTap={{ cursor: "grabbing" }}
                                className="absolute top-10 left-10 p-4 glass-panel rounded-xl animate-float"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium">System Operational</span>
                                </div>
                            </motion.div>

                            <motion.div
                                drag
                                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                whileHover={{ scale: 1.1, zIndex: 10, cursor: "grab" }}
                                whileTap={{ cursor: "grabbing" }}
                                className="absolute bottom-10 right-10 p-4 glass-panel rounded-xl animate-float"
                                style={{ animationDelay: "1s" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="text-xs text-slate-400">Active Users</div>
                                    <span className="text-sm font-bold">12,405</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
