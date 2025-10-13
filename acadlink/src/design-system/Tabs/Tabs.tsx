'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Tabs as ShadcnTabs,
  TabsList as ShadcnTabsList,
  TabsTrigger as ShadcnTabsTrigger,
  TabsContent as ShadcnTabsContent,
} from '@/shadcn-components/tabs';

interface TabsProps extends React.ComponentPropsWithoutRef<typeof ShadcnTabs> {
  variant?: 'default' | 'outline' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

interface TabsListProps extends React.ComponentPropsWithoutRef<typeof ShadcnTabsList> {
  variant?: 'default' | 'outline' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

interface TabsTriggerProps extends React.ComponentPropsWithoutRef<typeof ShadcnTabsTrigger> {
  variant?: 'default' | 'outline' | 'pills' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

interface TabsContentProps extends React.ComponentPropsWithoutRef<typeof ShadcnTabsContent> {
  variant?: 'default' | 'outline' | 'pills';
  size?: 'sm' | 'md' | 'lg';
}

const Tabs = React.forwardRef<React.ElementRef<typeof ShadcnTabs>, TabsProps>(
  ({ className, variant = 'default', size = 'md', fullWidth = false, rounded = 'md', shadow = 'none', ...props }, ref) => {
    return (
      <ShadcnTabs
        ref={ref}
        className={cn(
          'w-full',
          {
            'w-full': fullWidth,
          },
          className
        )}
        {...props}
      />
    );
  }
);
Tabs.displayName = 'Tabs';

const TabsList = React.forwardRef<React.ElementRef<typeof ShadcnTabsList>, TabsListProps>(
  ({ className, variant = 'default', size = 'md', fullWidth = false, rounded = 'md', shadow = 'none', ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      {
        'w-full': fullWidth,
        'h-7': size === 'sm',
        'h-9': size === 'md',
        'h-11': size === 'lg',
        'bg-zinc-100 dark:bg-zinc-800': variant === 'default',
        'bg-transparent border border-zinc-200 dark:border-zinc-800': variant === 'outline',
        'bg-transparent': variant === 'pills' || variant === 'underline',
      },
      {
        'rounded-none': rounded === 'none' || variant === 'underline',
        'rounded-sm': rounded === 'sm' && variant !== 'underline',
        'rounded-md': rounded === 'md' && variant !== 'underline',
        'rounded-lg': rounded === 'lg' && variant !== 'underline',
        'rounded-xl': rounded === 'xl' && variant !== 'underline',
        'rounded-full': rounded === 'full' && variant !== 'underline',
      },
      {
        'shadow-none': shadow === 'none',
        'shadow-sm': shadow === 'sm',
        'shadow-md': shadow === 'md',
        'shadow-lg': shadow === 'lg',
      },
      className
    );

    return (
      <ShadcnTabsList
        ref={ref}
        className={baseStyles}
        {...props}
      />
    );
  }
);
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef<React.ElementRef<typeof ShadcnTabsTrigger>, TabsTriggerProps>(
  ({ className, variant = 'default', size = 'md', fullWidth = false, ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      {
        'flex-1': fullWidth,
        'h-7 px-2 text-xs': size === 'sm',
        'h-9 px-3 text-sm': size === 'md',
        'h-11 px-4 text-base': size === 'lg',
        'data-[state=active]:text-zinc-950': variant === 'default',
        'border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:text-blue-500': variant === 'outline',
        'rounded-3xl data-[state=active]:text-gray-600': variant === 'pills',
        'relative text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-[#0316FF] after:transform after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform data-[state=active]:bg-transparent': variant === 'underline',
      },
      className
    );

    return (
      <ShadcnTabsTrigger
        ref={ref}
        className={baseStyles}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef<React.ElementRef<typeof ShadcnTabsContent>, TabsContentProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = cn(
      'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300',
      {
        'p-2': size === 'sm',
        'p-3': size === 'md',
        'p-4': size === 'lg',
      },
      className
    );

    return (
      <ShadcnTabsContent
        ref={ref}
        className={baseStyles}
        {...props}
      />
    );
  }
);
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };
