"use client"

import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "lt:flex lt:items-center lt:gap-2 lt:text-sm lt:leading-none lt:font-medium lt:select-none lt:group-data-[disabled=true]:pointer-events-none lt:group-data-[disabled=true]:opacity-50 lt:peer-disabled:cursor-not-allowed lt:peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Label }
