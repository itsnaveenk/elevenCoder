"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
];

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div className="glass-panel border-b border-white/20">
                <Container className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
                        Elev<span className="text-accent-cyan">Encoder</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-accent-cyan",
                                    pathname === item.href ? "text-accent-cyan" : "text-slate-400 hover:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button size="sm" variant="primary" asChild>
                            <Link href="/contact">Start a Project</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </Container>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden absolute top-20 left-0 right-0 glass-panel border-b border-white/20 p-4 bg-neutral-950/95 backdrop-blur-xl"
                >
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-base font-medium p-2 rounded-lg hover:bg-white/5 transition-colors",
                                    pathname === item.href ? "text-accent-cyan bg-white/5" : "text-slate-400"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button className="w-full" variant="primary" asChild onClick={() => setIsOpen(false)}>
                            <Link href="/contact">Start a Project</Link>
                        </Button>
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
