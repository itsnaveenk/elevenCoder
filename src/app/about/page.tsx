"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Heart, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const values = [
    {
        icon: <Target className="w-6 h-6" />,
        title: "Impact Driven",
        description: "We focus on outcomes, not just output. Every line of code should serve a business goal."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Client Partnership",
        description: "We work with you, not just for you. Your success is our success."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Speed & Quality",
        description: "We move fast without breaking things. Modern tools allow us to deliver quality at speed."
    },
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Transparency",
        description: "No hidden fees, no jargon. We keep you in the loop at every step."
    }
];

const team = [
    {
        name: "Alex Morgan",
        role: "Founder & Lead Architect",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        bio: "Ex-Google engineer with 10+ years of experience building scalable systems."
    },
    {
        name: "Sarah Chen",
        role: "Head of Product Design",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
        bio: "Award-winning designer passionate about creating intuitive user experiences."
    },
    {
        name: "David Kim",
        role: "Senior AI Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
        bio: "Specialist in NLP and computer vision, turning complex AI research into practical solutions."
    }
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                {/* Hero */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">
                        We Help Businesses <span className="text-gradient">Thrive Globally</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-8">
                        ElevenCoder is a modern software agency dedicated to building high-quality digital solutions. We combine technical expertise with business acumen to help you scale.
                    </p>
                </div>

                {/* Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                            alt="Team working together"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            We believe that every business, regardless of size, deserves world-class software. Our mission is to democratize access to premium engineering and design, enabling companies to compete on a global stage.
                        </p>
                        <p className="text-slate-400 text-lg leading-relaxed">
                            We are not just coders; we are problem solvers. We take the time to understand your unique challenges and build custom solutions that deliver measurable results.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="glass-card p-8">
                                <div className="w-12 h-12 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                                <p className="text-slate-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="glass-card p-0 overflow-hidden group">
                                <div className="relative h-64 bg-neutral-800">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                    <p className="text-accent-cyan text-sm font-medium mb-4">{member.role}</p>
                                    <p className="text-slate-400 text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Want to join us?</h2>
                    <p className="text-slate-400 mb-8">
                        We are always looking for talented individuals to join our team.
                    </p>
                    <Button variant="outline" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
}
