import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import {
  Alert as ShadcnAlert,
  AlertDescription as ShadcnAlertDescription,
  AlertTitle as ShadcnAlertTitle,
} from '@/shadcn-components/alert';

import { cn } from '@/lib/utils';

/**
 * ? alertVariants:
 * - Defines reusable variant-based styles for the Alert component.
 * - Supports `default` and `destructive` visual styles.
 * - Includes layout tweaks for consistent icon and content alignment.
 */

const alertVariants = cva(
  'relative w-full rounded-2xl border px-4 py-4 text-sm [&>svg+div]:translate-y-[-2px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-custom-neutrals-charcoal [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-custom-greys-white text-custom-neutrals-charcoal border-custom-greys-border',
        destructive:
          'text-custom-highlights-scarlet border-custom-highlights-scarlet/20 [&>svg]:text-custom-highlights-scarlet',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

/**
 * ? Alert:
 * - Main component that wraps the base Alert component from ShadCN.
 * - Applies rounded corners and shadow styling consistent with the design system.
 * - Removes default border and sets base background and text color.
 */

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <ShadcnAlert
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
));
Alert.displayName = 'Alert';

/**
 * ? AlertTitle:
 * - Displays the title of the alert.
 * - Uses a bold font style and custom text color.
 * - Adjusts font size for different screen resolutions.
 */

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <ShadcnAlertTitle
      ref={ref}
      className={cn('mb-1 text-sm font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);
AlertTitle.displayName = 'AlertTitle';

/**
 * ? AlertDescription:
 * - Provides a description for the alert.
 * - Ensures proper spacing and alignment of items.
 * - Uses a smaller font size for descriptions.
 */

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <ShadcnAlertDescription
    ref={ref}
    className={cn('text-xs text-custom-greys-ash [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
