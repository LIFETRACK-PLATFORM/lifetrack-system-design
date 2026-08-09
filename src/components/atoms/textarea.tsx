import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "lt:flex lt:min-h-[88px] lt:w-full lt:rounded-[10px] lt:border lt:border-border lt:bg-surface-1 lt:px-3.5 lt:py-2.5 lt:text-sm lt:text-text-1 lt:transition-colors lt:outline-none lt:placeholder:text-text-3 lt:disabled:cursor-not-allowed lt:disabled:border-border lt:disabled:bg-surface-2 lt:disabled:text-text-3 lt:disabled:opacity-100 lt:focus-visible:border-primary lt:focus-visible:ring-[3px] lt:focus-visible:ring-primary/20 lt:aria-invalid:border-error lt:aria-invalid:ring-0",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
