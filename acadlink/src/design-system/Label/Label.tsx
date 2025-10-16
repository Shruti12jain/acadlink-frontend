import * as React from 'react';
import { Label as BaseLabel } from '../../shadcn-components/label';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const labelVariants = cva(
  'transition-colors duration-200',
  {
    variants: {
      variant: {
        default: 'text-zinc-900 dark:text-zinc-100',
        secondary: 'text-zinc-600 dark:text-zinc-400',
        error: 'text-red-500 dark:text-red-400',
        success: 'text-green-500 dark:text-green-400',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
      required: {
        true: 'after:content-["*"] after:ml-0.5 after:text-red-500',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      weight: 'medium',
    }
  }
);

export interface LabelProps extends React.ComponentPropsWithoutRef<typeof BaseLabel> {
  variant?: 'default' | 'secondary' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  required?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, size, weight, required, ...props }, ref) => {
    return (
      <BaseLabel
        ref={ref}
        className={cn(
          labelVariants({ variant, size, weight, required }),
          className
        )}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';

export { Label, labelVariants }; 