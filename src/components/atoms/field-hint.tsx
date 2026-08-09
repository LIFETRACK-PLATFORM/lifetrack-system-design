import * as React from "react"

import { cn } from "@/lib/utils"

function FieldHint({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="field-hint"
      className={cn("lt:mt-0.5 lt:text-[11.5px] lt:leading-snug lt:text-text-3", className)}
      {...props}
    />
  )
}

export { FieldHint }
