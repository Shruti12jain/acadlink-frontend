import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    size?: "sm" | "md" | "lg";
    rounded?: "none" | "sm" | "md" | "lg" | "full";
    shadow?: "none" | "sm" | "md" | "lg";
    border?: boolean;
    error?: boolean;
    success?: boolean;
    width?: string;
    height?: string; 
    indicatorColor?: string;
    backgroundColor?: string;
}

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    ProgressProps
>(({ 
    className, 
    value, 
    size = "md", 
    rounded = "md", 
    shadow = "none", 
    border = false, 
    error = false, 
    success = false,
    width = "100%",
    height,
    indicatorColor,
    backgroundColor,
    ...props 
}, ref) => {
    const getHeight = () => {
        if (height) return height;
        switch (size) {
            case "sm": return "0.25rem";
            case "lg": return "0.75rem";
            default: return "0.5rem";
        }
    };

    const getIndicatorColor = () => {
        if (indicatorColor) return indicatorColor;
        if (error) return "bg-red-500";
        if (success) return "bg-green-500";
        return "bg-blue-500";
    };

    const getBackgroundColor = () => {
        if (backgroundColor) return backgroundColor;
        if (error) return "bg-red-50";
        if (success) return "bg-green-50";
        return "bg-gray-100";
    };

    return (
        <div className="w-full">
            <ProgressPrimitive.Root
                ref={ref}
                className={cn(
                    "relative overflow-hidden w-full",
                    {
                        "rounded-none": rounded === "none",
                        "rounded-sm": rounded === "sm",
                        "rounded-md": rounded === "md",
                        "rounded-lg": rounded === "lg",
                        "rounded-full": rounded === "full",
                        "shadow-sm": shadow === "sm",
                        "shadow-md": shadow === "md",
                        "shadow-lg": shadow === "lg",
                        "border border-gray-200": border,
                    },
                    getBackgroundColor(),
                    className
                )}
                style={{ height: getHeight() }}
                {...props}
            >
                <ProgressPrimitive.Indicator
                    className={cn(
                        "h-full w-full flex-1 transition-all",
                        getIndicatorColor()
                    )}
                    style={{ 
                        transform: `translateX(-${100 - (value || 0)}%)`,
                    }}
                />
            </ProgressPrimitive.Root>
        </div>
    );
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
export type { ProgressProps };

// Add this to your global CSS or styles
/*
@keyframes indeterminate {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

.animate-indeterminate {
    animation: indeterminate 1.5s infinite linear;
}
*/
