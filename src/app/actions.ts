"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    budget: z.string().min(1, "Please select a budget range"),
    projectType: z.string().min(1, "Please select a project type"),
    description: z.string().min(10, "Please provide a brief description"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        budget: formData.get("budget"),
        projectType: formData.get("projectType"),
        description: formData.get("description"),
    };

    const validatedFields = contactSchema.safeParse(data);

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please check the form for errors.",
        };
    }

    // Simulate API call / Webhook
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", validatedFields.data);

    // Here you would send to webhook or email
    // await fetch(process.env.WEBHOOK_URL, { method: 'POST', body: JSON.stringify(validatedFields.data) })

    return {
        success: true,
        message: "Thanks! We'll be in touch shortly.",
    };
}
