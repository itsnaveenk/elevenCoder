import { Container } from "@/components/ui/container";
import { PricingCard } from "@/components/features/pricing-card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing | ElevEncoder",
    description: "Transparent pricing for web apps and AI solutions. Starts at $1,500.",
};

export default function PricingPage() {
    return (
        <div className="pt-32 pb-20">
            <Container>
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Transparent <span className="text-gradient">Pricing</span>
                    </h1>
                    <p className="text-xl text-slate-600">
                        No hidden fees. No hourly billing surprises. Just clear, fixed-price packages for common scopes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <PricingCard
                        title="Micro-Project"
                        price="$900 - $2k"
                        description="Perfect for small fixes, audits, or simple integrations."
                        features={[
                            "API Integration",
                            "Performance Audit",
                            "Bug Fixes",
                            "Small Feature Add-on",
                            "Delivery in < 1 week"
                        ]}
                    />
                    <PricingCard
                        title="Validation Sprint"
                        price="$1,500+"
                        description="Validate a workflow or deliver an MVP slice that creates real value."
                        isPopular={true}
                        features={[
                            "Core Workflow Implementation",
                            "Basic UI/UX Design",
                            "Database Setup",
                            "Deployment to Vercel",
                            "Delivery in 2 weeks"
                        ]}
                    />
                    <PricingCard
                        title="Custom Build"
                        price="$5k - $20k+"
                        description="Full-scale web applications and complex AI solutions."
                        features={[
                            "Full SaaS / Web App",
                            "Advanced AI Integration",
                            "Custom Design System",
                            "Admin Dashboards",
                            "Scalable Architecture",
                            "4-12 week timeline"
                        ]}
                        ctaText="Get a Quote"
                    />
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Do you charge hourly or fixed price?", a: "We prefer fixed-price projects. It aligns our incentives with yours—we want to deliver value fast, not bill more hours." },
                            { q: "What is your tech stack?", a: "We specialize in Next.js, React, Node.js, and Python for AI backend tasks. We use Supabase or Postgres for databases." },
                            { q: "Do you offer maintenance?", a: "Yes, we offer optional maintenance retainers starting at $500/mo for updates, security patches, and small tweaks." },
                            { q: "How do we get started?", a: "Book a free 15-minute call. We'll discuss your idea, and if it's a fit, we'll send a proposal within 24 hours." },
                        ].map((faq, i) => (
                            <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-sm hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                                <p className="text-slate-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
