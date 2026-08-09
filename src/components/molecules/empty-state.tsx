import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: {
  icon: ReactNode
  title: string
  description: string
  action?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "lt:flex lt:w-full lt:max-w-[270px] lt:flex-col lt:items-center lt:gap-2.5 lt:rounded-[14px] lt:border lt:border-border lt:bg-surface-1 lt:px-[22px] lt:py-8 lt:text-center",
        className
      )}
    >
      <div className="lt:flex lt:size-[52px] lt:items-center lt:justify-center lt:rounded-full lt:bg-accent-tint/15 lt:text-primary">
        {icon}
      </div>
      <div className="lt:font-heading lt:text-[15px] lt:font-semibold lt:text-text-1">{title}</div>
      <div className="lt:text-[13px] lt:leading-relaxed lt:text-text-3">{description}</div>
      {action}
    </div>
  )
}

export { EmptyState }
