'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Textarea as ShadcnTextarea } from '@/shadcn-components/textarea';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
  width?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({
    className,
    error = false,
    rounded = 'md',
    shadow = 'none',
    border = true,
    inputSize = 'md',
    width,
    ...props
  }, ref) => {
    const baseStyles = cn(
      'px-4 py-3 outline-none text-gray-600 resize-none focus:outline-none',
      
      border && !error ? 'border border-[#D4E6FF] bg-white focus:border-[#D4E6FF]' : '',
      error ? ' bg-[#FCE7EC] placeholder:text-[#EB8D85] focus:border-[#EB8D85]' : 'placeholder:text-gray-400',
      {
        sm: 'h-20 text-sm',
        md: 'h-24 text-base',
        lg: 'h-28 text-lg',
      }[inputSize],
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

    const containerStyles = cn(
      'relative',
      width || 'w-full'
    );

    return (
      <div className={containerStyles}>
        <ShadcnTextarea
          ref={ref}
          className={baseStyles}
          {...props}
        />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };

