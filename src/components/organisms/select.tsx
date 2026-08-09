"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "lt:flex lt:w-fit lt:items-center lt:justify-between lt:gap-2 lt:rounded-md lt:border lt:border-input lt:bg-transparent lt:px-3 lt:py-2 lt:text-sm lt:whitespace-nowrap lt:transition-[color,box-shadow] lt:outline-none lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:disabled:cursor-not-allowed lt:disabled:opacity-50 lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20 lt:data-[placeholder]:text-muted-foreground lt:data-[size=default]:h-9 lt:data-[size=sm]:h-8 lt:*:data-[slot=select-value]:line-clamp-1 lt:*:data-[slot=select-value]:flex lt:*:data-[slot=select-value]:items-center lt:*:data-[slot=select-value]:gap-2 lt:dark:bg-input/30 lt:dark:hover:bg-input/50 lt:dark:aria-invalid:ring-destructive/40 lt:[&_svg]:pointer-events-none lt:[&_svg]:shrink-0 lt:[&_svg:not([class*='size-'])]:size-4 lt:[&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="lt:size-4 lt:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "lt:relative lt:z-50 lt:max-h-(--radix-select-content-available-height) lt:min-w-[8rem] lt:origin-(--radix-select-content-transform-origin) lt:overflow-x-hidden lt:overflow-y-auto lt:rounded-md lt:border lt:bg-popover lt:text-popover-foreground lt:data-[side=bottom]:slide-in-from-top-2 lt:data-[side=left]:slide-in-from-right-2 lt:data-[side=right]:slide-in-from-left-2 lt:data-[side=top]:slide-in-from-bottom-2 lt:data-[state=closed]:animate-out lt:data-[state=closed]:fade-out-0 lt:data-[state=closed]:zoom-out-95 lt:data-[state=open]:animate-in lt:data-[state=open]:fade-in-0 lt:data-[state=open]:zoom-in-95",
          position === "popper" &&
            "lt:data-[side=bottom]:translate-y-1 lt:data-[side=left]:-translate-x-1 lt:data-[side=right]:translate-x-1 lt:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "lt:p-1",
            position === "popper" &&
              "lt:h-[var(--radix-select-trigger-height)] lt:w-full lt:min-w-[var(--radix-select-trigger-width)] lt:scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("lt:px-2 lt:py-1.5 lt:text-xs lt:text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "lt:relative lt:flex lt:w-full lt:cursor-default lt:items-center lt:gap-2 lt:rounded-sm lt:py-1.5 lt:pr-8 lt:pl-2 lt:text-sm lt:outline-hidden lt:select-none lt:focus:bg-accent lt:focus:text-accent-foreground lt:data-[disabled]:pointer-events-none lt:data-[disabled]:opacity-50 lt:[&_svg]:pointer-events-none lt:[&_svg]:shrink-0 lt:[&_svg:not([class*='size-'])]:size-4 lt:[&_svg:not([class*='text-'])]:text-muted-foreground lt:*:[span]:last:flex lt:*:[span]:last:items-center lt:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="lt:absolute lt:right-2 lt:flex lt:size-3.5 lt:items-center lt:justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="lt:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("lt:pointer-events-none lt:-mx-1 lt:my-1 lt:h-px lt:bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "lt:flex lt:cursor-default lt:items-center lt:justify-center lt:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="lt:size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "lt:flex lt:cursor-default lt:items-center lt:justify-center lt:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="lt:size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
