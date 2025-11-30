"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, LayoutDashboard, Database, Bot, BarChart3, Smartphone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        id: "websites",
        title: "Business Website Development",
        icon: <Globe className="w-8 h-8 text-accent-cyan" />,
        description: "Your website is your 24/7 salesperson. We build high-converting, professional websites that establish trust and turn visitors into clients.",
        problem: "Outdated or slow websites lose 40% of visitors instantly.",
        solution: "Modern, fast, mobile-responsive design with clear calls-to-action.",
        benefits: ["Increase lead generation", "Build brand credibility", "Rank higher on Google (SEO)"],
        price: "Starting at $800",
        idealFor: "Service providers, consultants, local businesses.",
    },
    {
        id: "portals",
        title: "Custom Business Portals",
        icon: <LayoutDashboard className="w-8 h-8 text-accent-purple" />,
        description: "Secure portals for your clients, employees, or partners. Centralize communication, file sharing, and project management in one branded space.",
        problem: "Managing clients via email threads is chaotic and insecure.",
        solution: "A secure login area for clients to view status, pay invoices, and upload files.",
        benefits: ["Reduce admin time by 50%", "Improve client experience", "Secure data handling"],
        price: "Starting at $1,500",
        idealFor: "Agencies, law firms, educational institutes.",
    },
    {
        id: "crm",
        title: "CRM & Internal Tools",
        icon: <Database className="w-8 h-8 text-blue-500" />,
        description: "Stop using spreadsheets to run your business. We build custom CRMs and internal tools that fit your exact workflow.",
        problem: "Generic CRMs are expensive and too complex.",
        solution: "A simple, tailored dashboard that tracks exactly what you need.",
        benefits: ["Automate follow-ups", "Centralize customer data", "Track team performance"],
        price: "Starting at $1,500",
        idealFor: "Logistics, real estate, sales teams.",
    },
    {
        id: "automation",
        title: "AI Automation & Chatbots",
        icon: <Bot className="w-8 h-8 text-green-500" />,
        description: "Automate repetitive tasks and customer support. Our AI agents can handle inquiries, schedule appointments, and process data 24/7.",
        problem: "Support teams are overwhelmed and slow to respond.",
        solution: "AI chatbots that answer 80% of questions instantly.",
        benefits: ["24/7 customer availability", "Reduce support costs", "Instant response times"],
        price: "Starting at $1,200",
        idealFor: "E-commerce, clinics, customer-heavy businesses.",
    },
    {
        id: "saas",
        title: "SaaS & MVP Development",
        icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
        description: "Have a software idea? We build Minimum Viable Products (MVPs) fast, so you can launch, test, and get funding.",
        problem: "Development agencies take months and cost a fortune.",
        solution: "Rapid MVP development focused on core features and user feedback.",
        benefits: ["Launch in weeks, not months", "Scalable architecture", "Investor-ready product"],
        price: "Starting at $2,000",
        idealFor: "Founders, startups, entrepreneurs.",
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        icon: <Smartphone className="w-8 h-8 text-pink-500" />,
        description: "Native iOS and Android apps that keep your customers engaged. Perfect for loyalty programs, booking systems, or service delivery.",
        problem: "Mobile web isn't enough for high engagement.",
        solution: "A dedicated app on your customers' home screen.",
        benefits: ["Push notifications", "Offline access", "Premium brand experience"],
        price: "Starting at $3,000",
        idealFor: "Retail, fitness, food delivery.",
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Services That <span className="text-gradient">Grow Business</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        We don't just write code. We build solutions that save you time, automate work, and increase your revenue.
                    </p>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-start`}>
                            <div className="flex-1 space-y-6">
                                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 mb-4">
                                    {service.icon}
                                </div>
                                <h2 className="text-3xl font-bold">{service.title}</h2>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                                    <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10">
                                        <h4 className="font-semibold text-red-400 mb-2">The Problem</h4>
                                        <p className="text-sm text-slate-400">{service.problem}</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/10">
                                        <h4 className="font-semibold text-green-400 mb-2">The Solution</h4>
                                        <p className="text-sm text-slate-400">{service.solution}</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                                    <ul className="space-y-2">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-300">
                                                <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-4 pt-4">
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                                        <span className="text-sm text-slate-400">Investment: </span>
                                        <span className="font-bold text-white">{service.price}</span>
                                    </div>
                                    <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                                        <span className="text-sm text-slate-400">Best for: </span>
                                        <span className="font-bold text-white">{service.idealFor}</span>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <Button size="lg" asChild>
                                        <Link href="/contact">
                                            Get Started
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                                    {/* Placeholder for service visualization */}
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                                        <span className="text-sm">Visualization for {service.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-32 glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 z-0" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your business?</h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            Schedule a free 20-minute strategy call. No sales pressure, just expert advice.
                        </p>
                        <Button size="xl" asChild>
                            <Link href="/contact">
                                Book Your Call
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
