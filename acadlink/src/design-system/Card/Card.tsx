import * as React from 'react';
import {
  Card as ShadcnCard,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from '@/shadcn-components/card';

import { cn } from '@/lib/utils';

/**
 * ? Card:
 * - Wraps the base Card component from ShadCN.
 * - Applies rounded corners and shadow styling consistent with the design system.
 * - Removes default border and sets base background and text color.
 */

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ShadcnCard
      ref={ref}
      className={cn(
        'rounded-3xl border-none bg-white text-custom-neutrals-charcoal shadow-md 2xl:rounded-[2rem] 4k:rounded-[2.5rem]',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

/**
 * ? CardHeader:
 * - Provides top spacing and padding inside the Card.
 * - Useful for holding titles, subtitles, or header icons.
 */

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ShadcnCardHeader
      ref={ref}
      className={cn('space-y-1 px-4 2xl:space-y-1.5 2xl:px-6', className)}
      {...props}
    />
  )
);
CardHeader.displayName = 'CardHeader';

/**
 * ? CardTitle:
 * - Displays the title of the card.
 * - Uses a bold font style and custom text color.
 * - Adjusts font size for different screen resolutions.
 */

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ShadcnCardTitle
      ref={ref}
      className={cn(
        'text-lg font-bold text-custom-neutrals-charcoal 2xl:text-xl 4k:text-2xl',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

/**
 * ? CardDescription:
 * - Provides a brief description or subtitle for the card.
 * - Uses a smaller font size and lighter text color.
 * - Adjusts font size for different screen resolutions.
 */

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ShadcnCardDescription
      ref={ref}
      className={cn('text-sm text-custom-greys-ash 2xl:text-base', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

/**
 * ? CardContent:
 * - Main content area of the card.
 * - Provides padding and spacing for child elements.
 * - Useful for holding text, images, or other components.
 */

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ShadcnCardContent ref={ref} className={cn('px-4 2xl:px-6', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

/**
 * ? CardFooter:
 * - Bottom section of the card.
 * - Provides padding and spacing for child elements.
 * - Useful for holding action buttons or additional information.
 */

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <ShadcnCardFooter ref={ref} className={cn('px-4 2xl:px-6', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
