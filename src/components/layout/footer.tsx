import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
    return (
        <footer className="bg-black/20 border-t border-white/10 py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-foreground block mb-4">
                            Elev<span className="text-accent-cyan">Encoder</span>
                        </Link>
                        <p className="text-slate-400 max-w-sm leading-relaxed">
                            We help businesses go digital with custom software, AI automation, and high-converting websites. No jargon, just results.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Services</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Business Websites</Link></li>
                            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Custom Portals</Link></li>
                            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">AI Automation</Link></li>
                            <li><Link href="/services" className="hover:text-accent-cyan transition-colors">Mobile Apps</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><Link href="/about" className="hover:text-accent-cyan transition-colors">About Us</Link></li>
                            <li><Link href="/industries" className="hover:text-accent-cyan transition-colors">Industries</Link></li>
                            <li><Link href="/case-studies" className="hover:text-accent-cyan transition-colors">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-accent-cyan transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} ElevEncoder. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
