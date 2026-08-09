import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "lt:h-9 lt:w-full lt:min-w-0 lt:rounded-[10px] lt:border lt:border-input lt:bg-surface-1 lt:px-3 lt:py-1 lt:text-base lt:transition-colors lt:outline-none lt:selection:bg-primary lt:selection:text-primary-foreground lt:file:inline-flex lt:file:h-7 lt:file:border-0 lt:file:bg-transparent lt:file:text-sm lt:file:font-medium lt:file:text-foreground lt:placeholder:text-muted-foreground lt:disabled:pointer-events-none lt:disabled:cursor-not-allowed lt:disabled:bg-surface-2 lt:disabled:opacity-50 lt:md:text-sm",
        "lt:focus-visible:border-primary lt:focus-visible:ring-[3px] lt:focus-visible:ring-primary/30",
        "lt:aria-invalid:border-destructive lt:aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
