"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";

type CTAVisibilityContextType = {
    setCTAVisible: (id: string, isVisible: boolean) => void;
    isAnyCTAVisible: boolean;
};

const CTAVisibilityContext = createContext<CTAVisibilityContextType | undefined>(undefined);

export function CTAVisibilityProvider({ children }: { children: React.ReactNode }) {
    const [visibilityMap, setVisibilityMap] = useState<Record<string, boolean>>({});

    const setCTAVisible = useCallback((id: string, isVisible: boolean) => {
        setVisibilityMap((prev) => {
            if (prev[id] === isVisible) return prev;
            return { ...prev, [id]: isVisible };
        });
    }, []);

    const isAnyCTAVisible = Object.values(visibilityMap).some((v) => v);

    return (
        <CTAVisibilityContext.Provider value={{ setCTAVisible, isAnyCTAVisible }}>
            {children}
        </CTAVisibilityContext.Provider>
    );
}

export function useCTAVisibility() {
    const context = useContext(CTAVisibilityContext);
    if (!context) {
        throw new Error("useCTAVisibility must be used within a CTAVisibilityProvider");
    }
    return context;
}

export function useTrackCTA(id: string) {
    const { setCTAVisible } = useCTAVisibility();
    const ref = React.useRef(null);
    const isInView = useInView(ref, { margin: "0px 0px -100px 0px" }); // Adjust margin as needed

    useEffect(() => {
        setCTAVisible(id, isInView);
        return () => setCTAVisible(id, false);
    }, [id, isInView, setCTAVisible]);

    return ref;
}

export function CTATracker({ id, children, className }: { id: string, children: React.ReactNode, className?: string }) {
    const ref = useTrackCTA(id);
    return <div ref={ref} className={className}>{children}</div>;
}
