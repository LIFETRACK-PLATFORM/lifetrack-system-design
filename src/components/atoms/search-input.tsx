import * as React from "react"
import { Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/atoms/input"

function SearchInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <div data-slot="search-input" className={cn("lt:relative", className)}>
      <Search
        aria-hidden
        className="lt:pointer-events-none lt:absolute lt:top-1/2 lt:left-3.5 lt:size-4 lt:-translate-y-1/2 lt:text-text-3"
      />
      <Input type="search" className="lt:pl-10" {...props} />
    </div>
  )
}

export { SearchInput }
