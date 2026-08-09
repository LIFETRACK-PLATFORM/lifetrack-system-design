import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "lt:h-10 lt:w-full lt:min-w-0 lt:rounded-[10px] lt:border lt:border-border lt:bg-surface-1 lt:px-3.5 lt:text-sm lt:text-text-1 lt:transition-colors lt:outline-none lt:selection:bg-primary lt:selection:text-primary-foreground lt:file:inline-flex lt:file:h-7 lt:file:border-0 lt:file:bg-transparent lt:file:text-sm lt:file:font-medium lt:file:text-foreground lt:placeholder:text-text-3 lt:disabled:pointer-events-none lt:disabled:cursor-not-allowed lt:disabled:border-border lt:disabled:bg-surface-2 lt:disabled:text-text-3 lt:disabled:opacity-100",
        "lt:focus-visible:border-primary lt:focus-visible:ring-[3px] lt:focus-visible:ring-primary/20",
        "lt:aria-invalid:border-error lt:aria-invalid:ring-0",
        className
      )}
      {...props}
    />
  )
}

export { Input }
