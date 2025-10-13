"use client";

import * as React from "react";
import {
  Select as OriginalSelect,
  SelectTrigger as OriginalSelectTrigger,
  SelectValue as OriginalSelectValue,
  SelectContent as OriginalSelectContent,
  SelectGroup as OriginalSelectGroup,
  SelectLabel as OriginalSelectLabel,
  SelectItem as OriginalSelectItem,
  SelectSeparator as OriginalSelectSeparator,
  SelectScrollUpButton as OriginalSelectScrollUpButton,
  SelectScrollDownButton as OriginalSelectScrollDownButton,
} from "@/shadcn-components/select";

import { cn } from "@/lib/utils";

const Select = OriginalSelect;
const SelectGroup = OriginalSelectGroup;
const SelectSeparator = OriginalSelectSeparator;
const SelectScrollUpButton = OriginalSelectScrollUpButton;
const SelectScrollDownButton = OriginalSelectScrollDownButton;

// Custom SelectTrigger component
const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof OriginalSelectTrigger>,
  React.ComponentPropsWithoutRef<typeof OriginalSelectTrigger>
>(({ className, ...props }, ref) => (
  <OriginalSelectTrigger
    ref={ref}
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));
SelectTrigger.displayName = "SelectTrigger";

// Custom SelectValue component
const SelectValue = React.forwardRef<
  React.ElementRef<typeof OriginalSelectValue>,
  React.ComponentPropsWithoutRef<typeof OriginalSelectValue>
>(({ className, ...props }, ref) => (
  <OriginalSelectValue
    ref={ref}
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));
SelectValue.displayName = "SelectValue";

// Custom SelectContent component
const SelectContent = React.forwardRef<
  React.ElementRef<typeof OriginalSelectContent>,
  React.ComponentPropsWithoutRef<typeof OriginalSelectContent>
>(({ className, ...props }, ref) => (
  <OriginalSelectContent
    ref={ref}
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));
SelectContent.displayName = "SelectContent";

// Custom SelectLabel component
const SelectLabel = React.forwardRef<
  React.ElementRef<typeof OriginalSelectLabel>,
  React.ComponentPropsWithoutRef<typeof OriginalSelectLabel>
>(({ className, ...props }, ref) => (
  <OriginalSelectLabel
    ref={ref}
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

// Custom SelectItem component
const SelectItem = React.forwardRef<
  React.ElementRef<typeof OriginalSelectItem>,
  React.ComponentPropsWithoutRef<typeof OriginalSelectItem>
>(({ className, ...props }, ref) => (
  <OriginalSelectItem
    ref={ref}
    className={cn(
      // Add your custom classNames here
      "cursor-pointer",
      className
    )}
    {...props}
  />
));
SelectItem.displayName = "SelectItem";

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@/shadcn-components/select";
import { LucideIcon } from "lucide-react";

interface CustomSelectProps {
  placeholder?: string;
  options: Array<{ value: string; label: string }>;
  label?: string;
  icon?: LucideIcon; // ✅ Accept Lucide React Icon
  groupedOptions?: Array<{
    groupLabel: string;
    options: Array<{ value: string; label: string }>;
  }>;
  width?: string;
  borderRadius?: string;
  placeholderColor?: string;
  dropdownTextColor?: string;
  dropdownBorderRadius?: string;
  border?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  className?: string;
}

export const select: React.FC<CustomSelectProps> = ({
  placeholder = "Select an option",
  options = [],
  label,
  icon: Icon,
  groupedOptions,
  width = "w-full",
  borderRadius = "rounded-md",
  placeholderColor = "text-black",
  dropdownTextColor = "text-black",
  dropdownBorderRadius = "rounded-md",
  border = "border border-[#025ED71F]",
  onValueChange,
  disabled = false,
  error = false,
  className = "",
}) => {
  return (
    <div className={`relative ${width}`}>
      {label && <label className="mb-1 block text-sm font-medium">{label}</label>}
      <Select onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger
          className={`flex h-10 items-center justify-between px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-1 
          ${borderRadius} ${border} ${error ? "border-red-500 focus:ring-red-500" : "focus:ring-gray-500"} ${className}`}
        >
          {Icon && <Icon className="mr-1 h-5 w-5 text-gray-500" />}
          <SelectValue placeholder={<span className="text-[#6C6C6C]">{placeholder}</span>} />
        </SelectTrigger>
        <SelectContent className={`bg-white shadow-lg ${dropdownBorderRadius}`}>
          {groupedOptions
            ? groupedOptions.map((group, index) => (
              <SelectGroup key={index}>
                <SelectLabel>{group.groupLabel}</SelectLabel>
                {group.options.map(option => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className={dropdownTextColor}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))
            : options.map(option => (
              <SelectItem key={option.value} value={option.value} className={dropdownTextColor}>
                {option.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
};
