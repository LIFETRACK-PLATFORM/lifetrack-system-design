import * as React from "react"

import { cn } from "@/lib/utils"

function FieldError({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-error"
      role="alert"
      className={cn("lt:mt-0.5 lt:text-[11.5px] lt:leading-snug lt:text-error", className)}
      {...props}
    />
  )
}

export { FieldError }
