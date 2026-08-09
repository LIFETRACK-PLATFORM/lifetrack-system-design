"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

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

const comboboxCommandClassName =
  "lt:rounded-none lt:bg-surface-1 lt:[&_[data-slot=command-input-wrapper]]:h-10 lt:[&_[data-slot=command-input-wrapper]]:gap-2 lt:[&_[data-slot=command-input-wrapper]]:border-b lt:[&_[data-slot=command-input-wrapper]]:border-border lt:[&_[data-slot=command-input-wrapper]]:px-3.5 lt:[&_[data-slot=command-input-wrapper]_svg]:text-text-3 lt:[&_[data-slot=command-group]]:p-0 lt:[&_[data-slot=command-item]]:rounded-none lt:[&_[data-slot=command-item]]:px-3.5 lt:[&_[data-slot=command-item]]:py-2.5 lt:[&_[data-slot=command-item]]:text-[13.5px] lt:[&_[data-slot=command-item]]:text-text-1 lt:[&_[data-slot=command-item][data-selected=true]]:bg-primary/10 lt:[&_[data-slot=command-item][data-selected=true]]:text-text-1"

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
          className={cn(
            "lt:h-10 lt:w-full lt:justify-between lt:rounded-[10px] lt:border-border lt:bg-surface-1 lt:font-normal lt:text-text-1 lt:shadow-none hover:lt:bg-surface-1",
            open && "lt:border-primary lt:ring-[3px] lt:ring-primary/15",
            className
          )}
        >
          <span className={cn(!selected && "lt:text-text-3")}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronsUpDown className="lt:ml-2 lt:size-4 lt:shrink-0 lt:text-text-3" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={4}
        className={cn(
          "lt:w-(--radix-popover-trigger-width) lt:overflow-hidden lt:rounded-[10px] lt:border lt:border-primary lt:bg-surface-1 lt:p-0",
          "lt:shadow-[0_0_0_3px] lt:shadow-primary/15 lt:ring-0"
        )}
      >
        <Command className={comboboxCommandClassName}>
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
