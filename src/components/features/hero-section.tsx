"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Beams } from "@/components/ui/ethereal-beams-hero";
import { CTATracker } from "@/components/ui/cta-visibility-context";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={2.5}
                    beamHeight={18}
                    beamNumber={15}
                    lightColor="#ffffff"
                    speed={2.5}
                    noiseIntensity={2}
                    scale={0.15}
                    rotation={43}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950 pointer-events-none" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-accent-cyan" />
                        <span className="text-sm font-medium text-slate-300">
                            We speak business, not tech.
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        We Build Modern Software That <span className="text-gradient">Saves Time</span> & <span className="text-white">Grows Revenue.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed"
                    >
                        Custom Business Portals, AI Automation, and Websites designed for business owners. Fast delivery. Clear communication. No jargon.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <CTATracker id="hero-cta">
                            <Button size="xl" className="group text-lg px-8 h-14 bg-white text-black hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] transition-transform hover:scale-105 duration-300 ease-out" asChild>
                                <Link href="/contact">
                                    Book a 20-Minute Call
                                    <ArrowRight className="ml-2 w-5 h-5 animate-bounce-x" />
                                </Link>
                            </Button>
                        </CTATracker>
                        <Button size="xl" variant="outline" className="text-lg px-8 h-14 border-white/20 hover:bg-white/10" asChild>
                            <Link href="/case-studies">
                                See Our Work
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
