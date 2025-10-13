'use client';

import * as React from 'react';
import { Slider as OriginalSlider } from '@/shadcn-components/slider'; // Adjust the import path as needed
import { cn } from '@/lib/utils';
import * as SliderPrimitive from '@radix-ui/react-slider';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <OriginalSlider
    ref={ref}
    className={cn(
      // Add your custom classnames here
      // The original classnames are:
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-zinc-700/20 dark:bg-zinc-50/20">
      <SliderPrimitive.Range className="absolute h-full bg-custom-primary-royal-blue dark:bg-zinc-50" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-custom-primary-royal-blue/20 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-custom-primary-royal-blue/30 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-950 dark:focus-visible:ring-zinc-300" />
  </OriginalSlider>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
