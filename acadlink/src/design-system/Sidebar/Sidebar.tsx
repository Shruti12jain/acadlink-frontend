import * as React from 'react';
import {
  Sidebar as OriginalSidebar,
  SidebarContent as OriginalSidebarContent,
  SidebarFooter as OriginalSidebarFooter,
  SidebarGroup as OriginalSidebarGroup,
  SidebarGroupAction as OriginalSidebarGroupAction,
  SidebarGroupContent as OriginalSidebarGroupContent,
  SidebarGroupLabel as OriginalSidebarGroupLabel,
  SidebarHeader as OriginalSidebarHeader,
  SidebarInput as OriginalSidebarInput,
  SidebarInset as OriginalSidebarInset,
  SidebarMenu as OriginalSidebarMenu,
  SidebarMenuAction as OriginalSidebarMenuAction,
  SidebarMenuBadge as OriginalSidebarMenuBadge,
  SidebarMenuButton as OriginalSidebarMenuButton,
  SidebarMenuItem as OriginalSidebarMenuItem,
  SidebarMenuSkeleton as OriginalSidebarMenuSkeleton,
  SidebarMenuSub as OriginalSidebarMenuSub,
  SidebarMenuSubButton as OriginalSidebarMenuSubButton,
  SidebarMenuSubItem as OriginalSidebarMenuSubItem,
  SidebarProvider as OriginalSidebarProvider,
  SidebarRail as OriginalSidebarRail,
  SidebarSeparator as OriginalSidebarSeparator,
  SidebarTrigger as OriginalSidebarTrigger,
  useSidebar,
} from '@/shadcn-components/sidebar';

import { cn } from '@/lib/utils';

// Create customized versions of each component
const SidebarProvider = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarProvider>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarProvider>
>(({ className, ...props }, ref) => (
  <OriginalSidebarProvider
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarProvider here
      className
    )}
    {...props}
  />
));
SidebarProvider.displayName = 'SidebarProvider';

const Sidebar = React.forwardRef<
  React.ElementRef<typeof OriginalSidebar>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebar>
>(({ className, ...props }, ref) => (
  <OriginalSidebar
    ref={ref}
    className={cn(
      'max-h-screen w-48 overflow-hidden rounded-r-3xl font-outfit xl:w-52 2xl:w-56',
      className
    )}
    {...props}
  />
));
Sidebar.displayName = 'Sidebar';

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarTrigger>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarTrigger>
>(({ className, ...props }, ref) => (
  <OriginalSidebarTrigger
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarTrigger here
      className
    )}
    {...props}
  />
));
SidebarTrigger.displayName = 'SidebarTrigger';

const SidebarRail = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarRail>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarRail>
>(({ className, ...props }, ref) => (
  <OriginalSidebarRail
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarRail here
      className
    )}
    {...props}
  />
));
SidebarRail.displayName = 'SidebarRail';

const SidebarInset = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarInset>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarInset>
>(({ className, ...props }, ref) => (
  <OriginalSidebarInset
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarInset here
      `

        relative
        flex
        min-h-svh
        flex-1
        flex-col
`,
      `
peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow
`,
      className
    )}
    {...props}
  />
));
SidebarInset.displayName = 'SidebarInset';

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarInput>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarInput>
>(({ className, ...props }, ref) => (
  <OriginalSidebarInput
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarInput here
      className
    )}
    {...props}
  />
));
SidebarInput.displayName = 'SidebarInput';

const SidebarHeader = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarHeader>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarHeader>
>(({ className, ...props }, ref) => (
  <OriginalSidebarHeader
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarHeader here
      'flex flex-col gap-2 p-2',
      className
    )}
    {...props}
  />
));
SidebarHeader.displayName = 'SidebarHeader';

