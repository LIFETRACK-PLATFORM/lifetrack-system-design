"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

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
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "lt:z-50 lt:w-fit lt:origin-(--radix-tooltip-content-transform-origin) lt:animate-in lt:rounded-md lt:bg-foreground lt:px-3 lt:py-1.5 lt:text-xs lt:text-balance lt:text-background lt:fade-in-0 lt:zoom-in-95 lt:data-[side=bottom]:slide-in-from-top-2 lt:data-[side=left]:slide-in-from-right-2 lt:data-[side=right]:slide-in-from-left-2 lt:data-[side=top]:slide-in-from-bottom-2 lt:data-[state=closed]:animate-out lt:data-[state=closed]:fade-out-0 lt:data-[state=closed]:zoom-out-95",
          className
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="lt:z-50 lt:size-2.5 lt:translate-y-[calc(-50%_-_2px)] lt:rotate-45 lt:rounded-[2px] lt:bg-foreground lt:fill-foreground" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
