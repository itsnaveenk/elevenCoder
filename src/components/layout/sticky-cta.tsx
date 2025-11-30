"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useCTAVisibility } from "@/components/ui/cta-visibility-context";
import { usePathname } from "next/navigation";

export function StickyCTA() {
    const { isAnyCTAVisible } = useCTAVisibility();
    const pathname = usePathname();

    if (pathname === "/contact") return null;

    return (
        <AnimatePresence>
            {!isAnyCTAVisible && (
                <>
                    {/* Desktop Sticky CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:fixed bottom-8 right-8 z-40"
                    >
                        <Link href="/contact">
                            <div className="glass-card p-1 pr-2 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer shadow-2xl group">
                                <div className="bg-gradient-to-r from-accent-cyan to-accent-purple text-white w-12 h-12 rounded-xl flex items-center justify-center">
                                    <ArrowRight className="w-6 h-6 animate-bounce-x" />
                                </div>
                                <div className="pr-4">
                                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Ready to build?</p>
                                    <p className="font-bold text-foreground">Start a Project</p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Mobile Sticky Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 glass-panel border-t border-white/20"
                    >
                        <Button className="w-full shadow-lg group" asChild>
                            <Link href="/contact">
                                Start a Project
                                <ArrowRight className="ml-2 w-4 h-4 animate-bounce-x" />
                            </Link>
                        </Button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
