"use client";
import * as React from "react";
import * as ShadcnDropdownPrimitive from "@/shadcn-components/dropdown-menu";
import { cn } from "@/lib/utils";
import { Check, ChevronRight, Circle } from "lucide-react";

// Custom styles to omit the ChevronRight icon from the core-shadcn dropdown-menu
import "./DropdownMenu.css";

const DropdownMenu = ShadcnDropdownPrimitive.DropdownMenu;
const DropdownMenuTrigger = ShadcnDropdownPrimitive.DropdownMenuTrigger;
const DropdownMenuGroup = ShadcnDropdownPrimitive.DropdownMenuGroup;
const DropdownMenuPortal = ShadcnDropdownPrimitive.DropdownMenuPortal;
const DropdownMenuSub = ShadcnDropdownPrimitive.DropdownMenuSub;
const DropdownMenuRadioGroup = ShadcnDropdownPrimitive.DropdownMenuRadioGroup;
const DropdownMenuItemIndicator = ShadcnDropdownPrimitive.DropdownMenuItemIndicator;

/**
 * ? Custom DropdownMenuSubTrigger component to handle nested dropdown triggers
 * - Overrides Shadcn's default icon behavior
 * - Uses custom ChevronRight from the design system
 * ? DropdownMenuContent: Wrapper for dropdown menu items
 * - Applies custom styling for consistency with the design system
 * ? DropdownMenuItem: Represents a single clickable dropdown option
 * - Includes responsive styles
 * ? DropdownMenuSeparator: Divider for dropdown sections
 * ? DropdownMenuShortcut: Displays shortcut keys alongside menu items
 * ! Note
 * - If shadcn gets updated, Make sure to export { DropdownMenuIndicator } from the '@\shadcn-components\dropdown-menu.tsx'.
 */

const DropdownMenuSubTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuSubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuSubTrigger
    ref={ref}
    className={cn(
      "text-custom-neutrals-charcoal focus:bg-custom-bg-snow focus:text-custom-neutrals-charcoal/90 4k:gap-6 4k:rounded-[1.125rem] 4k:px-3 4k:py-2 4k:text-base [&>svg]:text-custom-greys-slate 4k:[&>svg]:size-[1.125rem] cursor-pointer gap-4 rounded-[0.875rem] px-2 py-1.5 text-xs 2xl:gap-5 2xl:rounded-2xl 2xl:px-2.5 2xl:py-1.5 2xl:text-sm [&>svg]:size-3.5 2xl:[&>svg]:size-4",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    {/* <ChevronRight className="ml-auto size-5" /> */}
  </ShadcnDropdownPrimitive.DropdownMenuSubTrigger>
));
DropdownMenuSubTrigger.displayName = ShadcnDropdownPrimitive.DropdownMenuSubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownPrimitive.DropdownMenuSubContent>,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuSubContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuPortal>
    <ShadcnDropdownPrimitive.DropdownMenuSubContent
      ref={ref}
      className={cn(
        "2xl:shadow-dropdown-md 4k:shadow-dropdown-lg drop-shadow-dropdown-sm 4k:max-w-60 4k:rounded-[1.125rem] 4k:p-3 max-w-52 space-y-1.5 rounded-[0.875rem] border-none bg-white p-2 2xl:max-w-56 2xl:space-y-2 2xl:rounded-2xl 2xl:p-2.5",
        className
      )}
      sideOffset={sideOffset}
      {...props}
    />
  </ShadcnDropdownPrimitive.DropdownMenuPortal>
));
DropdownMenuSubContent.displayName = ShadcnDropdownPrimitive.DropdownMenuSubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownPrimitive.DropdownMenuContent>,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuContent>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuPortal>
    <ShadcnDropdownPrimitive.DropdownMenuContent
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "2xl:shadow-dropdown-md 4k:shadow-dropdown-lg drop-shadow-dropdown-sm 4k:max-w-[16.25rem] 4k:rounded-[1.125rem] 4k:p-3 max-w-56 space-y-1.5 rounded-[0.875rem] border-none bg-white p-2 2xl:max-w-60 2xl:space-y-2 2xl:rounded-2xl 2xl:p-2.5",
        className
      )}
      {...props}
    />
  </ShadcnDropdownPrimitive.DropdownMenuPortal>
));
DropdownMenuContent.displayName = ShadcnDropdownPrimitive.DropdownMenuContent.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownPrimitive.DropdownMenuItem>,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuItem> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuItem
    ref={ref}
    className={cn(
      "text-custom-neutrals-charcoal focus:bg-custom-bg-snow focus:text-custom-neutrals-charcoal/90 4k:gap-6 4k:rounded-[1.125rem] 4k:px-3 4k:py-2 4k:text-base [&>svg]:text-custom-greys-slate 4k:[&>svg]:size-[1.125rem] cursor-pointer gap-4 rounded-[0.875rem] px-2 py-1.5 text-xs 2xl:gap-5 2xl:rounded-2xl 2xl:px-2.5 2xl:py-1.5 2xl:text-sm [&>svg]:size-3.5 2xl:[&>svg]:size-4",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = ShadcnDropdownPrimitive.DropdownMenuItem.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownPrimitive.DropdownMenuCheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuCheckboxItem>
>(({ className, checked, children, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuCheckboxItem
    ref={ref}
    className={cn(
      "text-custom-neutrals-charcoal focus:bg-custom-bg-snow focus:text-custom-neutrals-charcoal/90 4k:gap-6 4k:rounded-[1.125rem] 4k:px-3 4k:py-2 4k:text-base [&>svg]:text-custom-greys-slate 4k:[&>svg]:size-[1.125rem] cursor-pointer gap-4 rounded-[0.875rem] px-2 py-1.5 text-xs 2xl:gap-5 2xl:rounded-2xl 2xl:px-2.5 2xl:py-1.5 2xl:text-sm [&>svg]:size-3.5 2xl:[&>svg]:size-4",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Check className="text-custom-primary-royal-blue 4k:h-5 4k:w-5 h-3 w-3 2xl:h-4 2xl:w-4" />
      </DropdownMenuItemIndicator>
    </span>
    {children}
  </ShadcnDropdownPrimitive.DropdownMenuCheckboxItem>
));
DropdownMenuCheckboxItem.displayName = ShadcnDropdownPrimitive.DropdownMenuCheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownPrimitive.DropdownMenuRadioItem>,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuRadioItem> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuRadioItem ref={ref} className={cn("", className)} {...props}>
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Circle className="4k:h-5 4k:w-5 h-3 w-3 2xl:h-4 2xl:w-4" />
      </DropdownMenuItemIndicator>
    </span>
    {children}
  </ShadcnDropdownPrimitive.DropdownMenuRadioItem>
));
DropdownMenuRadioItem.displayName = ShadcnDropdownPrimitive.DropdownMenuRadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownPrimitive.DropdownMenuLabel>,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuLabel> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuLabel
    ref={ref}
    className={cn(
      "text-custom-neutrals-charcoal 4k:text-base px-3 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = ShadcnDropdownPrimitive.DropdownMenuLabel.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ShadcnDropdownPrimitive.DropdownMenuSeparator>,
  React.ComponentPropsWithoutRef<typeof ShadcnDropdownPrimitive.DropdownMenuSeparator>
>(({ className, ...props }, ref) => (
  <ShadcnDropdownPrimitive.DropdownMenuSeparator
    ref={ref}
    className={cn("bg-custom-greys-ash h-px", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = ShadcnDropdownPrimitive.DropdownMenuSeparator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={cn("ml-auto text-xs tracking-widest text-zinc-500", className)} {...props} />
);
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
