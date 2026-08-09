import * as React from "react"

import { Card, CardContent } from "@/components/molecules/card"

type KpiTone = "success" | "warning" | "error" | "primary" | "neutral"

const TONE_COLOR: Record<KpiTone, string> = {
  success: "var(--lt-success)",
  warning: "var(--lt-warning)",
  error: "var(--lt-error)",
  primary: "var(--lt-primary)",
  neutral: "var(--lt-text-3)",
}

function KpiSparkline({ points, tone }: { points: string; tone: KpiTone }) {
  return (
    <svg width="100%" height="28" viewBox="0 0 100 28" preserveAspectRatio="none" aria-hidden>
      <polyline points={points} fill="none" stroke={TONE_COLOR[tone]} strokeWidth={2} />
    </svg>
  )
}

function KpiCard({
  label,
  value,
  delta,
  tone = "primary",
  sparklinePoints,
  className,
}: {
  label: string
  value: string
  delta?: string
  tone?: KpiTone
  sparklinePoints?: string
  className?: string
}) {
  return (
    <Card className={className}>
      <CardContent>
        <div className="lt:mb-2 lt:flex lt:items-start lt:justify-between lt:gap-2">
          <span className="lt:text-label-md lt:text-text-3">{label}</span>
          {delta ? (
            <span className="lt:text-label-md" style={{ color: TONE_COLOR[tone] }}>
              {delta}
            </span>
          ) : null}
        </div>
        <div className="lt:mb-2.5 lt:font-metric lt:text-metric-lg lt:text-text-1">{value}</div>
        {sparklinePoints ? <KpiSparkline points={sparklinePoints} tone={tone} /> : null}
      </CardContent>
    </Card>
  )
}

export { KpiCard, KpiSparkline, type KpiTone }
