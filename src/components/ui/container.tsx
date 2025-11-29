import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
    as?: React.ElementType;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, as: Component = "div", children, ...props }, ref) => {
        const Comp = Component as any;
        return (
            <Comp
                ref={ref}
                className={cn(
                    "mx-auto w-full max-w-[1200px] px-6 md:px-12",
                    className
                )}
                {...props}
            >
                {children}
            </Comp>
        );
    }
);
Container.displayName = "Container";

export { Container };
