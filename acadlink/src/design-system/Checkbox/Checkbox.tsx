'use client';

import * as React from 'react';
import { Checkbox as OriginalCheckbox } from '@/shadcn-components/checkbox';
import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
  React.ElementRef<typeof OriginalCheckbox>,
  React.ComponentPropsWithoutRef<typeof OriginalCheckbox>
>(({ className, ...props }, ref) => (
  <OriginalCheckbox
    ref={ref}
    className={cn(
      // Add your custom classnames here to override the original
      'border-gray-500 data-[state=checked]:border-custom-primary-royal-blue data-[state=checked]:bg-custom-primary-royal-blue data-[state=checked]:text-zinc-50',
      className
    )}
    {...props}
  />
));
Checkbox.displayName = 'Checkbox';

export { Checkbox };
