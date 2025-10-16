import * as React from 'react';
import { Toggle as BaseToggle } from '../../shadcn-components/toggle';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const toggleVariants = cva(
  'transition-all duration-200',
  {
    variants: {
      appearance: {
        primary: 'bg-primary hover:bg-primary/90 text-white',
        secondary: 'bg-secondary hover:bg-secondary/90 text-white',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'hover:bg-primary/10 text-primary',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      }
    },
    defaultVariants: {
      appearance: 'primary',
      rounded: 'md',
      size: 'md',
    }
  }
);

type ToggleVariants = VariantProps<typeof toggleVariants>;

export interface ToggleProps 
  extends Omit<React.ComponentPropsWithoutRef<typeof BaseToggle>, 'size' | 'variant'>,
    ToggleVariants {
  icon?: React.ReactNode;
  label?: string;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, appearance, rounded, size, icon, label, ...props }, ref) => {
    return (
      <BaseToggle
        ref={ref}
        className={cn(
          toggleVariants({ appearance, rounded, size }),
          className
        )}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {label}
      </BaseToggle>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle, toggleVariants }; 