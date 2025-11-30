"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Building2, GraduationCap, Utensils, Dumbbell, Users, Factory, ShoppingBag, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const industries = [
    {
        id: "clinics",
        name: "Clinics & Healthcare",
        icon: <Stethoscope className="w-8 h-8 text-blue-400" />,
        problem: "Missed appointments, manual patient intake, and endless phone calls.",
        solution: "Automated booking systems, patient portals, and AI receptionists.",
        example: "A dental clinic reduced no-shows by 40% with SMS reminders and online booking.",
    },
    {
        id: "real-estate",
        name: "Real Estate",
        icon: <Building2 className="w-8 h-8 text-orange-400" />,
        problem: "Leads getting lost in emails, slow follow-ups, and disorganized property data.",
        solution: "Custom CRM for agents, automated lead nurturing, and property management portals.",
        example: "An agency doubled their lead conversion rate with automated follow-up sequences.",
    },
    {
        id: "coaching",
        name: "Coaching Institutes",
        icon: <GraduationCap className="w-8 h-8 text-yellow-400" />,
        problem: "Managing student records, fee payments, and class schedules manually.",
        solution: "Student management systems, learning management systems (LMS), and automated fee reminders.",
        example: "A coaching center saved 20 hours/week on admin work with a custom portal.",
    },
    {
        id: "restaurants",
        name: "Restaurants & Cafés",
        icon: <Utensils className="w-8 h-8 text-red-400" />,
        problem: "High commission on delivery apps, manual inventory tracking, and slow table turnover.",
        solution: "Direct ordering apps, QR code menus, and inventory management systems.",
        example: "A café increased profit margins by 15% by launching their own ordering app.",
    },
    {
        id: "gyms",
        name: "Gyms & Fitness",
        icon: <Dumbbell className="w-8 h-8 text-purple-400" />,
        problem: "Member retention issues, manual check-ins, and class scheduling conflicts.",
        solution: "Member apps, automated check-in kiosks, and workout tracking tools.",
        example: "A gym improved retention by 25% with a branded member engagement app.",
    },
    {
        id: "agencies",
        name: "Agencies & Consulting",
        icon: <Users className="w-8 h-8 text-indigo-400" />,
        problem: "Project scope creep, untracked hours, and client communication silos.",
        solution: "Client portals, project tracking dashboards, and automated reporting.",
        example: "A marketing agency reduced client emails by 70% with a self-serve portal.",
    },
    {
        id: "manufacturing",
        name: "Manufacturers",
        icon: <Factory className="w-8 h-8 text-slate-400" />,
        problem: "Paper-based production tracking, inventory errors, and supply chain delays.",
        solution: "Digital production dashboards, inventory tracking, and supplier portals.",
        example: "A factory reduced waste by 10% with real-time inventory tracking.",
    },
    {
        id: "retail",
        name: "Retail & Shops",
        icon: <ShoppingBag className="w-8 h-8 text-green-400" />,
        problem: "Stockouts, lack of customer data, and disconnected online/offline sales.",
        solution: "E-commerce integration, loyalty programs, and POS systems.",
        example: "A boutique shop grew sales by 30% by launching an integrated online store.",
    },
];

export default function IndustriesPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Industries We <span className="text-gradient">Transform</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Every industry has unique challenges. We build specialized software to solve them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    {industries.map((industry) => (
                        <div key={industry.id} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-cyan/30 transition-colors group">
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-400 border border-white/5">
                                    Case Study Available
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold mb-4">{industry.name}</h2>

                            <div className="space-y-4 mb-8">
                                <div>
                                    <h4 className="text-sm font-semibold text-red-400 mb-1">Common Problem:</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{industry.problem}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-green-400 mb-1">Our Solution:</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">{industry.solution}</p>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-accent-blue/5 border border-accent-blue/10">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                                    <p className="text-sm text-slate-300 italic">"{industry.example}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-card p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent-cyan/5 to-accent-purple/5 z-0" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't see your industry?</h2>
                        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                            We build custom software for any business model. Let's discuss your specific needs.
                        </p>
                        <Button size="xl" asChild>
                            <Link href="/contact">
                                Discuss Your Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}
