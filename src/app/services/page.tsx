"use client";

import { Container } from "@/components/ui/container";
import { ServiceCard } from "@/components/features/service-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, Bot, Smartphone, Database, BarChart3, Globe, Code2, Cloud, Shield } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Custom Web Applications",
        description: "We build robust, scalable web applications tailored to your business needs. From SaaS platforms to internal tools, we ensure high performance and security.",
        icon: <LayoutDashboard className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "Mobile App Development",
        description: "Native-quality mobile experiences for iOS and Android using React Native. Reach your customers on their favorite devices with smooth, responsive apps.",
        icon: <Smartphone className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "AI Automation & Chatbots",
        description: "Leverage the power of AI to automate customer support, data entry, and complex workflows. We build intelligent agents that work 24/7.",
        icon: <Bot className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "Internal Tools & Dashboards",
        description: "Streamline your operations with custom CRM, ERP, and admin dashboards. Visualize data and manage your business efficiently.",
        icon: <Database className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "Data Analytics & Visualization",
        description: "Turn your data into actionable insights. We build interactive charts and reports that help you make better business decisions.",
        icon: <BarChart3 className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "Backend & API Development",
        description: "Solid backend architecture is the backbone of any app. We build secure, scalable APIs and microservices.",
        icon: <Code2 className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "Cloud Infrastructure & DevOps",
        description: "We handle deployment, scaling, and monitoring on AWS, Google Cloud, or Azure. Ensure your app is always up and running.",
        icon: <Cloud className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "Cybersecurity & Compliance",
        description: "Protect your data and your users. We implement industry-standard security practices and compliance measures.",
        icon: <Shield className="w-6 h-6" />,
        href: "/contact"
    },
    {
        title: "Global Localization",
        description: "Expand your reach to international markets. We build apps that support multiple languages, currencies, and cultural nuances.",
        icon: <Globe className="w-6 h-6" />,
        href: "/contact"
    },
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Our <span className="text-gradient">Services</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        We offer a comprehensive suite of digital solutions to help you build, scale, and grow your business globally.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 z-0" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure what you need?</h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            Book a free consultation and we'll help you define your project requirements and technical strategy.
                        </p>
                        <Button size="xl" asChild>
                            <Link href="/contact">
                                Talk to an Expert
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
