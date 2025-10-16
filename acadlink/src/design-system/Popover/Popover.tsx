'use client';

import * as React from 'react';
import {
  Popover as OriginalPopover,
  PopoverTrigger as OriginalPopoverTrigger,
  PopoverContent as OriginalPopoverContent,
  PopoverAnchor as OriginalPopoverAnchor,
} from '@/shadcn-components/popover';
import { cn } from '@/lib/utils';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const Popover = OriginalPopover;
const PopoverTrigger = OriginalPopoverTrigger;
const PopoverAnchor = OriginalPopoverAnchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof OriginalPopoverContent>,
  React.ComponentPropsWithoutRef<typeof OriginalPopoverContent>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <OriginalPopoverContent
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      // The original classnames are:
      'z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50',
      // Add your custom classnames here
      'bg-custom-primary-royal-blue p-2 bg-black text-white',
      className
    )}
    {...props}
  />
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
