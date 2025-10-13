import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  Table as OriginalTable,
  TableHeader as OriginalTableHeader,
  TableBody as OriginalTableBody,
  TableFooter as OriginalTableFooter,
  TableHead as OriginalTableHead,
  TableRow as OriginalTableRow,
  TableCell as OriginalTableCell,
  TableCaption as OriginalTableCaption,
} from '@/shadcn-components/table';

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <OriginalTable ref={ref} className={cn('', className)} {...props} />
  )
);
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <OriginalTableHeader ref={ref} className={cn('', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <OriginalTableBody ref={ref} className={cn('divide-y bg-white', className)} {...props} />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <OriginalTableFooter ref={ref} className={cn('', className)} {...props} />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <OriginalTableRow ref={ref} className={cn('', className)} {...props} />
  )
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <OriginalTableHead
    ref={ref}
    className={cn('pl-2 text-xs text-custom-greys-slate 2xl:text-sm 4k:text-base', className)}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <OriginalTableCell ref={ref} className={cn('', className)} {...props} />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <OriginalTableCaption ref={ref} className={cn('', className)} {...props} />
));
TableCaption.displayName = 'TableCaption';

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
