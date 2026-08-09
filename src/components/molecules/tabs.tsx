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
  "lt:group/tabs-list lt:inline-flex lt:w-fit lt:items-center lt:justify-center lt:rounded-lg lt:p-[3px] lt:text-muted-foreground lt:group-data-[orientation=horizontal]/tabs:h-9 lt:group-data-[orientation=vertical]/tabs:h-fit lt:group-data-[orientation=vertical]/tabs:flex-col lt:data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "lt:bg-muted",
        line: "lt:gap-1 lt:bg-transparent",
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
        "lt:relative lt:inline-flex lt:h-[calc(100%-1px)] lt:flex-1 lt:items-center lt:justify-center lt:gap-1.5 lt:rounded-md lt:border lt:border-transparent lt:px-2 lt:py-1 lt:text-sm lt:font-medium lt:whitespace-nowrap lt:text-foreground/60 lt:transition-all lt:group-data-[orientation=vertical]/tabs:w-full lt:group-data-[orientation=vertical]/tabs:justify-start lt:hover:text-foreground lt:focus-visible:border-ring lt:focus-visible:ring-[3px] lt:focus-visible:ring-ring/50 lt:focus-visible:outline-1 lt:focus-visible:outline-ring lt:disabled:pointer-events-none lt:disabled:opacity-50 lt:group-data-[variant=default]/tabs-list:data-[state=active]:bg-surface-1 lt:group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none lt:dark:text-muted-foreground lt:dark:hover:text-foreground lt:[&_svg]:pointer-events-none lt:[&_svg]:shrink-0 lt:[&_svg:not([class*='size-'])]:size-4",
        "lt:group-data-[variant=line]/tabs-list:bg-transparent lt:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent lt:dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent lt:dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "lt:data-[state=active]:bg-background lt:data-[state=active]:text-foreground lt:dark:data-[state=active]:border-input lt:dark:data-[state=active]:bg-input/30 lt:dark:data-[state=active]:text-foreground",
        "lt:after:absolute lt:after:bg-foreground lt:after:opacity-0 lt:after:transition-opacity lt:group-data-[orientation=horizontal]/tabs:after:inset-x-0 lt:group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] lt:group-data-[orientation=horizontal]/tabs:after:h-0.5 lt:group-data-[orientation=vertical]/tabs:after:inset-y-0 lt:group-data-[orientation=vertical]/tabs:after:-right-1 lt:group-data-[orientation=vertical]/tabs:after:w-0.5 lt:group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
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
      className={cn("lt:flex-1 lt:outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
