"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

type RadioGroupVariant = NonNullable<VariantProps<typeof radioGroupItemVariants>["variant"]>

const RadioGroupVariantContext = React.createContext<RadioGroupVariant>("default")

const radioGroupItemVariants = cva(
  "lt:flex lt:size-5 lt:shrink-0 lt:items-center lt:justify-center lt:rounded-full lt:border-[1.5px] lt:border-border lt:bg-surface-1 lt:transition-colors lt:outline-none lt:focus-visible:ring-[3px] lt:disabled:cursor-not-allowed lt:disabled:opacity-50 lt:aria-invalid:border-error lt:aria-invalid:ring-error/20",
  {
    variants: {
      variant: {
        default:
          "lt:focus-visible:border-primary lt:focus-visible:ring-primary/20 lt:data-[state=checked]:border-primary",
        success:
          "lt:focus-visible:border-success lt:focus-visible:ring-success/20 lt:data-[state=checked]:border-success",
        warning:
          "lt:focus-visible:border-warning lt:focus-visible:ring-warning/20 lt:data-[state=checked]:border-warning",
        destructive:
          "lt:focus-visible:border-error lt:focus-visible:ring-error/20 lt:data-[state=checked]:border-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const radioGroupDotVariants = cva("lt:size-[9px] lt:rounded-full", {
  variants: {
    variant: {
      default: "lt:bg-primary",
      success: "lt:bg-success",
      warning: "lt:bg-warning",
      destructive: "lt:bg-error",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

function RadioGroup({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
  variant?: RadioGroupVariant
}) {
  return (
    <RadioGroupVariantContext.Provider value={variant}>
      <RadioGroupPrimitive.Root
        data-slot="radio-group"
        className={cn("lt:grid lt:gap-3", className)}
        {...props}
      />
    </RadioGroupVariantContext.Provider>
  )
}

function RadioGroupItem({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> &
  VariantProps<typeof radioGroupItemVariants>) {
  const groupVariant = React.useContext(RadioGroupVariantContext)
  const resolvedVariant = variant ?? groupVariant

  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ variant: resolvedVariant }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="lt:flex lt:items-center lt:justify-center"
      >
        <span className={cn(radioGroupDotVariants({ variant: resolvedVariant }))} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, radioGroupItemVariants }