const SidebarFooter = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarFooter>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarFooter>
>(({ className, ...props }, ref) => (
  <OriginalSidebarFooter ref={ref} className={cn('xl:px-2.5 2xl:px-3', className)} {...props} />
));
SidebarFooter.displayName = 'SidebarFooter';

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarSeparator>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarSeparator>
>(({ className, ...props }, ref) => (
  <OriginalSidebarSeparator
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarSeparator here
      className
    )}
    {...props}
  />
));
SidebarSeparator.displayName = 'SidebarSeparator';

const SidebarContent = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarContent>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarContent>
>(({ className, ...props }, ref) => (
  <OriginalSidebarContent
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarContent here
      'overflow-x-hidden xl:px-2.5',
      className
    )}
    {...props}
  />
));
SidebarContent.displayName = 'SidebarContent';

const SidebarGroup = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarGroup>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarGroup>
>(({ className, ...props }, ref) => (
  <OriginalSidebarGroup
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarGroup here
      'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
      className
    )}
    {...props}
  />
));
SidebarGroup.displayName = 'SidebarGroup';

const SidebarGroupLabel = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarGroupLabel>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarGroupLabel>
>(({ className, ...props }, ref) => (
  <OriginalSidebarGroupLabel
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarGroupLabel here
      className
    )}
    {...props}
  />
));
SidebarGroupLabel.displayName = 'SidebarGroupLabel';

const SidebarGroupAction = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarGroupAction>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarGroupAction>
>(({ className, ...props }, ref) => (
  <OriginalSidebarGroupAction
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarGroupAction here
      className
    )}
    {...props}
  />
));
SidebarGroupAction.displayName = 'SidebarGroupAction';

const SidebarGroupContent = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarGroupContent>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarGroupContent>
>(({ className, ...props }, ref) => (
  <OriginalSidebarGroupContent
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarGroupContent here
      'w-full text-sm',
      className
    )}
    {...props}
  />
));
SidebarGroupContent.displayName = 'SidebarGroupContent';

const SidebarMenu = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenu>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenu>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenu
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenu here
      'flex w-full min-w-0 flex-col gap-1',
      className
    )}
    {...props}
  />
));
SidebarMenu.displayName = 'SidebarMenu';

const SidebarMenuItem = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuItem>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuItem>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuItem
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuItem here
      className
    )}
    {...props}
  />
));
SidebarMenuItem.displayName = 'SidebarMenuItem';

const SidebarMenuButton = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuButton>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuButton>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuButton
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuButton here
      className
    )}
    {...props}
  />
));
SidebarMenuButton.displayName = 'SidebarMenuButton';

const SidebarMenuAction = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuAction>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuAction>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuAction
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuAction here
      className
    )}
    {...props}
  />
));
SidebarMenuAction.displayName = 'SidebarMenuAction';

const SidebarMenuBadge = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuBadge>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuBadge>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuBadge
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuBadge here
      className
    )}
    {...props}
  />
));
SidebarMenuBadge.displayName = 'SidebarMenuBadge';

const SidebarMenuSkeleton = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuSkeleton>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuSkeleton>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuSkeleton
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuSkeleton here
      className
    )}
    {...props}
  />
));
SidebarMenuSkeleton.displayName = 'SidebarMenuSkeleton';

const SidebarMenuSub = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuSub>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuSub>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuSub
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuSub here
      className
    )}
    {...props}
  />
));
SidebarMenuSub.displayName = 'SidebarMenuSub';

const SidebarMenuSubItem = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuSubItem>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuSubItem>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuSubItem
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuSubItem here
      className
    )}
    {...props}
  />
));
SidebarMenuSubItem.displayName = 'SidebarMenuSubItem';

const SidebarMenuSubButton = React.forwardRef<
  React.ElementRef<typeof OriginalSidebarMenuSubButton>,
  React.ComponentPropsWithoutRef<typeof OriginalSidebarMenuSubButton>
>(({ className, ...props }, ref) => (
  <OriginalSidebarMenuSubButton
    ref={ref}
    className={cn(
      // Add your custom classes for SidebarMenuSubButton here
      className
    )}
    {...props}
  />
));
SidebarMenuSubButton.displayName = 'SidebarMenuSubButton';

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
