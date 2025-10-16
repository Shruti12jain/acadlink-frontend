import * as React from "react";
import { Calendar as ShadcnCalendar } from "@/shadcn-components/calendar";
import { cn } from "@/lib/utils";


type DateVariant = "default" | "future-only" | "past-only" | "dob-picker";
type DateType = "available" | "scheduled" | "week-off";

export interface HighlightedDates {
  date: Date;
  type: DateType;
  color: string;
  label?: string;
}

interface ShadcnCalendarProps {
  value?: Date | undefined;
  onChange?: (date: Date | undefined) => void;
  displayDate?: Date;
  onDisplayDateChange?: (date: Date) => void;
  variant?: DateVariant;
  highlightedDates?: HighlightedDates[];
  className?: string;
  captionLayout?: "dropdown" | "buttons";
  fromDate?: Date;
  toDate?: Date;
  showNavigation?: boolean;
}

export function Calendar({
  value,
  onChange,
  displayDate,
  onDisplayDateChange,
  variant = "default",
  highlightedDates = [],
  captionLayout = "buttons",
  fromDate,
  toDate,
  showNavigation = false,
  className,
}: ShadcnCalendarProps) {
  const [internalDisplayDate, setInternalDisplayDate] = React.useState<Date>(
    displayDate || new Date()
  );

  const currentDisplayDate = displayDate || internalDisplayDate;
  const handleDisplayDateChange = onDisplayDateChange || setInternalDisplayDate;

  const highlightModifiers = highlightedDates.reduce((acc: Record<string, Date[]>, curr) => {
    const key = `highlighted-${curr.type}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(curr.date);
    return acc;
  }, {});

  const modifiersClassNames = Object.fromEntries(
    highlightedDates.map(d => [`highlighted-${d.type}`, `rdp-day_highlighted-${d.type}`])
  );

  const today = new Date();
  const isPastDate = { before: new Date(today.setHours(0, 0, 0, 0)) };
  const isFutureDate = { after: new Date(today.setHours(0, 0, 0, 0)) };

  const disabledDays =
    variant === "future-only" ? isPastDate : variant === "past-only" ? isFutureDate : undefined;

  const typeColorMap = Object.fromEntries(highlightedDates.map(({ type, color }) => [type, color]));

  const customStyles = Object.entries(typeColorMap)
    .map(
      ([type, color]) => `
      :where(.rdp-day_highlighted-${type}) button:not(:disabled) {
        background-color: ${color}30 !important;
        color: ${color} !important;
      }
      :where(.rdp-day_highlighted-${type}) button:hover:not(:disabled) {
        background-color: ${color}50 !important;
      }
    `
    )
    .join("");

  const selectedValue = value === null ? undefined : value;

  // Default classNames
  const defaultClassNames = {
    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
    month: "space-y-4",
    table: "w-full border-collapse space-y-1",
    head_row: "flex",
    head_cell: "text-custom-greys-ash rounded-md w-8 font-normal text-[0.8rem]",
    row: "flex w-full mt-2",
    cell: "relative p-0 rounded-full text-center text-sm focus-within:relative focus-within:z-20",
    day: "h-8 w-8 p-0 rounded-full font-normal aria-selected:opacity-100 text-custom-greys-charcoal",
    day_selected:
      "bg-custom-primary-royal-blue text-white hover:bg-custom-primary-royal-blue hover:text-white focus:bg-custom-primary-royal-blue focus:text-white",
    day_today: "bg-custom-primary-royal-blue/5 text-custom-primary-royal-blue",
    day_outside: "day-outside text-custom-greys-ash",
    day_disabled: "text-custom-greys-ash opacity-50",
  };

  // Apply different classNames based on navigation visibility
  const calendarClassNames = {
    ...defaultClassNames,
    caption: showNavigation ? "flex justify-between px-4 py-2" : "hidden",
    nav: showNavigation ? "space-x-1 flex items-center" : "hidden",
    caption_label: showNavigation ? "text-sm font-medium" : "hidden",
  };

  return (
    <div className={cn("custom-calendar-wrapper", className)}>
      {customStyles && <style>{customStyles}</style>}
      <ShadcnCalendar
        mode="single"
        selected={selectedValue}
        onSelect={onChange}
        month={currentDisplayDate}
        onMonthChange={handleDisplayDateChange}
        disabled={disabledDays}
        modifiers={highlightModifiers}
        modifiersClassNames={modifiersClassNames}
        showOutsideDays={true}
        fromDate={fromDate || undefined}
        toDate={toDate || undefined}
        className="custom-calendar"
        classNames={calendarClassNames}
      />
    </div>
  );
}
