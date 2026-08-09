"use client"

import { cn } from "@/lib/utils"

function ProgressRing({
  value,
  size = 64,
  strokeWidth = 8,
  className,
  trackClassName,
  indicatorClassName,
  children,
}: {
  value: number
  size?: number
  strokeWidth?: number
  className?: string
  trackClassName?: string
  indicatorClassName?: string
  children?: React.ReactNode
}) {
  const clamped = Math.min(100, Math.max(0, value))
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (clamped / 100) * circumference

  return (
    <div
      className={cn("lt:relative lt:inline-flex lt:items-center lt:justify-center", className)}
      style={{ width: size, height: size }}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <svg width={size} height={size} className="-lt:rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className={cn("lt:stroke-surface-3", trackClassName)}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(
            "lt:stroke-primary lt:transition-[stroke-dashoffset] lt:duration-500 lt:ease-out",
            indicatorClassName
          )}
        />
      </svg>
      {children ? (
        <div className="lt:absolute lt:inset-0 lt:flex lt:items-center lt:justify-center">
          {children}
        </div>
      ) : null}
    </div>
  )
}

export { ProgressRing }
