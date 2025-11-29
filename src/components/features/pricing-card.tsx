"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PricingCardProps {
    title: string;
    price: string;
    description: string;
    features: string[];
    isPopular?: boolean;
    ctaText?: string;
}

export function PricingCard({ title, price, description, features, isPopular = false, ctaText = "Get Started" }: PricingCardProps) {
    return (
        <GlassCard className={cn(
            "flex flex-col h-full relative",
            isPopular && "border-accent-purple/50 shadow-accent-purple/10"
        )}>
            {isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-cyan to-accent-purple text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                </div>
            )}

            <div className="mb-6 text-center">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-3xl font-bold">{price}</span>
                </div>
                <p className="text-sm text-slate-600">{description}</p>
            </div>

            <div className="space-y-3 mb-8 flex-grow">
                {features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                    </div>
                ))}
            </div>

            <Button
                variant={isPopular ? "primary" : "outline"}
                className="w-full"
                asChild
            >
                <Link href="/contact">{ctaText}</Link>
            </Button>
        </GlassCard>
    );
}
