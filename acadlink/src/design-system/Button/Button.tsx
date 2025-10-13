import * as React from "react";

import { Button as ShadcnButton, ButtonProps, buttonVariants } from "@/shadcn-components/button";
import { cn } from "@/lib/utils";

/**
 * Defines the available button variants and sizes.
 * Each variant or size determines the visual style of the button.
 */
type VariantType = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
type SizeType = "default" | "sm" | "lg" | "icon";

/**
 * ? Custom button properties extending the default ButtonProps.
 * - `variant` allows choosing a predefined button style.
 * - `size` determines the button dimensions.
 */
interface CustomButtonProps extends ButtonProps {
  variant?: VariantType;
  size?: SizeType;
}

/**
 * ? Button component:
 * - Wraps the original ShadCN button.
 * - Enhances with custom styles, variants, and sizes.
 * - Supports additional class names for further customization.
 */

const Button = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, ...props }, ref) => (
    <ShadcnButton
      ref={ref}
      className={cn(
        buttonVariants({
          variant: props.variant || "default",
          size: props.size || "default",
        }),
        "focus-visible:ring-custom-neutrals-charcoal disabled:bg-custom-greys-silver disabled:text-custom-greys-graphite 4k:text-base group h-10 rounded-full border border-transparent text-xs font-medium focus-visible:ring-offset-2 xl:h-12 2xl:h-14 2xl:text-sm",
        props.variant === "default" &&
          "bg-custom-primary-royal-blue hover:bg-custom-primary-royal-blue/80 text-white ",
        props.variant === "outline" &&
          "border-custom-primary-royal-blue text-custom-primary-royal-blue hover:border-custom-primary-royal-blue/15 hover:bg-custom-primary-royal-blue/5 hover:text-custom-primary-royal-blue",
        props.variant === "ghost" && "text-custom-primary-royal-blue font-medium shadow-md",
        props.variant === "link" && "text-custom-primary-royal-blue font-medium",
        props.variant === "destructive" &&
          "border-custom-highlights-scarlet text-custom-highlights-scarlet hover:border-custom-highlights-scarlet/20 hover:text-custom-highlights-scarlet/90 border bg-white hover:text-white",
        props.variant === "secondary" &&
          "hover:bg-custom-greys-cloud [&_svg]:text-custom-greys-slate bg-white shadow-sm",
        props.size === "sm" && "4k:h-12 h-8 font-normal 2xl:h-10",
        props.size === "lg" && "",
        props.size === "icon" &&
          "4k:h-12 4k:w-12 [&_svg]:text-custom-greys-porcelain [&_svg]:hover:text-custom-neutrals-charcoal 3xl:[&_svg]:size-[1.125rem] 4k:[&_svg]:size-5 h-10 w-10 rounded-full p-0 xl:h-10 xl:w-10 2xl:h-10 2xl:w-10 [&_svg]:size-3",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";

// // Variant Buttons
// const PrimaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       variant="default"
//       className={cn(
//         'bg-custom-primary-royal-blue text-white hover:bg-custom-primary-royal-blue/90',
//         className
//       )}
//       {...props}
//     />
//   )
// );
// PrimaryButton.displayName = 'PrimaryButton';

// const SecondaryButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       variant="secondary"
//       className={cn(
//         'custom-secondary-button', // Optional additional base class
//         className
//       )}
//       {...props}
//     />
//   )
// );
// SecondaryButton.displayName = 'SecondaryButton';

// const DestructiveButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       variant="destructive"
//       className={cn(
//         'bg-white border border-transparent text-custom-highlights-scarlet hover:text-custom-highlights-scarlet/90 hover:border-custom-highlights-scarlet/20',
//         className
//       )}
//       {...props}
//     />
//   )
// );
// DestructiveButton.displayName = 'DestructiveButton';

// const OutlineButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       variant="outline"
//       className={cn(
//         'border-custom-primary-royal-blue text-custom-primary-royal-blue hover:text-custom-primary-royal-blue hover:bg-custom-greys-porcelain hover:border-custom-primary-royal-blue/90',
//         className
//       )}
//       {...props}
//     />
//   )
// );
// OutlineButton.displayName = 'OutlineButton';

// const GhostButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       variant="ghost"
//       className={cn(
//         'bg-transparent text-custom-greys-graphite hover:text-custom-greys-slate hover:bg-custom-greys-porcelain',
//         className
//       )}
//       {...props}
//     />
//   )
// );
// GhostButton.displayName = 'GhostButton';

// const LinkButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'variant'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       variant="link"
//       className={cn('text-custom-primary-royal-blue font-medium', className)}
//       {...props}
//     />
//   )
// );
// LinkButton.displayName = 'LinkButton';

// // Size Buttons
// const SmallButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>(
//   ({ className, ...props }, ref) => (
//     <Button ref={ref} size="sm" className={cn('custom-small-button', className)} {...props} />
//   )
// );
// SmallButton.displayName = 'SmallButton';

// const LargeButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       size="lg"
//       className={cn(
//         'custom-large-button', // Optional additional base class
//         className
//       )}
//       {...props}
//     />
//   )
// );
// LargeButton.displayName = 'LargeButton';

// const IconButton = React.forwardRef<HTMLButtonElement, Omit<ButtonProps, 'size'>>(
//   ({ className, ...props }, ref) => (
//     <Button
//       ref={ref}
//       size="icon"
//       className={cn(
//         'h-8 w-8 2xl:h-10 2xl:w-10', // Optional additional base class
//         className
//       )}
//       {...props}
//     />
//   )
// );
// IconButton.displayName = 'IconButton';

// // Combination Buttons
// const SmallPrimaryButton = React.forwardRef<
//   HTMLButtonElement,
//   Omit<ButtonProps, 'variant' | 'size'>
// >(({ className, ...props }, ref) => (
//   <Button
//     ref={ref}
//     variant="default"
//     size="sm"
//     className={cn(
//       'custom-small-primary-button', // Optional additional base class
//       className
//     )}
//     {...props}
//   />
// ));
// SmallPrimaryButton.displayName = 'SmallPrimaryButton';

// const LargePrimaryButton = React.forwardRef<
//   HTMLButtonElement,
//   Omit<ButtonProps, 'variant' | 'size'>
// >(({ className, ...props }, ref) => (
//   <Button
//     ref={ref}
//     variant="default"
//     size="lg"
//     className={cn(
//       'custom-large-primary-button', // Optional additional base class
//       className
//     )}
//     {...props}
//   />
// ));
// LargePrimaryButton.displayName = 'LargePrimaryButton';

export {
  Button,
  buttonVariants,
  // Variant Buttons
  // PrimaryButton,
  // SecondaryButton,
  // DestructiveButton,
  // OutlineButton,
  // GhostButton,
  // LinkButton,
  // // Size Buttons
  // SmallButton,
  // LargeButton,
  // IconButton,
  // // Combination Buttons
  // SmallPrimaryButton,
  // LargePrimaryButton,
};

export type { ButtonProps, VariantType, SizeType, CustomButtonProps };
