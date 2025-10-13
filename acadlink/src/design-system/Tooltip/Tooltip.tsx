import * as React from 'react';
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent as ShadcnTooltipContent,
  TooltipProvider,
} from '@/shadcn-components/tooltip';
import { cn } from '@/lib/utils';

/**
 * ? Design System TooltipContent Wrapper
 ------------------------------------------
 * - This wrapper extends the base ShadCN TooltipContent
 * - Applies consistent design system styling, responsive sizing, and default spacing
 * - Maintains flexibility by allowing consumer overrides via `className`
 */

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof ShadcnTooltipContent>,
  React.ComponentPropsWithoutRef<typeof ShadcnTooltipContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <ShadcnTooltipContent
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'rounded-[0.875rem] bg-white px-4 py-2 text-xs text-custom-neutrals-charcoal shadow-md 2xl:rounded-2xl 2xl:px-6 2xl:text-sm 4k:rounded-[1.125rem] 4k:text-base',
      className
    )}
    {...props}
  />
));

TooltipContent.displayName = ShadcnTooltipContent.displayName;

export { TooltipContent, TooltipTrigger, Tooltip, TooltipProvider };