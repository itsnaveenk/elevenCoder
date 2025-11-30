"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, TrendingUp, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

const caseStudies = [
    {
        id: "ai-video",
        title: "AI Video Learning Platform",
        client: "EdTech Startup",
        description: "A revolutionary platform that uses AI to generate educational videos from text scripts, reducing content creation time by 90%.",
        problem: "Creating high-quality video courses was expensive and took weeks of production time.",
        solution: "We built a custom web app that integrates with AI video generation APIs. Users simply type a script, choose an avatar, and get a professional video in minutes.",
        results: [
            { icon: <Clock className="w-5 h-5" />, text: "90% faster content creation" },
            { icon: <DollarSign className="w-5 h-5" />, text: "70% reduction in production costs" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "User base grew to 5,000+ in 3 months" },
        ],
        tech: "Next.js, Python, AI Video API, Stripe",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
    },
    {
        id: "logistics-crm",
        title: "Custom CRM for Logistics",
        client: "Global Logistics Firm",
        description: "A centralized dashboard to manage shipments, track drivers, and automate client updates.",
        problem: "The company was running on spreadsheets and email, leading to lost shipments and angry customers.",
        solution: "We developed a custom CRM with real-time tracking, automated SMS updates, and a driver mobile app.",
        results: [
            { icon: <TrendingUp className="w-5 h-5" />, text: "40% increase in operational efficiency" },
            { icon: <CheckCircle2 className="w-5 h-5" />, text: "Zero lost shipments in first 6 months" },
            { icon: <DollarSign className="w-5 h-5" />, text: "Saved $50k/month in manual labor" },
        ],
        tech: "React, Node.js, PostgreSQL, Twilio",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    },
    {
        id: "lead-portal",
        title: "Lead Management Portal",
        client: "Real Estate Agency",
        description: "An automated system to capture, qualify, and distribute leads to agents instantly.",
        problem: "Leads were sitting in inboxes for hours, resulting in low conversion rates.",
        solution: "We built a portal that instantly captures leads from Zillow/Facebook, qualifies them via AI, and assigns them to the right agent.",
        results: [
            { icon: <Clock className="w-5 h-5" />, text: "Lead response time dropped to < 2 mins" },
            { icon: <TrendingUp className="w-5 h-5" />, text: "Conversion rate increased by 25%" },
            { icon: <DollarSign className="w-5 h-5" />, text: "Generated $2M+ in additional sales" },
        ],
        tech: "Next.js, Supabase, OpenAI, SendGrid",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
        id: "service-website",
        title: "Business Website Redesign",
        client: "Legal Consultancy",
        description: "A complete brand overhaul and high-performance website to attract premium corporate clients.",
        problem: "Their old website looked outdated and wasn't generating any qualified inquiries.",
        solution: "We designed a premium, fast-loading website with clear value propositions and an automated booking system.",
        results: [
            { icon: <TrendingUp className="w-5 h-5" />, text: "300% increase in website traffic" },
            { icon: <CheckCircle2 className="w-5 h-5" />, text: "Doubled the number of qualified leads" },
            { icon: <Clock className="w-5 h-5" />, text: "Launched in just 3 weeks" },
        ],
        tech: "Next.js, Tailwind CSS, Sanity CMS",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Real Results for <span className="text-gradient">Real Businesses</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        We don't just build software. We build assets that generate revenue and save time.
                    </p>
                </div>

                <div className="space-y-32">
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                            <div className="flex-1 w-full">
                                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 relative group">
                                    <img
                                        src={study.image}
                                        alt={study.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="flex-1 space-y-6">
                                <div className="text-sm font-medium text-accent-cyan tracking-wider uppercase">
                                    {study.client}
                                </div>
                                <h2 className="text-3xl font-bold">{study.title}</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    {study.description}
                                </p>

                                <div className="grid grid-cols-1 gap-4 py-4">
                                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                                        <span className="font-semibold text-red-400">The Problem: </span>
                                        <span className="text-slate-400 text-sm">{study.problem}</span>
                                    </div>
                                    <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                                        <span className="font-semibold text-green-400">The Solution: </span>
                                        <span className="text-slate-400 text-sm">{study.solution}</span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-3">Key Results:</h4>
                                    <ul className="space-y-3">
                                        {study.results.map((result, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                                <div className="p-1.5 rounded-full bg-white/10 text-accent-cyan">
                                                    {result.icon}
                                                </div>
                                                {result.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4">
                                    <p className="text-xs text-slate-500 mb-4">Tech Stack: {study.tech}</p>
                                    <Button size="lg" variant="outline" asChild>
                                        <Link href="/contact">
                                            Start a Similar Project
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 z-0" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can achieve similar results for your business.
                        </p>
                        <Button size="xl" asChild>
                            <Link href="/contact">
                                Get a Free Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
