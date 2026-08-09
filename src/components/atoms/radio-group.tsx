"use client"

import * as React from "react"
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
        "lt:flex lt:size-5 lt:shrink-0 lt:items-center lt:justify-center lt:rounded-full lt:border-[1.5px] lt:border-border lt:bg-surface-1 lt:transition-colors lt:outline-none",
        "lt:focus-visible:border-primary lt:focus-visible:ring-[3px] lt:focus-visible:ring-primary/20",
        "lt:data-[state=checked]:border-primary",
        "lt:disabled:cursor-not-allowed lt:disabled:opacity-50",
        "lt:aria-invalid:border-error lt:aria-invalid:ring-error/20",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="lt:flex lt:items-center lt:justify-center"
      >
        <span className="lt:size-[9px] lt:rounded-full lt:bg-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }
