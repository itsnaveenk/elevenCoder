"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        content: "ElevenCoder transformed our internal operations. The AI dashboard they built saved us 40+ hours a week.",
        author: "Sarah Jenkins",
        role: "COO, TechFlow Logistics",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
    },
    {
        content: "The team is incredibly fast and professional. They understood our vision immediately and delivered a world-class app.",
        author: "Michael Chen",
        role: "Founder, Nexus Startups",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces"
    },
    {
        content: "We needed a complex custom CRM, and they nailed it. The UI is beautiful and the backend is rock solid.",
        author: "Elena Rodriguez",
        role: "Director, Estate Prime",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
    }
];

export function Testimonials() {
    return (
        <section className="py-24 bg-neutral-900/30">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
                    <div className="flex justify-center gap-1 text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col"
                        >
                            <p className="text-slate-300 italic mb-8 flex-grow">"{item.content}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    {/* Using a placeholder div if image fails to load, but src is provided */}
                                    <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">{item.author}</p>
                                    <p className="text-xs text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
