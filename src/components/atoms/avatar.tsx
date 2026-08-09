"use client"

import * as React from "react"
import { Avatar as AvatarPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root> & {
  size?: "default" | "sm" | "lg"
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      data-size={size}
      className={cn(
        "lt:group/avatar lt:relative lt:flex lt:size-8 lt:shrink-0 lt:overflow-hidden lt:rounded-full lt:select-none lt:data-[size=lg]:size-10 lt:data-[size=sm]:size-6",
        className
      )}
      {...props}
    />
  )
}

function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("lt:aspect-square lt:size-full", className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "lt:flex lt:size-full lt:items-center lt:justify-center lt:rounded-full lt:bg-muted lt:text-sm lt:text-muted-foreground lt:group-data-[size=sm]/avatar:text-xs",
        className
      )}
      {...props}
    />
  )
}

function AvatarBadge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="avatar-badge"
      className={cn(
        "lt:absolute lt:right-0 lt:bottom-0 lt:z-10 lt:inline-flex lt:items-center lt:justify-center lt:rounded-full lt:bg-primary lt:text-primary-foreground lt:ring-2 lt:ring-background lt:select-none",
        "lt:group-data-[size=sm]/avatar:size-2 lt:group-data-[size=sm]/avatar:[&>svg]:hidden",
        "lt:group-data-[size=default]/avatar:size-2.5 lt:group-data-[size=default]/avatar:[&>svg]:size-2",
        "lt:group-data-[size=lg]/avatar:size-3 lt:group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group"
      className={cn(
        "lt:group/avatar-group lt:flex -lt:space-x-2 lt:*:data-[slot=avatar]:ring-2 lt:*:data-[slot=avatar]:ring-background",
        className
      )}
      {...props}
    />
  )
}

function AvatarGroupCount({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="avatar-group-count"
      className={cn(
        "lt:relative lt:flex lt:size-8 lt:shrink-0 lt:items-center lt:justify-center lt:rounded-full lt:bg-muted lt:text-sm lt:text-muted-foreground lt:ring-2 lt:ring-background lt:group-has-data-[size=lg]/avatar-group:size-10 lt:group-has-data-[size=sm]/avatar-group:size-6 lt:[&>svg]:size-4 lt:group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 lt:group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount }
