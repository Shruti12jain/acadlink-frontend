'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  RadioGroup as ShadcnRadioGroup,
  RadioGroupItem as ShadcnRadioGroupItem,
} from '@/shadcn-components/radio-group';

interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof ShadcnRadioGroup> {
  error?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
  orientation?: 'horizontal' | 'vertical';
  label?: string;
  description?: string;
  variant?: 'default' | 'priority' | 'status' | 'payment' | 'paymentStatus';
}

interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof ShadcnRadioGroupItem> {
  label?: string;
  description?: string;
  color?: 'default' | 'low' | 'medium' | 'high' | 'paid' | 'unpaid';
  icon?: React.ReactNode;
}

const RadioGroup = React.forwardRef<React.ElementRef<typeof ShadcnRadioGroup>, RadioGroupProps>(
  ({
    className,
    error = false,
    rounded = 'md',
    shadow = 'none',
    border = false,
    inputSize = 'md',
    orientation = 'vertical',
    label,
    description,
    variant = 'default',
    children,
    ...props
  }, ref) => {
    const baseStyles = cn(
      'grid gap-2',
      {
        'flex flex-col gap-2': orientation === 'vertical',
        'flex flex-row items-center gap-4': orientation === 'horizontal',
      },
      {
        'border border-[#D4E6FF] p-4': border && !error,
        'border border-[#EC0101] p-4': error,
      },
      {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-2xl',
        full: 'rounded-full',
      }[rounded],
      {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
      }[shadow],
      className
    );

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        {description && (
          <p className="text-sm text-gray-500">
            {description}
          </p>
        )}
        <ShadcnRadioGroup
          ref={ref}
          className={baseStyles}
          {...props}
        >
          {children}
        </ShadcnRadioGroup>
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof ShadcnRadioGroupItem>, RadioGroupItemProps>(
  ({ className, label, description, color = 'default', icon, children, ...props }, ref) => {
    // Label background styles based on color
    const labelStyles = {
      default: '',
      low: 'bg-[#E8F5E9] text-[#2E7D32]',
      medium: 'bg-[#FFF3E0] text-[#EF6C00]',
      high: 'bg-[#FFEBEE] text-[#C62828]',
      paid: 'bg-[#E8F5E9] text-[#2E7D32]',
      unpaid: 'bg-[#FFF3E0] text-[#EF6C00]',
    }[color];

    const isPaymentOption = props.value === 'cash' || props.value === 'upi' || props.value === 'card';
    const isPriorityOrPaymentStatus = color === 'low' || color === 'medium' || color === 'high' || color === 'paid' || color === 'unpaid';

    return (
      <div className={cn(
        "flex items-center gap-3 py-3 px-4",
        isPaymentOption ? "bg-white rounded-lg w-full" : "",
      )}>
        <ShadcnRadioGroupItem
          ref={ref}
          className={cn(
            'aspect-square h-4 w-4 [&_svg]:h-2.5 [&_svg]:w-2.5 rounded-full border-[1.4px] border-[#0316FF] text-[#0316FF] shadow-none focus:outline-none focus-visible:ring-1 focus-visible:ring-current disabled:cursor-not-allowed disabled:opacity-50',
            // Improve inner circle spacing with custom CSS
            '[&[data-state=checked]]:relative',
            '[&[data-state=checked]]:after:absolute [&[data-state=checked]]:after:inset-0',
            '[&[data-state=checked]]:after:m-auto',
            '[&[data-state=checked]]:after:content-[""] [&[data-state=checked]]:after:block',
            '[&[data-state=checked]]:after:w-1.5 [&[data-state=checked]]:after:h-1.5',
            '[&[data-state=checked]]:after:rounded-full [&[data-state=checked]]:after:bg-current',
            className
          )}
          {...props}
        />
        {label && (
          <div className="flex items-center gap-2">
            {icon && <span className="w-6 h-6">{icon}</span>}
            <span className={cn(
              "text-sm font-medium",
              isPriorityOrPaymentStatus ? `${labelStyles} px-4 py-2 rounded-full` : ""
            )}>
              {label}
            </span>
            {description && (
              <span className="text-sm opacity-70">
                {description}
              </span>
            )}
          </div>
        )}
      </div>
    );
  }
);

RadioGroupItem.displayName = 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };

