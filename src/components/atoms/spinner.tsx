import { cn } from "@/lib/utils"

function Spinner({ size = 32, className }: { size?: number; className?: string }) {
  return (
    <div
      role="status"
      aria-label="Cargando"
      className={cn(
        "lt:animate-spin lt:rounded-full lt:border-[3px] lt:border-surface-3 lt:border-t-primary",
        className
      )}
      style={{ width: size, height: size }}
    />
  )
}

export { Spinner }
