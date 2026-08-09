"use client"

import * as React from "react"
import { CircleIcon } from "lucide-react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("lt:grid lt:gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "lt:aspect-square lt:size-4 lt:shrink-0 lt:rounded-full lt:border lt:border-input lt:text-primary  lt:transition-[color,box-shadow] lt:outline-none lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:disabled:cursor-not-allowed lt:disabled:opacity-50 lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20 lt:dark:bg-input/30 lt:dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="lt:relative lt:flex lt:items-center lt:justify-center"
      >
        <CircleIcon className="lt:absolute lt:top-1/2 lt:left-1/2 lt:size-2 -lt:translate-x-1/2 -lt:translate-y-1/2 lt:fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
