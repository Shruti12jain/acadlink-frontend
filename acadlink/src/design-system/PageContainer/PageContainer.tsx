"use client";
import React from "react";
import { ScrollArea } from "@/shadcn-components/scroll-area";
import { cn } from "@/lib/utils";

const PageContainer = ({
  children,
  scrollable = true,
  className,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  className?: string;
}) => {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh-72px)] rounded-none">
          <div className={cn("h-full p-4 md:px-6", className)}>{children}</div>
        </ScrollArea>
      ) : (
        <div className={cn("h-full p-4 md:px-6", className)}>{children}</div>
      )}
    </>
  );
};

export { PageContainer };
