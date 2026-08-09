import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "lt:inline-flex lt:shrink-0 lt:items-center lt:justify-center lt:gap-2 lt:rounded-[10px] lt:text-sm lt:font-semibold lt:whitespace-nowrap lt:transition-colors lt:outline-none lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:disabled:pointer-events-none lt:disabled:cursor-not-allowed lt:disabled:border-border lt:disabled:bg-surface-3 lt:disabled:text-text-3 lt:disabled:opacity-100 lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20 lt:[&_svg]:pointer-events-none lt:[&_svg]:shrink-0 lt:[&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "lt:border lt:border-primary lt:bg-primary lt:text-primary-foreground lt:hover:bg-primary-hover lt:active:bg-primary-active",
        destructive:
          "lt:border lt:border-error lt:bg-error lt:text-white lt:hover:brightness-110 lt:active:brightness-95",
        outline:
          "lt:border lt:border-border lt:bg-surface-1 lt:text-text-1 lt:hover:bg-surface-2 lt:active:bg-surface-3",
        secondary:
          "lt:border lt:border-border lt:bg-surface-3 lt:text-text-1 lt:hover:bg-surface-4 lt:active:bg-surface-5",
        ghost:
          "lt:border lt:border-transparent lt:bg-transparent lt:text-text-3 lt:hover:bg-surface-2 lt:active:bg-surface-3",
        link: "lt:text-primary lt:underline-offset-4 lt:hover:underline",
        success:
          "lt:border lt:border-success lt:bg-success lt:text-white lt:hover:brightness-110 lt:active:brightness-95",
        warning:
          "lt:border lt:border-warning lt:bg-warning lt:text-white lt:hover:brightness-110 lt:active:brightness-95",
      },
      size: {
        default: "lt:h-10 lt:px-[18px] lt:text-sm lt:has-[>svg]:px-3",
        xs: "lt:h-6 lt:gap-1 lt:px-2 lt:text-xs lt:has-[>svg]:px-1.5 lt:[&_svg:not([class*='size-'])]:size-3",
        sm: "lt:h-8 lt:gap-1.5 lt:px-3.5 lt:text-[13px] lt:has-[>svg]:px-2.5",
        lg: "lt:h-12 lt:px-[22px] lt:text-[15px] lt:has-[>svg]:px-4",
        icon: "lt:size-10 lt:[&_svg:not([class*='size-'])]:size-4",
        "icon-xs": "lt:size-6 lt:[&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "lt:size-8 lt:[&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "lt:size-12 lt:[&_svg:not([class*='size-'])]:size-[18px]",
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
