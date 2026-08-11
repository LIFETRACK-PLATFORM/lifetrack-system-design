"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/button"
import { Calendar } from "@/components/molecules/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/molecules/popover"

function DatePicker({
  value,
  onValueChange,
  placeholder = "Elegir fecha",
  disabled,
  className,
}: {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: React.ComponentProps<typeof Calendar>["disabled"]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(
            "lt:h-10 lt:w-full lt:justify-start lt:gap-2 lt:bg-surface-1 lt:font-normal",
            !value && "lt:text-text-3",
            className
          )}
        >
          <CalendarIcon className="lt:size-4 lt:shrink-0 lt:text-text-3" />
          <span className="lt:truncate">
            {value ? format(value, "d 'de' MMMM yyyy", { locale: es }) : placeholder}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lt:w-auto lt:border-border lt:bg-surface-1 lt:p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onValueChange?.(date)
            setOpen(false)
          }}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  )
}

export { DatePicker }
