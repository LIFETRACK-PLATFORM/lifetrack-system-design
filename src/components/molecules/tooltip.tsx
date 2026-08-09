"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const tooltipContentVariants = cva(
  "lt:z-50 lt:w-fit lt:origin-(--radix-tooltip-content-transform-origin) lt:animate-in lt:rounded-md lt:px-2.5 lt:py-1.5 lt:text-[11.5px] lt:font-medium lt:text-balance lt:fade-in-0 lt:zoom-in-95 lt:data-[side=bottom]:slide-in-from-top-2 lt:data-[side=left]:slide-in-from-right-2 lt:data-[side=right]:slide-in-from-left-2 lt:data-[side=top]:slide-in-from-bottom-2 lt:data-[state=closed]:animate-out lt:data-[state=closed]:fade-out-0 lt:data-[state=closed]:zoom-out-95",
  {
    variants: {
      variant: {
        default: "lt:bg-surface-5 lt:text-text-1",
        inverse: "lt:bg-foreground lt:text-background",
        primary: "lt:bg-primary lt:text-primary-foreground",
        success: "lt:bg-success lt:text-white",
        warning: "lt:bg-warning lt:text-white",
        destructive: "lt:bg-error lt:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const tooltipArrowVariants = cva(
  "lt:z-50 lt:size-2.5 lt:translate-y-[calc(-50%_-_2px)] lt:rotate-45 lt:rounded-[2px]",
  {
    variants: {
      variant: {
        default: "lt:bg-surface-5 lt:fill-surface-5",
        inverse: "lt:bg-foreground lt:fill-foreground",
        primary: "lt:bg-primary lt:fill-primary",
        success: "lt:bg-success lt:fill-success",
        warning: "lt:bg-warning lt:fill-warning",
        destructive: "lt:bg-error lt:fill-error",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  variant = "default",
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipContentVariants>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        data-variant={variant}
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ variant }), className)}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className={cn(tooltipArrowVariants({ variant }))} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, tooltipContentVariants }
