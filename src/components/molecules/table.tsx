"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="lt:relative lt:w-full lt:overflow-hidden lt:rounded-xl lt:border lt:border-border lt:bg-surface-1 lt:[[data-slot=card-content]_&]:border-0 lt:[[data-slot=card-content]_&]:rounded-none"
    >
      <div className="lt:overflow-x-auto">
        <table
          data-slot="table"
          className={cn("lt:w-full lt:caption-bottom lt:text-sm", className)}
          {...props}
        />
      </div>
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "lt:bg-surface-2 lt:[&_tr]:bg-surface-2 lt:[&_tr]:shadow-[0_1px_0_0_var(--lt-border)] lt:[&_tr]:hover:bg-surface-2",
        className
      )}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "lt:[&_tr]:border-b lt:[&_tr]:border-border lt:[&_tr]:bg-surface-1 lt:[&_tr:last-child]:border-0",
        className
      )}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "lt:border-t lt:bg-muted/50 lt:font-medium lt:[&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "lt:border-b-0 lt:transition-colors lt:hover:bg-surface-2 lt:has-aria-expanded:bg-surface-2 lt:data-[state=selected]:bg-surface-2",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "lt:h-auto lt:bg-surface-2 lt:px-[18px] lt:py-3 lt:text-left lt:align-middle lt:font-mono lt:text-[11.5px] lt:font-medium lt:tracking-wide lt:whitespace-nowrap lt:text-text-3 lt:uppercase lt:[&:has([role=checkbox])]:pr-0 lt:[&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "lt:px-[18px] lt:py-3.5 lt:align-middle lt:text-[13.5px] lt:text-[#55555F] lt:dark:text-[#A6A6AE] lt:whitespace-nowrap lt:[&:has([role=checkbox])]:pr-0 lt:[&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("lt:mt-4 lt:text-sm lt:text-muted-foreground", className)}
      {...props}
    />
  )
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption }
