import * as React from "react";
import {
  Badge as ShadcnBadge,
  badgeVariants as shadcnBadgeVariants,
} from "@/shadcn-components/badge";
import { cn } from "@/lib/utils";

/**
 * ? Custom badge variants extending ShadCN's badge styles.
 * - `default`: Standard badge with a custom background and text color.
 * - `success`: Highlights success-related statuses.
 * - `warning`: Represents warning or caution messages.
 * - `destructive`: Indicates errors or destructive actions.
 *
 * ? Size variants are also defined for different widths where -
 * - `default`: Default width for the badge.
 * - `wide`: Wider version of the badge.
 */

const badgeVariants = {
  default: cn(
    shadcnBadgeVariants({ variant: "default" }),
    "bg-custom-bg-ice text-custom-primary-royal-blue"
  ),
  success: "bg-custom-bg-mint text-custom-highlights-spring-green",
  warning: "bg-custom-notes-amber text-custom-highlights-tangerine",
  destructive: cn(
    shadcnBadgeVariants({ variant: "destructive" }),
    "bg-custom-notes-peach text-custom-highlights-scarlet"
  ),
};

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof badgeVariants;
  size?: "default" | "wide";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <ShadcnBadge
      className={cn(
        badgeVariants[variant],
        "flex items-center justify-center rounded-full px-2 py-1 text-center text-xs font-normal shadow-none 2xl:text-sm 4k:text-base",
        className,
        {
          "w-[4.75rem] 2xl:w-24 4k:w-28": size === "default",
          "w-24 2xl:w-28 4k:w-32": size === "wide",
        }
      )}
      {...props}
    />
  )
);

// ✅ Fix ESLint warning
Badge.displayName = "Badge";

export { Badge, badgeVariants };
