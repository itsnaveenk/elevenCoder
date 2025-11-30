"use client";

import { HeroSection } from "@/components/features/hero-section";
import { ProblemSolution } from "@/components/features/problem-solution";
import { ServiceCard } from "@/components/features/service-card";
import { GlobalImpact } from "@/components/features/global-impact";
import { PortfolioCard } from "@/components/features/portfolio-card";
import { TrustBadges } from "@/components/features/trust-badges";
import { Testimonials } from "@/components/features/testimonials";
import { ProcessTimeline } from "@/components/features/process-timeline";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, Bot, Smartphone, Database, BarChart3, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { CTATracker } from "@/components/ui/cta-visibility-context";

const services = [
  {
    title: "Web App Development",
    description: "Scalable, high-performance web applications built with Next.js and React.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    href: "/services#web-apps"
  },
  {
    title: "Mobile App Development",
    description: "Native-quality mobile experiences for iOS and Android using React Native.",
    icon: <Smartphone className="w-6 h-6" />,
    href: "/services#mobile-apps"
  },
  {
    title: "AI Automation & Chatbots",
    description: "Intelligent agents that automate customer support and internal workflows.",
    icon: <Bot className="w-6 h-6" />,
    href: "/services#ai-automation"
  },
  {
    title: "Internal Tools (CRM/ERP)",
    description: "Custom dashboards to streamline your business operations.",
    icon: <Database className="w-6 h-6" />,
    href: "/services#internal-tools"
  },
  {
    title: "Dashboards & Analytics",
    description: "Visualize your data with interactive, real-time dashboards.",
    icon: <BarChart3 className="w-6 h-6" />,
    href: "/services#analytics"
  },
  {
    title: "Backend & Cloud DevOps",
    description: "Secure, scalable infrastructure on AWS, Google Cloud, or Azure.",
    icon: <Globe className="w-6 h-6" />,
    href: "/services#cloud"
  },
];

const projects = [
  {
    title: "Global Logistics Dashboard",
    problem: "Manual tracking caused 20% delays in shipments.",
    result: "Reduced delays by 90% and saved $50k/month.",
    techStack: ["Next.js", "Supabase", "Mapbox"],
    slug: "logistics-dashboard",
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop"
  },
  {
    title: "AI Legal Assistant",
    problem: "Lawyers spent 10+ hours/week on document review.",
    result: "Automated 80% of review, 3x faster turnaround.",
    techStack: ["Python", "OpenAI", "React"],
    slug: "ai-legal",
    imageSrc: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&h=600&fit=crop"
  },
  {
    title: "FinTech Mobile App",
    problem: "Legacy app had poor UX and 2.5 star rating.",
    result: "Redesign achieved 4.8 stars and 200% user growth.",
    techStack: ["React Native", "Node.js", "Stripe"],
    slug: "fintech-app",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  },
];

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />

      <ProblemSolution />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <GlobalImpact />
      </motion.div>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-gradient">Core Services</span>
              </h2>
              <p className="text-lg text-slate-400">
                End-to-end development capabilities for modern businesses.
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



      {/* Case Studies Section */}
      <section className="py-24 bg-neutral-900/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Recent <span className="text-gradient">Work</span>
              </h2>
              <p className="text-lg text-slate-400">
                See how we help companies scale and succeed.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/portfolio">
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

      <TrustBadges />

      <Testimonials />

      <ProcessTimeline />

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
              Ready to Build Something <span className="text-gradient">Great?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto"
            >
              Let's take your business to the next level. Schedule a call to discuss your project.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <CTATracker id="home-cta">
                <Button size="xl" className="group text-lg px-8 h-14 bg-white text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-transform duration-300 ease-out" asChild>
                  <Link href="/contact">
                    Schedule a Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:animate-bounce-x" />
                  </Link>
                </Button>
              </CTATracker>
              <Button size="xl" variant="outline" className="text-lg h-14 px-8" asChild>
                <Link href="/contact">
                  Get a Project Quote
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
