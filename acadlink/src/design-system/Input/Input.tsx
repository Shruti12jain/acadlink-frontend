'use client';

import * as React from 'react';
import { Search, ArrowRight, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  inputSize?: 'sm' | 'md' | 'lg';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(

  (
    {
      className,
      leftIcon,
      rightIcon,
      error = false,
      rounded = 'md',
      shadow = 'none',
      border = true,
      inputSize = 'md',
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'w-full px-11 outline-none text-gray-600 placeholder-gray-400 bg-gray-100 ',

      border && !error ? 'border border-[#D4E6FF]' : '',
      error ? 'border border-[#EC0101] focus:ring-1 focus:ring-[#EC0101]' : '',
      {
        sm: 'h-10 text-sm',
        md: 'h-12 text-base',
        lg: 'h-14 text-lg',
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

    return (
      <>
        {/* Left Icon */}
        {leftIcon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{leftIcon}</span>
        )}

        <input ref={ref} className={cn(baseStyles, className)} {...props} />

        {/* Right Icon / Error Icon */}
        {error ? (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#EC0101] ">
            <AlertCircle size={20} />
          </span>
        ) : (
          rightIcon && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2">{rightIcon}</span>
          )
        )}
      </>
    );
  }
);

Input.displayName = 'input';

export { Input };
