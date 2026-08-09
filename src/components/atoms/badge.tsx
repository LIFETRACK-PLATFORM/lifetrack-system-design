import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "lt:inline-flex lt:w-fit lt:shrink-0 lt:items-center lt:justify-center lt:gap-1.5 lt:overflow-hidden lt:rounded-full lt:border lt:border-transparent lt:px-2.5 lt:py-0.5 lt:text-xs lt:font-medium lt:whitespace-nowrap lt:transition-colors lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:[&>svg]:pointer-events-none lt:[&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "lt:bg-transparent lt:text-text-1",
        secondary: "lt:bg-transparent lt:text-text-3",
        success: "lt:bg-transparent lt:text-success",
        warning: "lt:bg-transparent lt:text-warning",
        destructive: "lt:bg-transparent lt:text-error",
        outline: "lt:border-border lt:text-text-1",
        ghost: "lt:text-text-3",
        link: "lt:text-primary lt:underline-offset-4 lt:[a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const statusDotClass: Record<NonNullable<VariantProps<typeof badgeVariants>["variant"]>, string> = {
  default: "lt:bg-text-1",
  secondary: "lt:bg-text-3",
  success: "lt:bg-success",
  warning: "lt:bg-warning",
  destructive: "lt:bg-error",
  outline: "lt:bg-text-1",
  ghost: "lt:bg-text-3",
  link: "lt:bg-primary",
}

function Badge({
  className,
  variant = "default",
  asChild = false,
  showDot = false,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
    /** Nightframe: texto + punto de color, sin fondo saturado */
    showDot?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "span"
  const resolved = variant ?? "default"

  return (
    <Comp
      data-slot="badge"
      data-variant={resolved}
      className={cn(badgeVariants({ variant: resolved }), className)}
      {...props}
    >
      {showDot && (
        <span
          aria-hidden
          className={cn("lt:size-1.5 lt:shrink-0 lt:rounded-full", statusDotClass[resolved])}
        />
      )}
      {children}
    </Comp>
  )
}

export type StatusBadgeStatus =
  "active" | "pending" | "overdue" | "completed" | "paused" | "therapy" | "medical"

const STATUS_CONFIG: Record<
  StatusBadgeStatus,
  { variant: NonNullable<VariantProps<typeof badgeVariants>["variant"]>; label: string }
> = {
  active: { variant: "success", label: "Activo" },
  pending: { variant: "warning", label: "Pendiente" },
  overdue: { variant: "destructive", label: "Vencido" },
  completed: { variant: "secondary", label: "Completado" },
  paused: { variant: "warning", label: "Pausado" },
  therapy: { variant: "default", label: "Terapia" },
  medical: { variant: "destructive", label: "Médica" },
}

function StatusBadge({
  status,
  label,
  className,
  ...props
}: Omit<React.ComponentProps<typeof Badge>, "variant" | "showDot" | "children"> & {
  status: StatusBadgeStatus
  label?: string
}) {
  const config = STATUS_CONFIG[status]
  return (
    <Badge
      variant={config.variant}
      showDot
      className={cn(
        status === "therapy" && "lt:text-primary lt:uppercase lt:tracking-wider",
        status === "medical" && "lt:uppercase lt:tracking-wider",
        className
      )}
      {...props}
    >
      {label ?? config.label}
    </Badge>
  )
}

export { Badge, StatusBadge, badgeVariants }
