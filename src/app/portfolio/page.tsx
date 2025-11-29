"use client";

import { Container } from "@/components/ui/container";
import { PortfolioCard } from "@/components/features/portfolio-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Global Logistics Dashboard",
        problem: "Manual tracking caused 20% delays in shipments and poor visibility for customers.",
        result: "Reduced delays by 90%, saved $50k/month, and improved customer satisfaction score by 40%.",
        techStack: ["Next.js", "Supabase", "Mapbox", "Tailwind CSS"],
        slug: "logistics-dashboard",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
    },
    {
        title: "AI Legal Document Analyzer",
        problem: "Law firms spent hundreds of billable hours manually reviewing contracts for standard clauses.",
        result: "Automated 80% of initial contract review, speeding up turnaround time by 3x.",
        techStack: ["Python", "OpenAI API", "React", "FastAPI"],
        slug: "ai-legal",
        imageSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=600&fit=crop"
    },
    {
        title: "FinTech Mobile Banking App",
        problem: "Legacy mobile app had a poor user experience (2.5 stars) and frequent crashes.",
        result: "Redesign achieved 4.8 stars on App Store and drove 200% user growth in 6 months.",
        techStack: ["React Native", "Node.js", "Stripe", "Firebase"],
        slug: "fintech-app",
        imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
    },
    {
        title: "Real Estate CRM Portal",
        problem: "Agents lost leads due to scattered communication across email, SMS, and WhatsApp.",
        result: "Centralized lead management increased conversion rates by 25% in the first quarter.",
        techStack: ["React", "Firebase", "Twilio", "SendGrid"],
        slug: "real-estate-crm",
        imageSrc: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
    },
    {
        title: "E-commerce Analytics Platform",
        problem: "Store owners struggled to understand customer behavior across multiple channels.",
        result: "Unified dashboard provided real-time insights, boosting average order value by 15%.",
        techStack: ["Vue.js", "Django", "PostgreSQL", "Redis"],
        slug: "ecommerce-analytics",
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    },
    {
        title: "Healthcare Telemedicine App",
        problem: "Patients faced long wait times and difficulty booking appointments during the pandemic.",
        result: "Enabled remote consultations, serving 10k+ patients in the first month.",
        techStack: ["Flutter", "Go", "WebRTC", "GCP"],
        slug: "telemedicine-app",
        imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
    }
];

export default function PortfolioPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="text-gradient">Work</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        We don't just build software; we build solutions that drive real business results. Check out some of our recent success stories.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {projects.map((project, index) => (
                        <PortfolioCard key={index} {...project} />
                    ))}
                </div>

                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 z-0" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a similar project in mind?</h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help you achieve similar results.
                        </p>
                        <Button size="xl" asChild>
                            <Link href="/contact">
                                Start Your Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
