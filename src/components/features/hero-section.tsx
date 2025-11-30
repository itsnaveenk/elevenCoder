"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import { Beams } from "@/components/ui/ethereal-beams-hero";

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
                            AI-Powered Software Agency
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
                    >
                        We Build <span className="text-gradient">AI-Powered</span> Digital Solutions That Help You <span className="text-white">Thrive Globally.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl leading-relaxed"
                    >
                        Custom Web Apps, Mobile Apps, AI Automation & Digital Transformation for growing businesses. We help you scale, go international, and stand out.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Button size="xl" className="group text-lg px-8 h-14 bg-white text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-out" asChild>
                            <Link href="/contact">
                                Schedule a Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:animate-bounce-x" />
                            </Link>
                        </Button>
                        <Button size="xl" variant="outline" className="text-lg px-8 h-14 border-white/20 hover:bg-white/10" asChild>
                            <Link href="/portfolio">
                                See Our Work
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
