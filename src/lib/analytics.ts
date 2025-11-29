type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value?: number;
};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", GA_TRACKING_ID, {
            page_path: url,
        });
    }
};

export const event = ({ action, category, label, value }: GTagEvent) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

export const trackLeadSubmission = () => {
    event({
        action: "lead_submitted",
        category: "Contact",
        label: "Lead Form",
    });
};

export const trackBookCall = () => {
    event({
        action: "book_call_click",
        category: "Contact",
        label: "Calendly",
    });
};
