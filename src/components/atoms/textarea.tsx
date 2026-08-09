import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "lt:flex lt:field-sizing-content lt:min-h-16 lt:w-full lt:rounded-[10px] lt:border lt:border-input lt:bg-surface-1 lt:px-3 lt:py-2 lt:text-base lt:transition-colors lt:outline-none lt:placeholder:text-muted-foreground lt:focus-visible:border-primary lt:focus-visible:ring-[3px] lt:focus-visible:ring-primary/30 lt:disabled:cursor-not-allowed lt:disabled:bg-surface-2 lt:disabled:opacity-50 lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20 lt:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
