"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface PortfolioCardProps {
    title: string;
    problem: string;
    result: string;
    techStack: string[];
    imageSrc?: string; // Optional for now, can use placeholders
    slug: string;
    withBorderBeam?: boolean;
}

export function PortfolioCard({ title, problem, result, techStack, imageSrc, slug, withBorderBeam = false }: PortfolioCardProps) {
    return (
        <GlassCard className="flex flex-col h-full p-0 overflow-hidden group relative">
            {withBorderBeam && (
                <BorderBeam
                    size={250}
                    duration={12}
                    delay={9}
                    borderWidth={1.5}
                    colorFrom="#06b6d4"
                    colorTo="#7c3aed"
                />
            )}
            <div className="relative h-48 bg-white/5 overflow-hidden">
                {/* Placeholder or Image */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center text-slate-500">
                    {imageSrc ? (
                        <Image src={imageSrc} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                        <span>Project Preview</span>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow relative z-10">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">{title}</h3>

                <div className="space-y-3 mb-6 flex-grow">
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Problem</p>
                        <p className="text-sm text-slate-300 line-clamp-2">{problem}</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Result</p>
                        <p className="text-sm font-medium text-green-400">{result}</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {techStack.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-accent-cyan group-hover:text-white group-hover:border-accent-cyan transition-colors" asChild>
                    <Link href={`/portfolio/${slug}`}>
                        View Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
            </div>
        </GlassCard>
    );
}
