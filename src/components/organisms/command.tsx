"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/organisms/dialog"

function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "lt:flex lt:h-full lt:w-full lt:flex-col lt:overflow-hidden lt:rounded-md lt:bg-popover lt:text-popover-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="lt:sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("lt:overflow-hidden lt:p-0", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="lt:**:data-[slot=command-input-wrapper]:h-12 lt:[&_[cmdk-group-heading]]:px-2 lt:[&_[cmdk-group-heading]]:font-medium lt:[&_[cmdk-group-heading]]:text-muted-foreground lt:[&_[cmdk-group]]:px-2 lt:[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 lt:[&_[cmdk-input-wrapper]_svg]:h-5 lt:[&_[cmdk-input-wrapper]_svg]:w-5 lt:[&_[cmdk-input]]:h-12 lt:[&_[cmdk-item]]:px-2 lt:[&_[cmdk-item]]:py-3 lt:[&_[cmdk-item]_svg]:h-5 lt:[&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="lt:flex lt:h-9 lt:items-center lt:gap-2 lt:border-b lt:px-3"
    >
      <SearchIcon className="lt:size-4 lt:shrink-0 lt:opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "lt:flex lt:h-10 lt:w-full lt:rounded-md lt:bg-transparent lt:py-3 lt:text-sm lt:outline-hidden lt:placeholder:text-muted-foreground lt:disabled:cursor-not-allowed lt:disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "lt:max-h-[300px] lt:scroll-py-1 lt:overflow-x-hidden lt:overflow-y-auto",
        className
      )}
      {...props}
    />
  )
}

function CommandEmpty({ ...props }: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="lt:py-6 lt:text-center lt:text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "lt:overflow-hidden lt:p-1 lt:text-foreground lt:[&_[cmdk-group-heading]]:px-2 lt:[&_[cmdk-group-heading]]:py-1.5 lt:[&_[cmdk-group-heading]]:text-xs lt:[&_[cmdk-group-heading]]:font-medium lt:[&_[cmdk-group-heading]]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("lt:-mx-1 lt:h-px lt:bg-border", className)}
      {...props}
    />
  )
}

function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "lt:relative lt:flex lt:cursor-default lt:items-center lt:gap-2 lt:rounded-sm lt:px-2 lt:py-1.5 lt:text-sm lt:outline-hidden lt:select-none lt:data-[disabled=true]:pointer-events-none lt:data-[disabled=true]:opacity-50 lt:data-[selected=true]:bg-accent lt:data-[selected=true]:text-accent-foreground lt:[&_svg]:pointer-events-none lt:[&_svg]:shrink-0 lt:[&_svg:not([class*='size-'])]:size-4 lt:[&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function CommandShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("lt:ml-auto lt:text-xs lt:tracking-widest lt:text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
