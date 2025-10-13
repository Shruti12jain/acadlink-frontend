'use client';

import * as React from 'react';
import {
  Avatar as ShadcnAvatar,
  AvatarImage as ShadcnAvatarImage,
  AvatarFallback as ShadcnAvatarFallback,
} from '@/shadcn-components/avatar';
import { cn } from '@/lib/utils';

/**
 * Placeholder images categorized by role.
 * Used when no image source (`src`) is provided.
 */
const PLACEHOLDER_IMAGES = {
  malePatient: './placeholders/male-patient.jpg',
  femalePatient: './placeholders/female-patient.png',
  maleDoctor: './placeholders/male-doctor.jpg',
  femaleDoctor: './placeholders/female-doctor.png',
  clinic: './placeholders/clinic.jpg',
  default: './placeholders/default.jpg',
} as const;

interface AvatarProps extends React.ComponentPropsWithoutRef<typeof ShadcnAvatar> {
  src?: string | null;
  name?: string;
  size?: 'sm' | 'default' | 'md' | 'xl' | '2xl';
  role?: keyof typeof PLACEHOLDER_IMAGES;
}

/**
 * ? AvatarImage:
 * - Displays the actual image (if provided).
 * - Ensures the image is responsive and covers the entire avatar area.
 */
const AvatarImage = React.forwardRef<
  React.ElementRef<typeof ShadcnAvatarImage>,
  React.ComponentPropsWithoutRef<typeof ShadcnAvatarImage>
>(({ className, ...props }, ref) => (
  <ShadcnAvatarImage
    ref={ref}
    className={cn('aspect-square h-full w-full object-cover', className)}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

/**
 * ? AvatarFallback:
 * - Displays the initials or a default character when the image is not available.
 * - Ensures the fallback is centered and styled appropriately.
 */
const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof ShadcnAvatarFallback>,
  React.ComponentPropsWithoutRef<typeof ShadcnAvatarFallback>
>(({ className, children, ...props }, ref) => (
  <ShadcnAvatarFallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-custom-greys-cloud text-custom-primary-royal-blue',
      className
    )}
    {...props}
  >
    {children}
  </ShadcnAvatarFallback>
));
AvatarFallback.displayName = 'AvatarFallback';

/**
 * ? Custom Avatar component extending ShadCN's Avatar.
 * - Supports role-based placeholders when no image is provided.
 * - Displays initials as fallback when both `src` and `role` are missing.
 * - Provides configurable sizes for various use cases.
 */
const Avatar = React.forwardRef<React.ElementRef<typeof ShadcnAvatar>, AvatarProps>(
  ({ className, src, name, size = 'default', role = 'default', ...props }, ref) => {
    const placeholderSrc = PLACEHOLDER_IMAGES[role] ?? PLACEHOLDER_IMAGES.default; // ✅ More concise placeholder selection
    const firstLetter = name?.trim().charAt(0).toUpperCase() || '👤'; // ✅ Handles empty strings gracefully

    return (
      <ShadcnAvatar
        ref={ref}
        className={cn(
          'flex items-center justify-center border border-custom-greys-graphite text-sm font-semibold text-custom-primary-royal-blue 2xl:text-base',
          size === 'sm' && 'h-7 w-7 2xl:h-8 2xl:w-8 4k:h-9 4k:w-9',
          size === 'default' && 'h-9 w-9 2xl:h-10 2xl:w-10 4k:h-11 4k:w-11',
          size === 'md' &&
            'h-[3.25rem] w-[3.25rem] 2xl:h-14 2xl:w-14 4k:h-[3.75rem] 4k:w-[3.75rem]',
          size === 'xl' && 'h-[4.5rem] w-[4.5rem] 2xl:h-[5.5rem] 2xl:w-[5.5rem] 4k:h-24 4k:w-24',
          size === '2xl' &&
            'h-24 w-24 2xl:h-[6.75rem] 2xl:w-[6.75rem] 4k:h-[7.25rem] 4k:w-[7.25rem]',
          className
        )}
        {...props}
      >
        <AvatarImage src={src || placeholderSrc} alt={name || 'Avatar'} />
        <AvatarFallback>{firstLetter}</AvatarFallback>
      </ShadcnAvatar>
    );
  }
);
Avatar.displayName = 'Avatar';

export { Avatar, AvatarImage, AvatarFallback };
