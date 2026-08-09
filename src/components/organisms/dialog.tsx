"use client"

import * as React from "react"
import { XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { Button } from "@/components/atoms/button"

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogCloseButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <DialogPrimitive.Close asChild>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        className={cn(
          "lt:shrink-0 lt:border-primary/40 lt:bg-primary/12 lt:text-primary",
          "lt:hover:border-primary lt:hover:bg-primary/20 lt:hover:text-primary",
          "lt:[&_svg:not([class*='size-'])]:size-4 lt:[&_svg]:stroke-[2.25]",
          className
        )}
        {...props}
      >
        <XIcon />
        <span className="lt:sr-only">Cerrar</span>
      </Button>
    </DialogPrimitive.Close>
  )
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "lt:fixed lt:inset-0 lt:z-50 lt:bg-black/50 lt:data-[state=closed]:animate-out lt:data-[state=closed]:fade-out-0 lt:data-[state=open]:animate-in lt:data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "lt:fixed lt:top-[50%] lt:left-[50%] lt:z-50 lt:grid lt:w-full lt:max-w-[calc(100%-2rem)] lt:translate-x-[-50%] lt:translate-y-[-50%] lt:gap-4 lt:rounded-xl lt:border lt:border-border lt:bg-surface-1 lt:p-6 lt:duration-200 lt:outline-none lt:data-[state=closed]:animate-out lt:data-[state=closed]:fade-out-0 lt:data-[state=closed]:zoom-out-95 lt:data-[state=open]:animate-in lt:data-[state=open]:fade-in-0 lt:data-[state=open]:zoom-in-95 lt:sm:max-w-lg",
          className
        )}
        {...props}
      >
        {showCloseButton ? (
          <>
            <div className="lt:flex lt:justify-end">
              <DialogCloseButton />
            </div>
            {children}
          </>
        ) : (
          children
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("lt:flex lt:flex-col lt:gap-2 lt:text-center lt:sm:text-left", className)}
      {...props}
    />
  )
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "lt:flex lt:flex-col-reverse lt:gap-3 lt:sm:flex-row lt:sm:items-center lt:sm:justify-end",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  )
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("lt:text-lg lt:leading-none lt:font-semibold", className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("lt:text-sm lt:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
