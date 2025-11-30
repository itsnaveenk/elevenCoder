"use client";

import { HeroSection } from "@/components/features/hero-section";
import { ServiceCard } from "@/components/features/service-card";
import { PortfolioCard } from "@/components/features/portfolio-card";
import { TrustBadges } from "@/components/features/trust-badges";
import { Testimonials } from "@/components/features/testimonials";
import { ProcessTimeline } from "@/components/features/process-timeline";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, Bot, Smartphone, Database, BarChart3, Globe, Building2, Stethoscope, ShoppingBag, Factory, Utensils, Users } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CTATracker } from "@/components/ui/cta-visibility-context";

const services = [
  {
    title: "Business Website Development",
    description: "High-converting websites that build trust and attract premium clients.",
    icon: <Globe className="w-6 h-6" />,
    href: "/services#websites"
  },
  {
    title: "Custom Business Portals",
    description: "Secure portals for client management, file sharing, and operations.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    href: "/services#portals"
  },
  {
    title: "CRM & Internal Tools",
    description: "Streamline your workflow with custom tools tailored to your process.",
    icon: <Database className="w-6 h-6" />,
    href: "/services#crm"
  },
  {
    title: "AI Automation & Chatbots",
    description: "Reduce support costs and automate repetitive tasks with AI.",
    icon: <Bot className="w-6 h-6" />,
    href: "/services#automation"
  },
  {
    title: "SaaS & MVP Development",
    description: "Launch your software idea fast with a scalable Minimum Viable Product.",
    icon: <BarChart3 className="w-6 h-6" />,
    href: "/services#saas"
  },
  {
    title: "Mobile App Development",
    description: "Native iOS and Android apps to engage your customers on the go.",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/services#mobile"
  },
];

const industries = [
  { name: "Real Estate", icon: <Building2 className="w-5 h-5" /> },
  { name: "Clinics & Healthcare", icon: <Stethoscope className="w-5 h-5" /> },
  { name: "Retail & E-commerce", icon: <ShoppingBag className="w-5 h-5" /> },
  { name: "Manufacturing", icon: <Factory className="w-5 h-5" /> },
  { name: "Restaurants & Cafés", icon: <Utensils className="w-5 h-5" /> },
  { name: "Agencies & Consulting", icon: <Users className="w-5 h-5" /> },
];

const projects = [
  {
    title: "AI Video Learning Platform",
    problem: "Manual course creation was slow and expensive.",
    result: "Automated video generation, reducing costs by 70%.",
    techStack: ["AI Video", "Automation", "Web Platform"],
    slug: "ai-learning-platform",
    imageSrc: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop"
  },
  {
    title: "Custom CRM for Logistics",
    problem: "Spreadsheets were causing lost leads and data errors.",
    result: "Centralized data, improved lead tracking by 40%.",
    techStack: ["Custom CRM", "Dashboard", "Automation"],
    slug: "logistics-crm",
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
  },
  {
    title: "Lead Management Portal",
    problem: "Sales team missed follow-ups due to disorganization.",
    result: "Automated follow-ups increased conversion by 25%.",
    techStack: ["Portal", "Lead Gen", "Analytics"],
    slug: "lead-portal",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
];

const pricingRanges = [
  { title: "Business Website", price: "$800 – $2,000", desc: "Perfect for establishing a professional online presence." },
  { title: "Custom Portal / CRM", price: "$1,500 – $6,000", desc: "Streamline operations with tailored business tools." },
  { title: "AI Chatbot / Automation", price: "$1,200 – $4,000", desc: "Automate support and workflows to save time." },
  { title: "SaaS / MVP", price: "$2,000 – $10,000", desc: "Launch your software product with a solid foundation." },
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />

      {/* Trust / Credibility Section */}
      <TrustBadges />

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solutions for <span className="text-gradient">Modern Businesses</span>
              </h2>
              <p className="text-lg text-slate-400">
                We build software that solves real business problems, not just code.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} withBorderBeam={true} />
            ))}
          </div>
        </Container>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-neutral-900/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We understand the unique challenges of your industry and build solutions to overcome them.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent-cyan/50 transition-colors text-center gap-3 group">
                <div className="p-3 rounded-full bg-white/5 text-slate-300 group-hover:text-accent-cyan transition-colors">
                  {industry.icon}
                </div>
                <span className="text-sm font-medium text-slate-200">{industry.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section className="py-24">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Real Results for <span className="text-gradient">Real Businesses</span>
              </h2>
              <p className="text-lg text-slate-400">
                See how we help companies save time and increase revenue.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/case-studies">
                View All Case Studies
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PortfolioCard key={project.slug} {...project} withBorderBeam={true} />
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline />

      {/* Pricing Section */}
      <section className="py-24 bg-neutral-900/30">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              No hidden fees. Clear investment ranges for your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingRanges.map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <div className="text-2xl font-bold text-accent-cyan mb-4">{item.price}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-6">
              * Final price depends on project scope and features.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">
                Get a Precise Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-premium opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
            >
              Ready to <span className="text-gradient">Grow Your Business?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
            >
              Let's build software that works for you. Schedule a free strategy call today.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <CTATracker id="home-cta">
                <Button size="xl" className="group text-lg px-8 h-14 bg-white text-black hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 duration-300 ease-out" asChild>
                  <Link href="/contact">
                    Book a 20-Minute Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:animate-bounce-x" />
                  </Link>
                </Button>
              </CTATracker>
              <Button size="xl" variant="outline" className="text-lg h-14 px-8" asChild>
                <Link href="/contact">
                  WhatsApp Us
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
