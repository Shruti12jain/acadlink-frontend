'use client';

import * as React from 'react';
import {
  Sheet as OriginalSheet,
  SheetPortal as OriginalSheetPortal,
  SheetOverlay as OriginalSheetOverlay,
  SheetTrigger as OriginalSheetTrigger,
  SheetClose as OriginalSheetClose,
  SheetContent as OriginalSheetContent,
  SheetHeader as OriginalSheetHeader,
  SheetFooter as OriginalSheetFooter,
  SheetTitle as OriginalSheetTitle,
  SheetDescription as OriginalSheetDescription,
} from '@/shadcn-components/sheet';
import { cn } from '@/lib/utils';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';

const Sheet = OriginalSheet;
const SheetTrigger = OriginalSheetTrigger;
const SheetClose = OriginalSheetClose;
const SheetPortal = OriginalSheetPortal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <OriginalSheetOverlay
    className={cn(
      // Add your custom classnames here
      // The original classnames from the component are:
      // "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  // Add your custom base classnames here
  // The original base classnames are:
  // "fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out dark:bg-zinc-950"
  '',
  {
    variants: {
      side: {
        top: '',
        bottom: '',
        left: '',
        right: '',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
  VariantProps<typeof sheetVariants> { }

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <OriginalSheetContent
      ref={ref}
      side={side}
      className={cn(
        // Add your custom classnames here
        className
      )}
      {...props}
    >
      {children}
    </OriginalSheetContent>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <OriginalSheetHeader
    className={cn(
      // Add your custom classnames here
      className
    )}
    {...props}
  />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <OriginalSheetFooter
    className={cn(
      // Add your custom classnames here
      className
    )}
    {...props}
  />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <OriginalSheetTitle
    ref={ref}
    className={cn(
      // Add your custom classnames here
      className
    )}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <OriginalSheetDescription
    ref={ref}
    className={cn(
      // Add your custom classnames here
      className
    )}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
