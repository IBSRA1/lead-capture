import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateRangePickerProps {
  dateRange: DateRange | undefined;
  onDateRangeChange: (range: DateRange | undefined) => void;
  className?: string;
  placeholder?: string;
}

export function DateRangePicker({
  dateRange,
  onDateRangeChange,
  className,
  placeholder = "Pick a date range",
}: DateRangePickerProps) {
  return (
    <div className={cn("relative", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={cn(
              "w-full px-4 py-3 border-2 rounded-lg font-inter transition-all flex items-center justify-between text-left",
              dateRange?.from
                ? "border-soft-blue bg-white text-dark-black"
                : "border-gray-200 bg-white text-dark-black/60 hover:border-soft-blue focus:outline-none focus:border-soft-blue"
            )}
          >
            <span className="flex items-center gap-2">
              <CalendarIcon className="text-soft-blue" size={20} />
              {dateRange?.from ? (
                dateRange.to ? (
                  <>
                    {format(dateRange.from, "MMM dd, yyyy")} -{" "}
                    {format(dateRange.to, "MMM dd, yyyy")}
                  </>
                ) : (
                  format(dateRange.from, "MMM dd, yyyy")
                )
              ) : (
                <span className="text-dark-black/60">{placeholder}</span>
              )}
            </span>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

