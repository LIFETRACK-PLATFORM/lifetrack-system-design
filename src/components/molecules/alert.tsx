import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "lt:relative lt:grid lt:w-full lt:grid-cols-[auto_1fr] lt:items-start lt:gap-x-3 lt:gap-y-0.5 lt:rounded-lg lt:border lt:bg-surface-1 lt:px-4 lt:py-3 lt:text-sm lt:[&>svg]:col-start-1 lt:[&>svg]:row-start-1 lt:[&>svg]:size-4 lt:[&>svg]:shrink-0 lt:[&>svg]:translate-y-0.5 lt:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "lt:border-border lt:text-text-1 lt:[&>svg]:text-text-3",
        primary: "lt:border-primary/30 lt:bg-primary/5 lt:text-primary lt:[&>svg]:text-primary",
        success: "lt:border-success/30 lt:bg-success/5 lt:text-success lt:[&>svg]:text-success",
        warning: "lt:border-warning/30 lt:bg-warning/5 lt:text-warning lt:[&>svg]:text-warning",
        destructive: "lt:border-error/30 lt:bg-error/5 lt:text-error lt:[&>svg]:text-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "lt:col-start-2 lt:line-clamp-1 lt:min-h-4 lt:font-semibold lt:tracking-tight lt:text-inherit",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "lt:col-start-2 lt:text-sm lt:font-normal lt:leading-relaxed lt:text-inherit lt:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
