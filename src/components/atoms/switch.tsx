"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "lt:peer lt:group/switch lt:inline-flex lt:shrink-0 lt:items-center lt:rounded-full lt:border lt:border-transparent  lt:transition-all lt:outline-none lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:disabled:cursor-not-allowed lt:disabled:opacity-50 lt:data-[size=default]:h-[1.15rem] lt:data-[size=default]:w-8 lt:data-[size=sm]:h-3.5 lt:data-[size=sm]:w-6 lt:data-[state=checked]:bg-primary lt:data-[state=unchecked]:bg-input lt:dark:data-[state=unchecked]:bg-input/80",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "lt:pointer-events-none lt:block lt:rounded-full lt:bg-background lt:ring-0 lt:transition-transform lt:group-data-[size=default]/switch:size-4 lt:group-data-[size=sm]/switch:size-3 lt:data-[state=checked]:translate-x-[calc(100%-2px)] lt:data-[state=unchecked]:translate-x-0 lt:dark:data-[state=checked]:bg-primary-foreground lt:dark:data-[state=unchecked]:bg-foreground"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
