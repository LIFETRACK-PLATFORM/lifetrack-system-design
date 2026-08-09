"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/atoms/avatar"
import { cn } from "@/lib/utils"

type AppSidebarItem = {
  label: string
  icon: LucideIcon
  active?: boolean
  onClick?: () => void
}

function AppSidebar({
  brand = "LifeTrack",
  items,
  user,
  className,
}: {
  brand?: string
  items: AppSidebarItem[]
  user?: {
    name: string
    subtitle?: string
    initials?: string
    imageSrc?: string
  }
  className?: string
}) {
  return (
    <aside
      data-slot="app-sidebar"
      className={cn(
        "lt:flex lt:w-[220px] lt:shrink-0 lt:flex-col lt:gap-6 lt:border-r lt:border-border lt:p-5",
        className
      )}
    >
      <div className="lt:font-heading lt:text-base lt:font-bold lt:text-text-1">{brand}</div>
      <nav className="lt:flex lt:flex-col lt:gap-0.5">
        {items.map(({ label, icon: Icon, active, onClick }) => (
          <button
            key={label}
            type="button"
            onClick={onClick}
            className={cn(
              "lt:flex lt:w-full lt:items-center lt:gap-2.5 lt:rounded-[10px] lt:px-2.5 lt:py-2 lt:text-left lt:text-body-md lt:transition-colors",
              active
                ? "lt:bg-primary/12 lt:font-semibold lt:text-primary"
                : "lt:font-normal lt:text-text-3 hover:lt:bg-surface-2/80 hover:lt:text-text-1"
            )}
          >
            <Icon size={17} strokeWidth={1.75} />
            {label}
          </button>
        ))}
      </nav>
      {user ? (
        <div className="lt:mt-auto lt:flex lt:items-center lt:gap-2.5 lt:border-t lt:border-border lt:pt-4">
          <Avatar size="sm">
            {user.imageSrc ? <AvatarImage src={user.imageSrc} alt={user.name} /> : null}
            <AvatarFallback>{user.initials ?? user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="lt:min-w-0">
            <div className="lt:truncate lt:text-body-md lt:text-text-1">{user.name}</div>
            {user.subtitle ? (
              <div className="lt:truncate lt:text-label-md lt:text-text-3">{user.subtitle}</div>
            ) : null}
          </div>
        </div>
      ) : null}
    </aside>
  )
}

export { AppSidebar, type AppSidebarItem }
