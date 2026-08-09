"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "lt:group/tabs lt:flex lt:gap-2 lt:data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "lt:group/tabs-list lt:inline-flex lt:items-center lt:justify-start lt:gap-1 lt:group-data-[orientation=vertical]/tabs:h-fit lt:group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "lt:w-full lt:border-b lt:border-border lt:bg-transparent lt:p-0 lt:rounded-none",
        pills:
          "lt:w-fit lt:rounded-lg lt:bg-muted lt:p-[3px] lt:text-muted-foreground lt:group-data-[orientation=horizontal]/tabs:h-9",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "lt:relative lt:inline-flex lt:items-center lt:justify-center lt:gap-1.5 lt:whitespace-nowrap lt:transition-colors lt:outline-none lt:disabled:pointer-events-none lt:disabled:opacity-50 lt:[&_svg]:pointer-events-none lt:[&_svg]:shrink-0 lt:[&_svg:not([class*='size-'])]:size-4",
        "lt:group-data-[variant=default]/tabs-list:-mb-px lt:group-data-[variant=default]/tabs-list:border-b-2 lt:group-data-[variant=default]/tabs-list:border-transparent lt:group-data-[variant=default]/tabs-list:px-1 lt:group-data-[variant=default]/tabs-list:py-2.5 lt:group-data-[variant=default]/tabs-list:text-[13.5px] lt:group-data-[variant=default]/tabs-list:font-normal lt:group-data-[variant=default]/tabs-list:text-text-3 lt:group-data-[variant=default]/tabs-list:not-last:mr-6 lt:group-data-[variant=default]/tabs-list:hover:text-text-1 lt:group-data-[variant=default]/tabs-list:focus-visible:border-primary lt:group-data-[variant=default]/tabs-list:focus-visible:ring-[3px] lt:group-data-[variant=default]/tabs-list:focus-visible:ring-primary/20 lt:group-data-[variant=default]/tabs-list:data-[state=active]:border-primary lt:group-data-[variant=default]/tabs-list:data-[state=active]:font-semibold lt:group-data-[variant=default]/tabs-list:data-[state=active]:text-text-1",
        "lt:group-data-[variant=pills]/tabs-list:h-[calc(100%-1px)] lt:group-data-[variant=pills]/tabs-list:flex-1 lt:group-data-[variant=pills]/tabs-list:rounded-md lt:group-data-[variant=pills]/tabs-list:border lt:group-data-[variant=pills]/tabs-list:border-transparent lt:group-data-[variant=pills]/tabs-list:px-2 lt:group-data-[variant=pills]/tabs-list:py-1 lt:group-data-[variant=pills]/tabs-list:text-sm lt:group-data-[variant=pills]/tabs-list:font-medium lt:group-data-[variant=pills]/tabs-list:text-foreground/60 lt:group-data-[variant=pills]/tabs-list:hover:text-foreground lt:group-data-[variant=pills]/tabs-list:focus-visible:border-ring lt:group-data-[variant=pills]/tabs-list:focus-visible:ring-[3px] lt:group-data-[variant=pills]/tabs-list:focus-visible:ring-ring/50 lt:group-data-[variant=pills]/tabs-list:data-[state=active]:bg-surface-1 lt:group-data-[variant=pills]/tabs-list:data-[state=active]:text-foreground lt:group-data-[orientation=vertical]/tabs:w-full lt:group-data-[orientation=vertical]/tabs:justify-start",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("lt:flex-1 lt:pt-4 lt:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
