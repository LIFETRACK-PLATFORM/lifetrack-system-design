"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { es } from "date-fns/locale"
import { DayPicker, getDefaultClassNames, type DayButton } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants, type Button } from "@/components/atoms/button"

const spanishWeekdayLetter: Record<number, string> = {
  0: "D",
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
}

function formatSpanishCaption(date: Date) {
  const month = date.toLocaleString("es", { month: "long" })
  return `${month.charAt(0).toUpperCase()}${month.slice(1)} ${date.getFullYear()}`
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  locale = es,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"]
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={locale}
      className={cn(
        "lt:group/calendar lt:w-80 lt:rounded-md lt:border lt:border-border lt:bg-surface-1 lt:p-[18px] lt:[--cell-size:--spacing(8)] lt:[[data-slot=card-content]_&]:border-0 lt:[[data-slot=card-content]_&]:bg-transparent lt:[[data-slot=card-content]_&]:p-0 lt:[[data-slot=popover-content]_&]:border-0 lt:[[data-slot=popover-content]_&]:bg-transparent lt:[[data-slot=popover-content]_&]:p-0",
        String.raw`lt:rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`lt:rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatCaption: (date) => formatSpanishCaption(date),
        formatWeekdayName: (date) => spanishWeekdayLetter[date.getDay()],
        formatMonthDropdown: (date) => date.toLocaleString("es", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("lt:w-fit", defaultClassNames.root),
        months: cn(
          "lt:relative lt:flex lt:flex-col lt:gap-4 lt:md:flex-row",
          defaultClassNames.months
        ),
        month: cn("lt:flex lt:w-full lt:flex-col lt:gap-4", defaultClassNames.month),
        nav: cn(
          "lt:absolute lt:inset-x-0 lt:top-0 lt:flex lt:w-full lt:items-center lt:justify-between lt:gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "lt:size-(--cell-size) lt:p-0 lt:select-none lt:aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "lt:size-(--cell-size) lt:p-0 lt:select-none lt:aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "lt:flex lt:h-(--cell-size) lt:w-full lt:items-center lt:justify-center lt:px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "lt:flex lt:h-(--cell-size) lt:w-full lt:items-center lt:justify-center lt:gap-1.5 lt:text-sm lt:font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "lt:relative lt:rounded-md lt:border lt:border-input lt:has-focus:border-ring lt:has-focus:ring-[3px] lt:has-focus:ring-ring/50",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "lt:absolute lt:inset-0 lt:bg-popover lt:opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "lt:font-heading lt:text-body-md lt:font-semibold lt:text-text-1 lt:select-none",
          captionLayout === "label"
            ? ""
            : "lt:flex lt:h-8 lt:items-center lt:gap-1 lt:rounded-md lt:pr-1 lt:pl-2 lt:[&>svg]:size-3.5 lt:[&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("lt:w-full lt:border-collapse", defaultClassNames.month_grid),
        weekdays: cn("lt:flex", defaultClassNames.weekdays),
        weekday: cn(
          "lt:flex-1 lt:text-center lt:text-label-md lt:font-medium lt:uppercase lt:text-text-3 lt:select-none",
          defaultClassNames.weekday
        ),
        week: cn("lt:mt-1 lt:flex lt:w-full", defaultClassNames.week),
        week_number_header: cn(
          "lt:w-(--cell-size) lt:select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "lt:text-[0.8rem] lt:text-muted-foreground lt:select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "lt:group/day lt:relative lt:flex lt:aspect-square lt:h-full lt:w-full lt:items-center lt:justify-center lt:p-0 lt:text-center lt:select-none",
          defaultClassNames.day
        ),
        range_start: cn(defaultClassNames.range_start),
        range_middle: cn(defaultClassNames.range_middle),
        range_end: cn(defaultClassNames.range_end),
        today: cn(defaultClassNames.today),
        outside: cn(
          "lt:text-muted-foreground lt:aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("lt:text-muted-foreground lt:opacity-50", defaultClassNames.disabled),
        hidden: cn("lt:invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <span
                aria-hidden
                className={cn("lt:text-xl lt:leading-none lt:text-text-3", className)}
                {...props}
              >
                ‹
              </span>
            )
          }

          if (orientation === "right") {
            return (
              <span
                aria-hidden
                className={cn("lt:text-xl lt:leading-none lt:text-text-3", className)}
                {...props}
              >
                ›
              </span>
            )
          }

          return <ChevronDownIcon className={cn("lt:size-4", className)} {...props} />
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="lt:flex lt:size-(--cell-size) lt:items-center lt:justify-center lt:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  const isRangeStart = modifiers.range_start
  const isRangeEnd = modifiers.range_end
  const isRangeMiddle = modifiers.range_middle
  const isSingleSelected = modifiers.selected && !isRangeStart && !isRangeEnd && !isRangeMiddle
  const isSelected = isSingleSelected || isRangeStart || isRangeEnd

  return (
    <button
      ref={ref}
      type="button"
      data-day={day.date.toLocaleDateString()}
      className={cn(
        "lt:inline-flex lt:size-(--cell-size) lt:items-center lt:justify-center lt:rounded-[10px] lt:border lt:border-transparent lt:bg-transparent lt:text-body-md lt:font-normal lt:text-text-1 lt:transition-colors lt:outline-none lt:disabled:pointer-events-none lt:disabled:opacity-50",
        modifiers.outside && "lt:text-text-3",
        modifiers.today && !modifiers.selected && "lt:border-primary",
        modifiers.focused && !isSelected && "lt:border-primary",
        isSingleSelected &&
          "lt:border-transparent lt:bg-primary lt:font-semibold lt:text-primary-foreground",
        isRangeStart &&
          "lt:border-transparent lt:bg-primary lt:font-semibold lt:text-primary-foreground",
        isRangeEnd &&
          "lt:border-transparent lt:bg-primary lt:font-semibold lt:text-primary-foreground",
        isRangeMiddle && "lt:border-transparent lt:bg-primary/10 lt:text-text-1",
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
