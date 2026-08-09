"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "lt:peer lt:size-4 lt:shrink-0 lt:rounded-[4px] lt:border lt:border-input lt:transition-shadow lt:outline-none lt:focus-visible:ring-[3px] lt:disabled:cursor-not-allowed lt:disabled:opacity-50 lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20 lt:dark:bg-input/30 lt:dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default:
          "lt:focus-visible:border-primary lt:focus-visible:ring-primary/20 lt:data-[state=checked]:border-primary lt:data-[state=checked]:bg-primary lt:data-[state=checked]:text-primary-foreground lt:dark:data-[state=checked]:bg-primary",
        success:
          "lt:focus-visible:border-success lt:focus-visible:ring-success/20 lt:data-[state=checked]:border-success lt:data-[state=checked]:bg-success lt:data-[state=checked]:text-white",
        warning:
          "lt:focus-visible:border-warning lt:focus-visible:ring-warning/20 lt:data-[state=checked]:border-warning lt:data-[state=checked]:bg-warning lt:data-[state=checked]:text-white",
        destructive:
          "lt:focus-visible:border-error lt:focus-visible:ring-error/20 lt:data-[state=checked]:border-error lt:data-[state=checked]:bg-error lt:data-[state=checked]:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Checkbox({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & VariantProps<typeof checkboxVariants>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant }), className)}
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

export { Checkbox, checkboxVariants }
