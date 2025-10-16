"use client";

import * as React from "react";
import {
  ScrollArea as OriginalScrollArea,
  ScrollBar as OriginalScrollBar,
} from "@/shadcn-components/scroll-area";
import { cn } from "@/lib/utils";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  isScrollbarHidden?: boolean;
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, isScrollbarHidden = false, ...props }, ref) => (
  <OriginalScrollArea
    ref={ref}
    className={cn(
      // Add your custom classnames here
      "rounded-2xl",
      className
    )}
    {...props}
  >
    {children}
    <ScrollBar isHidden={isScrollbarHidden} />
  </OriginalScrollArea>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

interface ScrollBarProps extends React.ComponentPropsWithoutRef<typeof OriginalScrollBar> {
  isHidden?: boolean;
}

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof OriginalScrollBar>,
  ScrollBarProps
>(({ className, orientation = "vertical", isHidden = false, ...props }, ref) => (
  <OriginalScrollBar
    ref={ref}
    orientation={orientation}
    className={cn(
      // The original classnames are:
      // "flex touch-none select-none transition-colors",
      // orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      // orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]"
      // Add your custom classnames here
      "[&>div]:cursor-pointer [&>div]:bg-zinc-400",
      isHidden && "[&>[data-state]]:hidden",
      className
    )}
    {...props}
  ></OriginalScrollBar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
