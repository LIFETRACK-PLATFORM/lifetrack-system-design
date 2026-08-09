import * as React from "react"

import { cn } from "@/lib/utils"

function PageHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header"
      className={cn("lt:flex lt:flex-col lt:gap-4", className)}
      {...props}
    />
  )
}

function PageHeaderEyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-header-eyebrow"
      className={cn(
        "lt:font-mono lt:text-xs lt:font-medium lt:tracking-[0.06em] lt:text-primary lt:uppercase",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderRow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header-row"
      className={cn(
        "lt:flex lt:flex-col lt:gap-4 lt:sm:flex-row lt:sm:items-start lt:sm:justify-between",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header-content"
      className={cn("lt:flex lt:min-w-0 lt:flex-col lt:gap-2", className)}
      {...props}
    />
  )
}

function PageHeaderTitle({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      data-slot="page-header-title"
      className={cn(
        "lt:font-heading lt:text-headline-md lt:font-semibold lt:text-text-1",
        className
      )}
      {...props}
    />
  )
}

function PageHeaderDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="page-header-description"
      className={cn("lt:max-w-2xl lt:text-body-md lt:text-text-3", className)}
      {...props}
    />
  )
}

function PageHeaderActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="page-header-actions"
      className={cn("lt:flex lt:shrink-0 lt:flex-wrap lt:items-center lt:gap-2", className)}
      {...props}
    />
  )
}

export {
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderEyebrow,
  PageHeaderRow,
  PageHeaderTitle,
}
