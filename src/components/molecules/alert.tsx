import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "lt:relative lt:grid lt:w-full lt:grid-cols-[0_1fr] lt:items-start lt:gap-y-0.5 lt:rounded-lg lt:border lt:px-4 lt:py-3 lt:text-sm lt:has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] lt:has-[>svg]:gap-x-3 lt:[&>svg]:size-4 lt:[&>svg]:translate-y-0.5 lt:[&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "lt:bg-card lt:text-card-foreground",
        destructive:
          "lt:bg-card lt:text-destructive lt:*:data-[slot=alert-description]:text-destructive/90 lt:[&>svg]:text-current",
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
        "lt:col-start-2 lt:line-clamp-1 lt:min-h-4 lt:font-medium lt:tracking-tight",
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
        "lt:col-start-2 lt:grid lt:justify-items-start lt:gap-1 lt:text-sm lt:text-muted-foreground lt:[&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
