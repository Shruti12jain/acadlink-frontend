// import * as React from 'react';
// import {
//   Accordion as ShadcnAccordion,
//   AccordionItem as ShadcnAccordionItem,
//   AccordionTrigger as ShadcnAccordionTrigger,
//   AccordionContent as ShadcnAccordionContent,
// } from '@/shadcn-components/accordion';
// import { cn } from '@/utils';
//
// const Accordion = ShadcnAccordion;
//
// const AccordionItem = React.forwardRef<
//   React.ElementRef<typeof ShadcnAccordionItem>,
//   React.ComponentPropsWithoutRef<typeof ShadcnAccordionItem>
// >(({ className, ...props }, ref) => (
//   <ShadcnAccordionItem ref={ref} className={cn('', className)} {...props} />
// ));
// AccordionItem.displayName = 'AccordionItem';
//
// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof ShadcnAccordionTrigger>,
//   React.ComponentPropsWithoutRef<typeof ShadcnAccordionTrigger>
// >(({ className, ...props }, ref) => (
//   <ShadcnAccordionTrigger ref={ref} className={cn('', className)} {...props} />
// ));
// AccordionTrigger.displayName = 'AccordionTrigger';
//
// const AccordionContent = React.forwardRef<
//   React.ElementRef<typeof ShadcnAccordionContent>,
//   React.ComponentPropsWithoutRef<typeof ShadcnAccordionContent>
// >(({ className, ...props }, ref) => (
//   <ShadcnAccordionContent ref={ref} className={cn('', className)} {...props} />
// ));
// AccordionContent.displayName = 'AccordionContent';
//
// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//
// import * as React from 'react';
// import {
//   Accordion as ShadcnAccordion,
//   AccordionItem as ShadcnAccordionItem,
//   AccordionTrigger as ShadcnAccordionTrigger,
//   AccordionContent as ShadcnAccordionContent,
// } from '@/shadcn-components/accordion';
// import { cn } from '@/utils';
//
// // Explicitly define prop types
// interface AccordionItemProps extends React.ComponentProps<typeof ShadcnAccordionItem> {
//   children: React.ReactNode;
//   value: string;
// }
//
// const Accordion = ShadcnAccordion;
//
// const AccordionItem = React.forwardRef<
//   React.ElementRef<typeof ShadcnAccordionItem>,
//   AccordionItemProps
// >(({ className, children, ...props }, ref) => (
//   <ShadcnAccordionItem ref={ref} className={cn('', className)} {...props}>
//     {children}
//   </ShadcnAccordionItem>
// ));
// AccordionItem.displayName = 'AccordionItem';
//
// const AccordionTrigger = React.forwardRef<
//   React.ElementRef<typeof ShadcnAccordionTrigger>,
//   React.ComponentPropsWithoutRef<typeof ShadcnAccordionTrigger>
// >(({ className, ...props }, ref) => (
//   <ShadcnAccordionTrigger ref={ref} className={cn('', className)} {...props} />
// ));
// AccordionTrigger.displayName = 'AccordionTrigger';
//
// const AccordionContent = React.forwardRef<
//   React.ElementRef<typeof ShadcnAccordionContent>,
//   React.ComponentPropsWithoutRef<typeof ShadcnAccordionContent>
// >(({ className, ...props }, ref) => (
//   <ShadcnAccordionContent ref={ref} className={cn('', className)} {...props} />
// ));
// AccordionContent.displayName = 'AccordionContent';
//
// export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//
import * as React from 'react';

// Re-exporting the base Accordion component from shadcn without modifications which ensures consistency across the project while keeping customization flexible.

import {
  Accordion as ShadcnAccordion,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
  AccordionContent as ShadcnAccordionContent,
} from "@/shadcn-components/accordion";
import { cn } from '@/lib/utils';

const Accordion = ShadcnAccordion;

/**
 * ? Custom-styled AccordionTrigger, AccordionItem & AccordionContent to match typography and spacing standards.
 * - Inherits default behavior but overrides styles for larger screens {2xl(1440px) & 4k(2560px)}.
 * - Prevents default underline behavior on hover.
 */

const AccordionItem = React.forwardRef<React.ElementRef<typeof ShadcnAccordionItem>,
  React.ComponentPropsWithoutRef<typeof ShadcnAccordionItem>
>(({ className, ...props }, ref) => (
  <ShadcnAccordionItem
    ref={ref}
    className={cn('border-b-custom-greys-ash', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof ShadcnAccordionTrigger>,
  React.ComponentPropsWithoutRef<typeof ShadcnAccordionTrigger>
>(({ className, ...props }, ref) => (
  <ShadcnAccordionTrigger
    ref={ref}
    className={cn(
      'text-custom-neutrals-charcoal font-normal hover:no-underline 2xl:py-6 2xl:text-base 4k:text-lg',
      className
    )}
    {...props}
  />
));
AccordionTrigger.displayName = 'AccordionTrigger';

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof ShadcnAccordionContent>,
  React.ComponentPropsWithoutRef<typeof ShadcnAccordionContent>
>(({ className, ...props }, ref) => (
  <ShadcnAccordionContent
    ref={ref}
    className={cn('text-custom-greys-graphite 2xl:text-base 4k:text-lg', className)}
    {...props}
  />
));
AccordionContent.displayName = 'AccordionContent';

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
