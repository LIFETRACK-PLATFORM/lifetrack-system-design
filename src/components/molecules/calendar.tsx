"use client"

import * as React from "react"
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { es } from "date-fns/locale"
import { DayPicker, getDefaultClassNames, type DayButton } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/atoms/button"

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
        "lt:group/calendar lt:bg-background lt:p-3 lt:[--cell-size:--spacing(8)] lt:[[data-slot=card-content]_&]:bg-transparent lt:[[data-slot=popover-content]_&]:bg-transparent",
        String.raw`lt:rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`lt:rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
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
          "lt:font-medium lt:select-none",
          captionLayout === "label"
            ? "lt:text-sm"
            : "lt:flex lt:h-8 lt:items-center lt:gap-1 lt:rounded-md lt:pr-1 lt:pl-2 lt:text-sm lt:[&>svg]:size-3.5 lt:[&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("lt:w-full lt:border-collapse", defaultClassNames.month_grid),
        weekdays: cn("lt:flex", defaultClassNames.weekdays),
        weekday: cn(
          "lt:flex-1 lt:rounded-md lt:text-[0.8rem] lt:font-normal lt:text-muted-foreground lt:select-none",
          defaultClassNames.weekday
        ),
        week: cn("lt:mt-2 lt:flex lt:w-full", defaultClassNames.week),
        week_number_header: cn(
          "lt:w-(--cell-size) lt:select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "lt:text-[0.8rem] lt:text-muted-foreground lt:select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "lt:group/day lt:relative lt:aspect-square lt:h-full lt:w-full lt:p-0 lt:text-center lt:select-none lt:[&:last-child[data-selected=true]_button]:rounded-r-md",
          props.showWeekNumber
            ? "lt:[&:nth-child(2)[data-selected=true]_button]:rounded-l-md"
            : "lt:[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn("lt:rounded-l-md lt:bg-accent", defaultClassNames.range_start),
        range_middle: cn("lt:rounded-none", defaultClassNames.range_middle),
        range_end: cn("lt:rounded-r-md lt:bg-accent", defaultClassNames.range_end),
        today: cn(
          "lt:rounded-md lt:bg-accent lt:text-accent-foreground lt:data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
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
            return <ChevronLeftIcon className={cn("lt:size-4", className)} {...props} />
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("lt:size-4", className)} {...props} />
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
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "lt:flex lt:aspect-square lt:size-auto lt:w-full lt:min-w-(--cell-size) lt:flex-col lt:gap-1 lt:leading-none lt:font-normal lt:group-data-[focused=true]/day:relative lt:group-data-[focused=true]/day:z-10 lt:group-data-[focused=true]/day:border-ring lt:group-data-[focused=true]/day:ring-[3px] lt:group-data-[focused=true]/day:ring-ring/50 lt:data-[range-end=true]:rounded-md lt:data-[range-end=true]:rounded-r-md lt:data-[range-end=true]:bg-primary lt:data-[range-end=true]:text-primary-foreground lt:data-[range-middle=true]:rounded-none lt:data-[range-middle=true]:bg-accent lt:data-[range-middle=true]:text-accent-foreground lt:data-[range-start=true]:rounded-md lt:data-[range-start=true]:rounded-l-md lt:data-[range-start=true]:bg-primary lt:data-[range-start=true]:text-primary-foreground lt:data-[selected-single=true]:bg-primary lt:data-[selected-single=true]:text-primary-foreground lt:dark:hover:text-accent-foreground lt:[&>span]:text-xs lt:[&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
