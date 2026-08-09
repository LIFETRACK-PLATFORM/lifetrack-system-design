"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/organisms/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/molecules/popover"

export type ComboboxOption = {
  value: string
  label: string
}

function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Buscar...",
  emptyText = "Sin resultados.",
  className,
}: {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  emptyText?: string
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const selected = options.find((option) => option.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("lt:w-full lt:justify-between lt:font-normal", className)}
        >
          {selected ? selected.label : placeholder}
          <ChevronsUpDown className="lt:ml-2 lt:size-4 lt:shrink-0 lt:opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lt:w-(--radix-popover-trigger-width) lt:p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onValueChange?.(option.value)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "lt:size-4",
                      value === option.value ? "lt:opacity-100" : "lt:opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { Combobox }
