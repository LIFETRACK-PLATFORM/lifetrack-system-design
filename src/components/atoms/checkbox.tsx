"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "lt:peer lt:size-4 lt:shrink-0 lt:rounded-[4px] lt:border lt:border-input  lt:transition-shadow lt:outline-none lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:disabled:cursor-not-allowed lt:disabled:opacity-50 lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20 lt:data-[state=checked]:border-primary lt:data-[state=checked]:bg-primary lt:data-[state=checked]:text-primary-foreground lt:dark:bg-input/30 lt:dark:aria-invalid:ring-destructive/40 lt:dark:data-[state=checked]:bg-primary",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="lt:grid lt:place-content-center lt:text-current lt:transition-none"
      >
        <CheckIcon className="lt:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
