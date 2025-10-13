"use client";

import * as React from "react";
import {
  Dialog as OriginalDialog,
  DialogPortal as OriginalDialogPortal,
  DialogOverlay as OriginalDialogOverlay,
  DialogTrigger as OriginalDialogTrigger,
  DialogClose as OriginalDialogClose,
  DialogContent as OriginalDialogContent,
  DialogHeader as OriginalDialogHeader,
  DialogFooter as OriginalDialogFooter,
  DialogTitle as OriginalDialogTitle,
  DialogDescription as OriginalDialogDescription,
} from "@/shadcn-components/dialog";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";

const Dialog = OriginalDialog;
const DialogTrigger = OriginalDialogTrigger;
const DialogPortal = OriginalDialogPortal;
const DialogClose = OriginalDialogClose;

// Custom DialogOverlay component
const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof OriginalDialogOverlay>,
  React.ComponentPropsWithoutRef<typeof OriginalDialogOverlay>
>(({ className, ...props }, ref) => (
  <OriginalDialogOverlay ref={ref} className={cn("bg-black/30", className)} {...props} />
));
DialogOverlay.displayName = "DialogOverlay";

// Custom DialogContent component
// const DialogContent = React.forwardRef<
//   React.ElementRef<typeof OriginalDialogContent>,
//   React.ComponentPropsWithoutRef<typeof OriginalDialogContent> & {
//     dialogCloseFunction?: () => void;
//   }
// >(({ className, children, dialogCloseFunction, ...props }, ref) => (
//   <DialogPortal>
//     <DialogOverlay />
//     <OriginalDialogContent
//       ref={ref}
//       className={cn(
//         // Add your custom classNames here
//         "3xl:left-[65%] right-full translate-x-0 rounded-[1.5rem] bg-white lg:left-[50%] xl:left-[60%] xl:rounded-3xl 2xl:left-[55%] 2xl:h-[85%] 2xl:rounded-[2rem]",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <DialogClose
//         className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-500 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-400"
//         onClick={e => {
//           if (dialogCloseFunction) {
//             dialogCloseFunction();
//           }
//         }}
//       >
//         <X className="h-4 w-4" />
//         <span className="sr-only">Close</span>
//       </DialogClose>
//     </OriginalDialogContent>
//   </DialogPortal>
// ));
// DialogContent.displayName = "DialogContent";
const DialogContent = React.forwardRef<
  React.ElementRef<typeof OriginalDialogContent>,
  React.ComponentPropsWithoutRef<typeof OriginalDialogContent> & {
    dialogCloseFunction?: () => void;
    isProfileForm?: boolean;
  }
>(({ className, children, dialogCloseFunction, isProfileForm, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <OriginalDialogContent
      ref={ref}
      className={cn(
        "3xl:left-[65%] right-full translate-x-0 rounded-[1.5rem] bg-white lg:left-[50%] xl:left-[60%] xl:rounded-3xl 2xl:left-[55%] 2xl:h-[85%] 2xl:rounded-[2rem]",
        isProfileForm && "lg:left-[38%] xl:left-[50%]",
        className
      )}
      {...props}
    >
      {children}

      {dialogCloseFunction ? (
        <button
          type="button"
          className="absolute right-6 top-6 rounded-full bg-zinc-100 p-1 opacity-70 ring-offset-white transition-opacity hover:bg-zinc-300 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none 2xl:right-8 2xl:top-8"
          onClick={() => {
            dialogCloseFunction();
          }}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      ) : (
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 data-[state=open]:text-zinc-500 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800 dark:data-[state=open]:text-zinc-400">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      )}
    </OriginalDialogContent>
  </DialogPortal>
));

DialogContent.displayName = "DialogContent";


// Custom DialogHeader component
const DialogHeader = React.forwardRef<
  React.ElementRef<typeof OriginalDialogHeader>,
  React.ComponentPropsWithoutRef<typeof OriginalDialogHeader>
>(({ className, ...props }) => (
  <OriginalDialogHeader
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));
DialogHeader.displayName = "DialogHeader";

// Custom DialogFooter component
const DialogFooter = React.forwardRef<
  React.ElementRef<typeof OriginalDialogHeader>,
  React.ComponentPropsWithoutRef<typeof OriginalDialogHeader>
>(({ className, ...props }) => (
  <OriginalDialogFooter
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));

DialogFooter.displayName = "DialogFooter";

// Custom DialogTitle component
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof OriginalDialogTitle>,
  React.ComponentPropsWithoutRef<typeof OriginalDialogTitle>
>(({ className, ...props }, ref) => (
  <OriginalDialogTitle
    ref={ref}
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = "DialogTitle";

// Custom DialogDescription component
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof OriginalDialogDescription>,
  React.ComponentPropsWithoutRef<typeof OriginalDialogDescription>
>(({ className, ...props }, ref) => (
  <OriginalDialogDescription
    ref={ref}
    className={cn(
      // Add your custom classNames here
      className
    )}
    {...props}
  />
));
DialogDescription.displayName = "DialogDescription";

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
