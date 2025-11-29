"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
    href?: string;
}

export function ServiceCard({
    title,
    description,
    icon,
    href = "/services",
}: ServiceCardProps) {
    return (
        <div className="glass-card p-8 flex flex-col h-full group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-accent-cyan/10" />

            <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl border border-white/10 text-accent-cyan group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-cyan transition-colors">
                {title}
            </h3>

            <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            <div className="pt-6 border-t border-white/5">
                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-medium text-white hover:text-accent-cyan transition-colors"
                >
                    Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
