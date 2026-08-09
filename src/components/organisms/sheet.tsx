"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as SheetPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({ ...props }: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({ ...props }: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({ ...props }: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "lt:fixed lt:inset-0 lt:z-50 lt:bg-black/50 lt:data-[state=closed]:animate-out lt:data-[state=closed]:fade-out-0 lt:data-[state=open]:animate-in lt:data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "lt:fixed lt:z-50 lt:flex lt:flex-col lt:gap-4 lt:border-border lt:bg-surface-1 lt:transition lt:ease-in-out lt:data-[state=closed]:animate-out lt:data-[state=closed]:duration-300 lt:data-[state=open]:animate-in lt:data-[state=open]:duration-500",
          side === "right" &&
            "lt:inset-y-0 lt:right-0 lt:h-full lt:w-3/4 lt:border-l lt:data-[state=closed]:slide-out-to-right lt:data-[state=open]:slide-in-from-right lt:sm:max-w-sm",
          side === "left" &&
            "lt:inset-y-0 lt:left-0 lt:h-full lt:w-3/4 lt:border-r lt:data-[state=closed]:slide-out-to-left lt:data-[state=open]:slide-in-from-left lt:sm:max-w-sm",
          side === "top" &&
            "lt:inset-x-0 lt:top-0 lt:h-auto lt:border-b lt:data-[state=closed]:slide-out-to-top lt:data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "lt:inset-x-0 lt:bottom-0 lt:h-auto lt:border-t lt:data-[state=closed]:slide-out-to-bottom lt:data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <SheetPrimitive.Close className="lt:absolute lt:top-4 lt:right-4 lt:rounded-xs lt:opacity-70 lt:ring-offset-background lt:transition-opacity lt:hover:opacity-100 lt:focus:ring-2 lt:focus:ring-ring lt:focus:ring-offset-2 lt:focus:outline-hidden lt:disabled:pointer-events-none lt:data-[state=open]:bg-secondary">
            <XIcon className="lt:size-4" />
            <span className="lt:sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("lt:flex lt:flex-col lt:gap-1.5 lt:p-4", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("lt:mt-auto lt:flex lt:flex-col lt:gap-2 lt:p-4", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("lt:font-semibold lt:text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("lt:text-sm lt:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
