"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Loader2 } from "lucide-react";

const initialState = {
    success: false,
    message: "",
    errors: {},
};

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

    if (state.success) {
        return (
            <GlassCard className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <ArrowRight className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-slate-400 mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <Button variant="outline" onClick={() => window.location.reload()}>
                    Send another message
                </Button>
            </GlassCard>
        );
    }

    return (
        <GlassCard>
            <form action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all bg-white/5 text-white placeholder:text-slate-500"
                            placeholder="John Doe"
                        />
                        {state.errors?.name && <p className="text-xs text-red-400">{state.errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all bg-white/5 text-white placeholder:text-slate-500"
                            placeholder="john@company.com"
                        />
                        {state.errors?.email && <p className="text-xs text-red-400">{state.errors.email}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-300">Company (Optional)</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all bg-white/5 text-white placeholder:text-slate-500"
                        placeholder="Acme Inc."
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="budget" className="text-sm font-medium text-slate-300">Budget Range</label>
                        <select
                            id="budget"
                            name="budget"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all bg-white/5 text-white"
                            defaultValue=""
                        >
                            <option value="" disabled className="bg-slate-900">Select a range</option>
                            <option value="micro" className="bg-slate-900">$900 - $2k (Micro-Project)</option>
                            <option value="small" className="bg-slate-900">$2k - $5k</option>
                            <option value="medium" className="bg-slate-900">$5k - $15k</option>
                            <option value="large" className="bg-slate-900">$15k+</option>
                        </select>
                        {state.errors?.budget && <p className="text-xs text-red-400">{state.errors.budget}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="projectType" className="text-sm font-medium text-slate-300">Project Type</label>
                        <select
                            id="projectType"
                            name="projectType"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all bg-white/5 text-white"
                            defaultValue=""
                        >
                            <option value="" disabled className="bg-slate-900">Select a type</option>
                            <option value="webapp" className="bg-slate-900">Web Application</option>
                            <option value="ai" className="bg-slate-900">AI & Automation</option>
                            <option value="mvp" className="bg-slate-900">MVP Development</option>
                            <option value="other" className="bg-slate-900">Other</option>
                        </select>
                        {state.errors?.projectType && <p className="text-xs text-red-400">{state.errors.projectType}</p>}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="description" className="text-sm font-medium text-slate-300">Project Description</label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 transition-all bg-white/5 text-white placeholder:text-slate-500 resize-none"
                        placeholder="Tell us about your project..."
                    />
                    {state.errors?.description && <p className="text-xs text-red-400">{state.errors.description}</p>}
                </div>

                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </Button>

                {state.message && !state.success && (
                    <p className="text-center text-red-400 text-sm mt-2">{state.message}</p>
                )}
            </form>
        </GlassCard>
    );
}
