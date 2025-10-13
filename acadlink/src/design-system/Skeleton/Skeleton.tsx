import * as React from 'react';
import { Skeleton as BaseSkeleton } from '../../shadcn-components/skeleton';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const skeletonVariants = cva(
  'animate-pulse',
  {
    variants: { 
      variant: {
        default: 'bg-zinc-200 dark:bg-zinc-800',
        subtle: 'bg-zinc-100 dark:bg-zinc-900',
        primary: 'bg-primary/20',
        card: 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800',
      },
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
        xl: 'rounded-xl',
        '2xl': 'rounded-2xl',
      },
      size: {
        auto: '',
        xs: 'h-2',
        sm: 'h-4',
        md: 'h-6',
        lg: 'h-8',
        xl: 'h-10',
        '2xl': 'h-12',
        full: 'h-full',
      },
      width: {
        auto: '',
        full: 'w-full',
        '1/2': 'w-1/2',
        '1/3': 'w-1/3',
        '2/3': 'w-2/3',
        '1/4': 'w-1/4',
        '3/4': 'w-3/4',
        '1/5': 'w-1/5',
        '2/5': 'w-2/5',
        '3/5': 'w-3/5',
        '4/5': 'w-4/5',
        '1/6': 'w-1/6',
        '5/6': 'w-5/6',
        '1/8': 'w-1/8',
        '1/12': 'w-1/12',
        '5/12': 'w-5/12',
        '7/12': 'w-7/12',
        '11/12': 'w-11/12',
      }
    },
    defaultVariants: {
      variant: 'default',
      rounded: 'md',
      size: 'auto',
      width: 'auto',
    }
  }
);

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'subtle' | 'primary' | 'card';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full' | 'xl' | '2xl';
  size?: 'auto' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  width?: 'auto' | 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4' | '1/5' | '2/5' | '3/5' | '4/5' | '1/6' | '5/6' | '1/8' | '1/12' | '5/12' | '7/12' | '11/12';
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant, rounded, size, width, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          skeletonVariants({ variant, rounded, size, width }),
          className
        )}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton, skeletonVariants }; 