'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface BoxConfig {
  capacity: number;
}

type Variant = 'default' | 'fourDigitBoxes' | 'singleDigits' | 'mixedCapacity';

interface InputOTPProps {
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  variant?: Variant;
  error?: boolean;
}

const VARIANT_CONFIGS: Record<Variant, { boxes: BoxConfig[]; borderColor: string }> = {
  default: {
    boxes: Array(6).fill({ capacity: 1 }),
    borderColor: '#B2B2B2'
  },
  fourDigitBoxes: {
    boxes: Array(3).fill({ capacity: 4 }),
    borderColor: '#025ED7'
  },
  singleDigits: {
    boxes: Array(6).fill({ capacity: 1 }),
    borderColor: '#025ED7'
  },
  mixedCapacity: {
    boxes: [
      { capacity: 2 },
      { capacity: 2 },
      { capacity: 4 }
    ],
    borderColor: '#025ED7'
  }
};

const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
  ({ value = '', onChange, onComplete, variant = 'default', error = false }, ref) => {
    const config = VARIANT_CONFIGS[variant];
    const totalDigits = config.boxes.reduce((sum, box) => sum + box.capacity, 0);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const getBoxWidth = (capacity: number) => {
      switch (capacity) {
        case 1: return 'w-12';
        case 2: return 'w-24';
        case 4: return 'w-40';
        default: return 'w-12';
      }
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value.replace(/[^0-9]/g, '').slice(0, totalDigits);
      onChange(newValue);

      if (newValue.length === totalDigits && onComplete) {
        onComplete(newValue);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace' && !value) {
        e.preventDefault();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').slice(0, totalDigits);
      onChange(pastedData);
    };

    return (
      <div ref={ref} className="flex gap-4">
        {config.boxes.map((box, boxIndex) => {
          const startIndex = config.boxes.slice(0, boxIndex).reduce((sum, b) => sum + b.capacity, 0);
          const boxValue = value.slice(startIndex, startIndex + box.capacity);
          
          return (
            <div
              key={boxIndex}
              className={cn(
                'relative rounded-xl',
                getBoxWidth(box.capacity),
                'h-14',
                `border border-[${config.borderColor}]`,
                error ? 'border-[#EC0101]' : ''
              )}
              onClick={() => inputRef.current?.focus()}
            >
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                className="opacity-0 absolute inset-0 w-full h-full"
                value={value}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
              />
              <div className="flex items-center justify-between h-full px-4">
                {Array.from({ length: box.capacity }).map((_, digitIndex) => {
                  const currentIndex = startIndex + digitIndex;
                  const digit = value[currentIndex];
                  
                  return (
                    <div key={digitIndex} className="w-4 text-center">
                      {digit || <span className="text-gray-300">-</span>}
                      {digitIndex < box.capacity - 1 && (
                        <span className="text-gray-300 mx-1"> </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

InputOTP.displayName = 'InputOTP';

export { InputOTP };

