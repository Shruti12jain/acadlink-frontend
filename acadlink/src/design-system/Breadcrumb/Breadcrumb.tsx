'use client';
import * as React from 'react';
import {
  Breadcrumb,
  BreadcrumbList as ShadcnBreadcrumbList,
  BreadcrumbItem as ShadcnBreadcrumbItem,
  BreadcrumbLink as ShadcnBreadcrumbLink,
  BreadcrumbPage as ShadcnBreadcrumbPage,
  BreadcrumbSeparator as ShadcnBreadcrumbSeparator,
  BreadcrumbEllipsis as ShadcnBreadcrumbEllipsis,
} from '@/shadcn-components/breadcrumb';
import { cn } from '@/lib/utils';

/**
 * ? BreadcrumbList:
 * - Container for the breadcrumb items.
 * - Controls layout spacing and text size.
 */

const BreadcrumbList = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnBreadcrumbList>) => (
  <ShadcnBreadcrumbList
    className={cn('gap-0 text-xs text-custom-greys-ash 2xl:text-sm 4k:text-base', className)}
    {...props}
  />
);
BreadcrumbList.displayName = 'BreadcrumbList';

/**
 * ? Breadcrumb:
 * - Main component that wraps the entire breadcrumb structure.
 * - Ensures proper spacing and alignment of items.
 */

const BreadcrumbItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnBreadcrumbItem>) => (
  <ShadcnBreadcrumbItem className={cn('gap-0 text-custom-greys-ash', className)} {...props} />
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

/**
 * ? BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis:
 * - Components for individual items in the breadcrumb.
 * - Each component has specific styling and behavior.
 */

const BreadcrumbLink = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnBreadcrumbLink>) => (
  <ShadcnBreadcrumbLink className={cn('hover:text-custom-greys-slate', className)} {...props} />
);
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnBreadcrumbPage>) => (
  <ShadcnBreadcrumbPage
    className={cn('font-semibold text-custom-neutrals-charcoal', className)}
    {...props}
  />
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnBreadcrumbSeparator>) => (
  <ShadcnBreadcrumbSeparator
    className={cn('[&>svg]:text-custom-greys-ash', className)}
    {...props}
  />
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ShadcnBreadcrumbEllipsis>) => (
  <ShadcnBreadcrumbEllipsis className={cn('text-custom-greys-ash', className)} {...props} />
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
