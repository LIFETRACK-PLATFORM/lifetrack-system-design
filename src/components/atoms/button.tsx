import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "lt:inline-flex lt:shrink-0 lt:items-center lt:justify-center lt:gap-2 lt:rounded-[10px] lt:text-sm lt:font-medium lt:whitespace-nowrap lt:transition-colors lt:outline-none lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:disabled:pointer-events-none lt:disabled:opacity-50 lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20 lt:[&_svg]:pointer-events-none lt:[&_svg]:shrink-0 lt:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "lt:bg-primary lt:text-primary-foreground lt:hover:bg-primary-hover lt:active:bg-primary-active",
        destructive:
          "lt:bg-destructive lt:text-destructive-foreground lt:hover:bg-destructive/90 lt:active:bg-destructive",
        outline:
          "lt:border lt:border-border lt:bg-surface-1 lt:text-text-1 lt:hover:bg-surface-2 lt:active:bg-surface-3",
        secondary: "lt:bg-surface-3 lt:text-text-1 lt:hover:bg-surface-4 lt:active:bg-surface-5",
        ghost: "lt:text-text-1 lt:hover:bg-surface-3 lt:active:bg-surface-4",
        link: "lt:text-primary lt:underline-offset-4 lt:hover:underline",
      },
      size: {
        default: "lt:h-9 lt:px-4 lt:py-2 lt:has-[>svg]:px-3",
        xs: "lt:h-6 lt:gap-1 lt:rounded-[10px] lt:px-2 lt:text-xs lt:has-[>svg]:px-1.5 lt:[&_svg:not([class*='size-'])]:size-3",
        sm: "lt:h-8 lt:gap-1.5 lt:rounded-[10px] lt:px-3 lt:has-[>svg]:px-2.5",
        lg: "lt:h-10 lt:rounded-[10px] lt:px-6 lt:has-[>svg]:px-4",
        icon: "lt:size-9",
        "icon-xs": "lt:size-6 lt:rounded-[10px] lt:[&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "lt:size-8",
        "icon-lg": "lt:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
