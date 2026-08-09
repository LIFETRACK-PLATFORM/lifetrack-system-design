import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import {
  Activity,
  Bell,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  Clock,
  LayoutGrid,
  MapPin,
  Minus,
  Pause,
  Pencil,
  Plus,
  Settings,
  Stethoscope,
  Trash2,
  TrendingUp,
  User,
  Vault,
  X,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/atoms/avatar"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Checkbox } from "@/components/atoms/checkbox"
import { Input } from "@/components/atoms/input"
import { Progress } from "@/components/atoms/progress"
import { SearchInput } from "@/components/atoms/search-input"
import { Textarea } from "@/components/atoms/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/card"
import { FormFieldItem } from "@/components/molecules/form-field"
import { KpiCard, type KpiTone } from "@/components/molecules/kpi-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/molecules/tabs"
import { AppSidebar } from "@/components/organisms/app-sidebar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/organisms/select"

const meta: Meta = {
  title: "Examples/Rehab plan",
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj

const NAV = [
  { label: "Panel", icon: LayoutGrid },
  { label: "Rehabilitación", icon: Activity, active: true },
  { label: "Finanzas", icon: TrendingUp },
  { label: "Bóveda", icon: Vault },
  { label: "Perfil", icon: User },
]

const WEEK_DAYS = [
  { day: 9, label: "Lun", status: "current" as const },
  { day: 10, label: "Mar", status: "completed" as const },
  { day: 11, label: "Mié", status: "partial" as const },
  { day: 12, label: "Jue", status: "pending" as const },
  { day: 13, label: "Vie", status: "pending" as const },
  { day: 14, label: "Sáb", status: "pending" as const },
  { day: 15, label: "Dom", status: "pending" as const },
]

type ExerciseStatus = "pending" | "in_progress" | "completed"

type AccentKey = "primary" | "success" | "warning" | "accent"

const ACCENT: Record<AccentKey, { color: string; bg: string; border: string }> = {
  primary: {
    color: "var(--lt-primary)",
    bg: "color-mix(in srgb, var(--lt-primary) 14%, var(--lt-surface-2))",
    border: "color-mix(in srgb, var(--lt-primary) 35%, var(--lt-border))",
  },
  success: {
    color: "var(--lt-success)",
    bg: "color-mix(in srgb, var(--lt-success) 14%, var(--lt-surface-2))",
    border: "color-mix(in srgb, var(--lt-success) 35%, var(--lt-border))",
  },
  warning: {
    color: "var(--lt-warning)",
    bg: "color-mix(in srgb, var(--lt-warning) 14%, var(--lt-surface-2))",
    border: "color-mix(in srgb, var(--lt-warning) 35%, var(--lt-border))",
  },
  accent: {
    color: "var(--lt-accent-tint)",
    bg: "color-mix(in srgb, var(--lt-accent-tint) 18%, var(--lt-surface-2))",
    border: "color-mix(in srgb, var(--lt-accent-tint) 40%, var(--lt-border))",
  },
}

const STATUS_STYLE: Record<
  ExerciseStatus,
  {
    badge: { variant: "destructive" | "secondary" | "warning" | "success"; label: string }
    border: string
    progress: string
  }
> = {
  pending: {
    badge: { variant: "destructive", label: "Vencido" },
    border: "var(--lt-error)",
    progress: "lt:bg-error/70",
  },
  in_progress: {
    badge: { variant: "warning", label: "En progreso" },
    border: "var(--lt-warning)",
    progress: "lt:bg-primary",
  },
  completed: {
    badge: { variant: "success", label: "Completado" },
    border: "var(--lt-success)",
    progress: "lt:bg-success",
  },
}

function getExerciseStatus(done: number, total: number): ExerciseStatus {
  if (done >= total) return "completed"
  if (done > 0) return "in_progress"
  return "pending"
}

const EXERCISES = [
  {
    id: "1",
    title: "Elevación de piernas laterales",
    meta: "3 series · 30 reps",
    done: 45,
    total: 90,
    overdue: true,
    accent: "primary" as AccentKey,
  },
  {
    id: "2",
    title: "Puente",
    meta: "3 series · 20 reps",
    done: 60,
    total: 60,
    overdue: false,
    accent: "success" as AccentKey,
  },
  {
    id: "3",
    title: "Bicicleta",
    meta: "3 series · 1 min",
    done: 1,
    total: 3,
    overdue: false,
    accent: "warning" as AccentKey,
  },
  {
    id: "4",
    title: "Elevación de piernas laterales",
    meta: "3 series · 30 reps",
    done: 0,
    total: 90,
    overdue: true,
    accent: "accent" as AccentKey,
  },
  {
    id: "5",
    title: "Puente",
    meta: "3 series · 20 reps",
    done: 0,
    total: 60,
    overdue: true,
    accent: "primary" as AccentKey,
  },
  {
    id: "6",
    title: "Bicicleta",
    meta: "3 series · 1 min",
    done: 0,
    total: 3,
    overdue: true,
    accent: "success" as AccentKey,
  },
]

type AppointmentTiming = "upcoming" | "today" | "past"
type AppointmentAttendance = "yes" | "no" | "late" | null
type AppointmentDisplayStatus =
  "upcoming" | "today" | "attended" | "missed" | "pending_confirm" | "rescheduled" | "late"
type AppointmentCategory = "terapia" | "control" | "evaluacion"

type RescheduledFrom = { dateLabel: string; timeLabel: string }

const APPOINTMENT_CATEGORY: Record<
  AppointmentCategory,
  { variant: "default" | "secondary" | "warning"; label: string }
> = {
  terapia: { variant: "default", label: "TERAPIA" },
  control: { variant: "secondary", label: "CONTROL" },
  evaluacion: { variant: "warning", label: "EVALUACIÓN" },
}

const APPOINTMENT_STATUS_STYLE: Record<
  AppointmentDisplayStatus,
  {
    badge: {
      variant: "default" | "destructive" | "secondary" | "warning" | "success"
      label: string
    }
    border: string
  }
> = {
  upcoming: {
    badge: { variant: "secondary", label: "Próxima" },
    border: "var(--lt-primary)",
  },
  today: {
    badge: { variant: "warning", label: "Hoy" },
    border: "var(--lt-warning)",
  },
  attended: {
    badge: { variant: "success", label: "Asistió" },
    border: "var(--lt-success)",
  },
  missed: {
    badge: { variant: "destructive", label: "No asistió" },
    border: "var(--lt-error)",
  },
  pending_confirm: {
    badge: { variant: "secondary", label: "Sin confirmar" },
    border: "var(--lt-border)",
  },
  rescheduled: {
    badge: { variant: "default", label: "Reprogramada" },
    border: "var(--lt-accent-tint)",
  },
  late: {
    badge: { variant: "warning", label: "Llegó tarde" },
    border: "var(--lt-warning)",
  },
}

function getAppointmentDisplayStatus(
  timing: AppointmentTiming,
  attendance: AppointmentAttendance,
  rescheduledFrom?: RescheduledFrom
): AppointmentDisplayStatus {
  if (timing === "upcoming" && rescheduledFrom) return "rescheduled"
  if (attendance === "late") return "late"
  if (attendance === "yes") return "attended"
  if (attendance === "no") return "missed"
  if (timing === "upcoming") return "upcoming"
  if (timing === "today") return "today"
  return "pending_confirm"
}

const APPOINTMENTS = [
  {
    id: "a1",
    title: "Evaluación de lesión",
    category: "terapia" as AppointmentCategory,
    provider: "Fisio Smart",
    location: "San Isidro Camacho",
    dateLabel: "ago 8",
    timeLabel: "02:30 p.m.",
    timing: "today" as AppointmentTiming,
    attendance: null as AppointmentAttendance,
    accent: "accent" as AccentKey,
  },
  {
    id: "a2",
    title: "Control post-operatorio",
    category: "control" as AppointmentCategory,
    provider: "Dr. Mendoza",
    location: "Clínica San Felipe",
    dateLabel: "ago 12",
    timeLabel: "10:00 a.m.",
    timing: "upcoming" as AppointmentTiming,
    attendance: null as AppointmentAttendance,
    accent: "primary" as AccentKey,
  },
  {
    id: "a3",
    title: "Sesión de fisioterapia",
    category: "terapia" as AppointmentCategory,
    provider: "Fisio Smart",
    location: "San Isidro Camacho",
    dateLabel: "ago 5",
    timeLabel: "04:00 p.m.",
    timing: "past" as AppointmentTiming,
    attendance: "yes" as AppointmentAttendance,
    accent: "success" as AccentKey,
  },
  {
    id: "a4",
    title: "Electroestimulación",
    category: "terapia" as AppointmentCategory,
    provider: "Fisio Smart",
    location: "San Isidro Camacho",
    dateLabel: "ago 3",
    timeLabel: "11:30 a.m.",
    timing: "past" as AppointmentTiming,
    attendance: "no" as AppointmentAttendance,
    accent: "warning" as AccentKey,
  },
  {
    id: "a5",
    title: "Magnétoterapia",
    category: "terapia" as AppointmentCategory,
    provider: "Fisio Smart",
    location: "San Isidro Camacho",
    dateLabel: "ago 15",
    timeLabel: "09:00 a.m.",
    timing: "upcoming" as AppointmentTiming,
    attendance: null as AppointmentAttendance,
    accent: "accent" as AccentKey,
    rescheduledFrom: { dateLabel: "ago 10", timeLabel: "09:00 a.m." },
  },
  {
    id: "a6",
    title: "Masaje descontracturante",
    category: "terapia" as AppointmentCategory,
    provider: "Fisio Smart",
    location: "San Isidro Camacho",
    dateLabel: "ago 6",
    timeLabel: "08:00 a.m.",
    timing: "past" as AppointmentTiming,
    attendance: "late" as AppointmentAttendance,
    accent: "primary" as AccentKey,
  },
]

type MeasurementType = "knee_extension" | "weight" | "pain"

type MeasurementRecord = {
  id: string
  type: MeasurementType
  value: number
  dateLabel: string
  chartLabel: string
}

const MEASUREMENT_CONFIG: Record<
  MeasurementType,
  {
    label: string
    unit: string
    tone: KpiTone
    border: string
    min: number
    max: number
    step: number
  }
> = {
  knee_extension: {
    label: "Extensión de rodilla",
    unit: "°",
    tone: "primary",
    border: "var(--lt-primary)",
    min: 0,
    max: 120,
    step: 10,
  },
  weight: {
    label: "Peso",
    unit: "kg",
    tone: "success",
    border: "var(--lt-success)",
    min: 60,
    max: 90,
    step: 5,
  },
  pain: {
    label: "Dolor",
    unit: "/10",
    tone: "error",
    border: "var(--lt-error)",
    min: 0,
    max: 10,
    step: 1,
  },
}

const MEASUREMENTS: MeasurementRecord[] = [
  {
    id: "m1",
    type: "knee_extension",
    value: 100,
    dateLabel: "09 ago. 2026",
    chartLabel: "09-ago",
  },
  {
    id: "m2",
    type: "weight",
    value: 76,
    dateLabel: "09 ago. 2026",
    chartLabel: "09-ago",
  },
  {
    id: "m3",
    type: "pain",
    value: 2,
    dateLabel: "09 ago. 2026",
    chartLabel: "09-ago",
  },
  {
    id: "m4",
    type: "weight",
    value: 70,
    dateLabel: "03 ago. 2026",
    chartLabel: "03-ago",
  },
  {
    id: "m5",
    type: "knee_extension",
    value: 50,
    dateLabel: "05 may. 2026",
    chartLabel: "05-may",
  },
  {
    id: "m6",
    type: "pain",
    value: 5,
    dateLabel: "03 ago. 2026",
    chartLabel: "03-ago",
  },
  {
    id: "m7",
    type: "knee_extension",
    value: 75,
    dateLabel: "15 jul. 2026",
    chartLabel: "15-jul",
  },
  {
    id: "m8",
    type: "knee_extension",
    value: 85,
    dateLabel: "28 jul. 2026",
    chartLabel: "28-jul",
  },
]

const TONE_COLOR: Record<KpiTone, string> = {
  success: "var(--lt-success)",
  warning: "var(--lt-warning)",
  error: "var(--lt-error)",
  primary: "var(--lt-primary)",
  neutral: "var(--lt-text-3)",
}

function getMeasurementsByType(type: MeasurementType) {
  return MEASUREMENTS.filter((item) => item.type === type).sort((a, b) =>
    b.dateLabel.localeCompare(a.dateLabel, "es")
  )
}

function formatMeasurementValue(type: MeasurementType, value: number) {
  const config = MEASUREMENT_CONFIG[type]
  return type === "pain" ? `${value}${config.unit}` : `${value}${config.unit}`
}

function buildLineChartGeometry(
  points: MeasurementRecord[],
  min: number,
  max: number,
  width = 420,
  height = 180
) {
  const pad = { top: 18, right: 20, bottom: 32, left: 42 }
  const innerW = width - pad.left - pad.right
  const innerH = height - pad.top - pad.bottom
  const range = Math.max(max - min, 1)

  const chronological = [...points].reverse()
  const coords = chronological.map((point, index) => ({
    ...point,
    x:
      pad.left +
      (chronological.length === 1 ? innerW / 2 : (index / (chronological.length - 1)) * innerW),
    y: pad.top + innerH - ((point.value - min) / range) * innerH,
  }))

  const linePath = coords
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ")
  const areaPath =
    coords.length > 0
      ? `${linePath} L ${coords[coords.length - 1].x} ${pad.top + innerH} L ${coords[0].x} ${pad.top + innerH} Z`
      : ""

  const yTicks = Array.from({ length: 5 }, (_, index) => {
    const value = min + (range / 4) * index
    return {
      value,
      y: pad.top + innerH - ((value - min) / range) * innerH,
    }
  })

  return { coords, linePath, areaPath, yTicks, pad, width, height, innerH }
}

function MeasurementBarKpi({
  label,
  values,
  unit,
  tone,
}: {
  label: string
  values: number[]
  unit: string
  tone: KpiTone
}) {
  const latest = values[values.length - 1] ?? 0
  const max = Math.max(...values, 1)

  return (
    <Card
      style={{
        borderTop: `3px solid ${TONE_COLOR[tone]}`,
        background: `color-mix(in srgb, ${TONE_COLOR[tone]} 4%, var(--lt-surface-1))`,
      }}
    >
      <CardContent style={{ padding: 16 }}>
        <p className="lt:text-label-md lt:text-text-3">{label}</p>
        <p className="lt:mt-2 lt:font-metric lt:text-metric-lg" style={{ color: TONE_COLOR[tone] }}>
          {latest}
          {unit}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 8,
            height: 72,
            marginTop: 16,
          }}
        >
          {values.map((value, index) => {
            const heightPct = Math.max(12, Math.round((value / max) * 100))
            const isLatest = index === values.length - 1

            return (
              <div
                key={`${value}-${index}`}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: `${heightPct}%`,
                    minHeight: 10,
                    borderRadius: 8,
                    background: isLatest
                      ? TONE_COLOR[tone]
                      : `color-mix(in srgb, ${TONE_COLOR[tone]} 28%, var(--lt-surface-3))`,
                    border: `1px solid color-mix(in srgb, ${TONE_COLOR[tone]} 40%, var(--lt-border))`,
                  }}
                />
                <span className="lt:text-[10px] lt:text-text-3">
                  {value}
                  {unit}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

function MeasurementLineChart({
  points,
  type,
}: {
  points: MeasurementRecord[]
  type: MeasurementType
}) {
  const config = MEASUREMENT_CONFIG[type]
  const { coords, linePath, areaPath, yTicks, pad, width, height, innerH } = buildLineChartGeometry(
    points,
    config.min,
    config.max
  )

  if (points.length === 0) {
    return (
      <div
        style={{
          padding: 32,
          borderRadius: 12,
          border: "1px dashed var(--lt-border)",
          textAlign: "center",
        }}
      >
        <p className="lt:text-body-md lt:text-text-3">Sin datos para esta medición.</p>
      </div>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height={height}
      role="img"
      aria-label={`Gráfico de ${config.label}`}
    >
      {yTicks.map((tick) => (
        <g key={tick.value}>
          <line
            x1={pad.left}
            x2={width - pad.right}
            y1={tick.y}
            y2={tick.y}
            stroke="var(--lt-border)"
            strokeDasharray="4 4"
          />
          <text
            x={pad.left - 8}
            y={tick.y + 4}
            textAnchor="end"
            fontSize="10"
            fill="var(--lt-text-3)"
          >
            {Math.round(tick.value)}
            {type === "pain" ? "" : config.unit}
          </text>
        </g>
      ))}
      {areaPath ? (
        <path
          d={areaPath}
          fill={`color-mix(in srgb, ${TONE_COLOR[config.tone]} 12%, transparent)`}
        />
      ) : null}
      <path
        d={linePath}
        fill="none"
        stroke={TONE_COLOR[config.tone]}
        strokeWidth={2.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {coords.map((point) => (
        <g key={point.id}>
          <circle cx={point.x} cy={point.y} r={5} fill="var(--lt-surface-1)" />
          <circle cx={point.x} cy={point.y} r={3.5} fill={TONE_COLOR[config.tone]} />
          <text
            x={point.x}
            y={pad.top + innerH + 18}
            textAnchor="middle"
            fontSize="10"
            fill="var(--lt-text-3)"
          >
            {point.chartLabel}
          </text>
        </g>
      ))}
    </svg>
  )
}

function MeasurementHistoryGroup({ type }: { type: MeasurementType }) {
  const config = MEASUREMENT_CONFIG[type]
  const items = getMeasurementsByType(type)

  return (
    <Card
      className="lt:overflow-hidden"
      style={{
        borderLeft: `3px solid ${config.border}`,
        background: `color-mix(in srgb, ${config.border} 3%, var(--lt-surface-1))`,
      }}
    >
      <CardHeader style={{ paddingBottom: 8 }}>
        <div
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}
        >
          <CardTitle className="lt:text-body-md">{config.label}</CardTitle>
          <Badge variant="secondary">{items.length} registros</Badge>
        </div>
      </CardHeader>
      <CardContent style={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 0 }}>
        {items.length === 0 ? (
          <p className="lt:text-label-md lt:text-text-3">Sin registros todavía.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "10px 12px",
                borderRadius: 10,
                background: "var(--lt-surface-1)",
                border: "1px solid var(--lt-border)",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <p className="lt:font-mono lt:text-sm lt:font-semibold lt:text-text-1">
                  {formatMeasurementValue(type, item.value)}
                </p>
                <p className="lt:mt-0.5 lt:text-label-md lt:text-text-3">{item.dateLabel}</p>
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                <Button variant="ghost" size="icon-sm" aria-label={`Editar ${config.label}`}>
                  <Pencil />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label={`Eliminar ${config.label}`}>
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}

function ExerciseThumb({ accent, status }: { accent: AccentKey; status: ExerciseStatus }) {
  const palette = ACCENT[accent]
  const isDone = status === "completed"

  return (
    <div
      style={{
        width: 72,
        height: 72,
        flexShrink: 0,
        borderRadius: 10,
        background: `linear-gradient(135deg, ${palette.bg}, var(--lt-surface-3))`,
        border: `1px solid ${palette.border}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: isDone ? 0.72 : 1,
      }}
    >
      <Activity size={28} strokeWidth={1.5} color={palette.color} />
    </div>
  )
}

function DayStrip({
  selectedDay,
  onSelect,
}: Readonly<{
  selectedDay: number
  onSelect: (day: number) => void
}>) {
  const dayStatusColor = {
    completed: "var(--lt-success)",
    partial: "var(--lt-warning)",
    pending: "var(--lt-border)",
    current: "var(--lt-primary)",
  }

  return (
    <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
      {WEEK_DAYS.map(({ day, label, status }) => {
        const selected = day === selectedDay
        const dotColor = dayStatusColor[status]

        return (
          <button
            key={day}
            type="button"
            onClick={() => onSelect(day)}
            style={{
              minWidth: 52,
              padding: "10px 8px",
              borderRadius: 12,
              border: selected
                ? `1px solid ${dayStatusColor.current}`
                : status === "completed"
                  ? "1px solid color-mix(in srgb, var(--lt-success) 40%, var(--lt-border))"
                  : status === "partial"
                    ? "1px solid color-mix(in srgb, var(--lt-warning) 40%, var(--lt-border))"
                    : "1px solid var(--lt-border)",
              background: selected
                ? "color-mix(in srgb, var(--lt-primary) 10%, var(--lt-surface-1))"
                : status === "completed"
                  ? "color-mix(in srgb, var(--lt-success) 6%, var(--lt-surface-1))"
                  : status === "partial"
                    ? "color-mix(in srgb, var(--lt-warning) 6%, var(--lt-surface-1))"
                    : "var(--lt-surface-1)",
              boxShadow: selected
                ? "0 0 0 3px color-mix(in srgb, var(--lt-primary) 12%, transparent)"
                : "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <span
              className="lt:text-label-md"
              style={{ color: selected ? "var(--lt-primary)" : "var(--lt-text-3)" }}
            >
              {label}
            </span>
            <span
              className="lt:font-metric lt:text-metric-sm"
              style={{ color: selected ? "var(--lt-primary)" : "var(--lt-text-1)" }}
            >
              {day}
            </span>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: dotColor,
              }}
            />
          </button>
        )
      })}
    </div>
  )
}

function ExerciseCard({
  id,
  title,
  meta,
  done,
  total,
  overdue,
  accent,
  onIncrement,
  onDecrement,
  onToggleComplete,
}: (typeof EXERCISES)[number] & {
  onIncrement: () => void
  onDecrement: () => void
  onToggleComplete: () => void
}) {
  const checkboxId = `exercise-done-${id}`
  const status = getExerciseStatus(done, total)
  const style = STATUS_STYLE[status]
  const badge =
    status === "pending" && !overdue
      ? { variant: "secondary" as const, label: "Pendiente" }
      : status === "pending" && overdue
        ? { variant: "destructive" as const, label: "Vencido" }
        : style.badge

  const progress = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <Card
      className="lt:overflow-hidden"
      style={{
        borderLeft: `3px solid ${style.border}`,
        background:
          status === "completed"
            ? "color-mix(in srgb, var(--lt-success) 4%, var(--lt-surface-1))"
            : status === "in_progress"
              ? "color-mix(in srgb, var(--lt-warning) 3%, var(--lt-surface-1))"
              : undefined,
      }}
    >
      <CardContent style={{ padding: 16 }}>
        <div style={{ display: "flex", gap: 14 }}>
          <ExerciseThumb accent={accent} status={status} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <Badge variant={badge.variant} showDot className="lt:mb-2">
                  {badge.label}
                </Badge>
                <h3
                  className="lt:text-body-md lt:font-semibold"
                  style={{
                    color: status === "completed" ? "var(--lt-success)" : "var(--lt-text-1)",
                  }}
                >
                  {title}
                </h3>
                <p className="lt:mt-1 lt:text-label-md lt:text-text-3">{meta}</p>
                <p
                  className="lt:mt-1 lt:font-mono lt:text-xs"
                  style={{
                    color:
                      status === "completed"
                        ? "var(--lt-success)"
                        : status === "in_progress"
                          ? "var(--lt-warning)"
                          : "var(--lt-text-3)",
                  }}
                >
                  {done}/{total}
                </p>
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
                <Button variant="ghost" size="icon-sm" aria-label="Editar">
                  <Pencil />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="Eliminar">
                  <Trash2 />
                </Button>
              </div>
            </div>

            <label
              htmlFor={checkboxId}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginTop: 12,
                padding: "8px 10px",
                borderRadius: 8,
                width: "fit-content",
                cursor: "pointer",
                background:
                  status === "completed"
                    ? "color-mix(in srgb, var(--lt-success) 10%, var(--lt-surface-2))"
                    : "var(--lt-surface-2)",
                border: `1px solid ${
                  status === "completed"
                    ? "color-mix(in srgb, var(--lt-success) 35%, var(--lt-border))"
                    : "var(--lt-border)"
                }`,
              }}
            >
              <Checkbox
                id={checkboxId}
                variant="success"
                checked={status === "completed"}
                onCheckedChange={onToggleComplete}
              />
              <span
                className="lt:text-label-md lt:font-medium"
                style={{
                  color: status === "completed" ? "var(--lt-success)" : "var(--lt-text-3)",
                }}
              >
                {status === "completed" ? "Completado" : "Marcar como completado"}
              </span>
            </label>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
              <Button variant="outline" size="icon-sm" onClick={onDecrement} aria-label="Restar">
                <Minus />
              </Button>
              <div style={{ flex: 1 }}>
                <Progress
                  value={progress}
                  className={
                    status === "completed"
                      ? "lt:bg-success/20"
                      : status === "in_progress"
                        ? "lt:bg-primary/20"
                        : "lt:bg-error/15"
                  }
                  indicatorClassName={style.progress}
                />
              </div>
              <Button
                size="icon-sm"
                onClick={onIncrement}
                aria-label="Sumar"
                variant={status === "completed" ? "secondary" : "default"}
              >
                {status === "completed" ? <Check /> : <Plus />}
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AppointmentDateThumb({
  dateLabel,
  timeLabel,
  accent,
  muted,
}: {
  dateLabel: string
  timeLabel: string
  accent: AccentKey
  muted?: boolean
}) {
  const palette = ACCENT[accent]

  return (
    <div
      style={{
        width: 72,
        height: 72,
        flexShrink: 0,
        borderRadius: 10,
        background: `linear-gradient(135deg, ${palette.bg}, var(--lt-surface-3))`,
        border: `1px solid ${palette.border}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        opacity: muted ? 0.72 : 1,
      }}
    >
      <CalendarDays size={16} strokeWidth={1.75} color={palette.color} />
      <span
        className="lt:text-xs lt:font-semibold lt:uppercase"
        style={{ color: palette.color, lineHeight: 1.2 }}
      >
        {dateLabel}
      </span>
      <span className="lt:text-[10px] lt:leading-tight lt:text-text-3">{timeLabel}</span>
    </div>
  )
}

function AppointmentCard({
  title,
  category,
  provider,
  location,
  dateLabel,
  timeLabel,
  timing,
  attendance,
  accent,
  rescheduledFrom,
  onAttendance,
}: (typeof APPOINTMENTS)[number] & {
  onAttendance: (value: AppointmentAttendance) => void
}) {
  const displayStatus = getAppointmentDisplayStatus(timing, attendance, rescheduledFrom)
  const style = APPOINTMENT_STATUS_STYLE[displayStatus]
  const categoryBadge = APPOINTMENT_CATEGORY[category]
  const showAttendance = timing === "today" || timing === "past"
  const isResolved = attendance === "yes" || attendance === "no" || attendance === "late"

  const cardBackground =
    displayStatus === "attended"
      ? "color-mix(in srgb, var(--lt-success) 4%, var(--lt-surface-1))"
      : displayStatus === "missed"
        ? "color-mix(in srgb, var(--lt-error) 3%, var(--lt-surface-1))"
        : displayStatus === "late"
          ? "color-mix(in srgb, var(--lt-warning) 4%, var(--lt-surface-1))"
          : displayStatus === "today"
            ? "color-mix(in srgb, var(--lt-warning) 3%, var(--lt-surface-1))"
            : displayStatus === "upcoming"
              ? "color-mix(in srgb, var(--lt-primary) 3%, var(--lt-surface-1))"
              : displayStatus === "rescheduled"
                ? "color-mix(in srgb, var(--lt-accent-tint) 5%, var(--lt-surface-1))"
                : undefined

  const titleColor =
    displayStatus === "attended"
      ? "var(--lt-success)"
      : displayStatus === "late"
        ? "var(--lt-warning)"
        : undefined

  const attendanceBackground =
    attendance === "yes"
      ? "color-mix(in srgb, var(--lt-success) 10%, var(--lt-surface-2))"
      : attendance === "late"
        ? "color-mix(in srgb, var(--lt-warning) 10%, var(--lt-surface-2))"
        : attendance === "no"
          ? "color-mix(in srgb, var(--lt-error) 8%, var(--lt-surface-2))"
          : "var(--lt-surface-2)"

  const attendanceBorder =
    attendance === "yes"
      ? "color-mix(in srgb, var(--lt-success) 35%, var(--lt-border))"
      : attendance === "late"
        ? "color-mix(in srgb, var(--lt-warning) 35%, var(--lt-border))"
        : attendance === "no"
          ? "color-mix(in srgb, var(--lt-error) 30%, var(--lt-border))"
          : "var(--lt-border)"

  const attendanceLabel =
    attendance === "yes"
      ? "Asistencia confirmada"
      : attendance === "late"
        ? "Llegada tarde registrada"
        : attendance === "no"
          ? "Ausencia registrada"
          : "¿Asististe?"

  return (
    <Card
      className="lt:overflow-hidden"
      style={{
        borderLeft: `3px solid ${style.border}`,
        background: cardBackground,
      }}
    >
      <CardContent style={{ padding: 16 }}>
        <div style={{ display: "flex", gap: 14 }}>
          <AppointmentDateThumb
            dateLabel={dateLabel}
            timeLabel={timeLabel}
            accent={accent}
            muted={
              displayStatus === "attended" || displayStatus === "missed" || displayStatus === "late"
            }
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 8,
              }}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <Badge variant={style.badge.variant} showDot className="lt:mb-2">
                  {style.badge.label}
                </Badge>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    className="lt:text-body-md lt:font-semibold lt:text-text-1"
                    style={{ color: titleColor }}
                  >
                    {title}
                  </h3>
                  <Badge variant={categoryBadge.variant} className="lt:uppercase lt:tracking-wide">
                    {categoryBadge.label}
                  </Badge>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <Stethoscope size={14} color="var(--lt-text-3)" />
                  <span className="lt:text-label-md lt:text-text-3">{provider}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 4,
                    flexWrap: "wrap",
                  }}
                >
                  <MapPin size={14} color="var(--lt-text-3)" />
                  <span className="lt:text-label-md lt:text-text-3">{location}</span>
                </div>
                {rescheduledFrom ? (
                  <p
                    className="lt:mt-2 lt:text-label-md"
                    style={{ color: "var(--lt-accent-tint)" }}
                  >
                    Antes: {rescheduledFrom.dateLabel} · {rescheduledFrom.timeLabel}
                  </p>
                ) : null}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "flex-start" }}>
                <Button variant="ghost" size="icon-sm" aria-label="Editar cita">
                  <Pencil />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="Eliminar cita">
                  <Trash2 />
                </Button>
              </div>
            </div>

            {showAttendance ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 14,
                  padding: "8px 10px",
                  borderRadius: 8,
                  width: "fit-content",
                  flexWrap: "wrap",
                  background: isResolved ? attendanceBackground : "var(--lt-surface-2)",
                  border: `1px solid ${isResolved ? attendanceBorder : "var(--lt-border)"}`,
                }}
              >
                <span className="lt:text-label-md lt:font-medium lt:text-text-3">
                  {attendanceLabel}
                </span>
                <div style={{ display: "flex", gap: 6 }}>
                  <Button
                    variant={attendance === "yes" ? "default" : "outline"}
                    size="icon-sm"
                    aria-label="Confirmar asistencia"
                    aria-pressed={attendance === "yes"}
                    onClick={() => onAttendance(attendance === "yes" ? null : "yes")}
                    style={
                      attendance === "yes"
                        ? {
                            background: "var(--lt-success)",
                            borderColor: "var(--lt-success)",
                            color: "white",
                          }
                        : undefined
                    }
                  >
                    <Check />
                  </Button>
                  <Button
                    variant={attendance === "late" ? "default" : "outline"}
                    size="icon-sm"
                    aria-label="Registrar llegada tarde"
                    aria-pressed={attendance === "late"}
                    onClick={() => onAttendance(attendance === "late" ? null : "late")}
                    style={
                      attendance === "late"
                        ? {
                            background: "var(--lt-warning)",
                            borderColor: "var(--lt-warning)",
                            color: "white",
                          }
                        : undefined
                    }
                  >
                    <Clock />
                  </Button>
                  <Button
                    variant={attendance === "no" ? "default" : "outline"}
                    size="icon-sm"
                    aria-label="Registrar ausencia"
                    aria-pressed={attendance === "no"}
                    onClick={() => onAttendance(attendance === "no" ? null : "no")}
                    style={
                      attendance === "no"
                        ? {
                            background: "var(--lt-error)",
                            borderColor: "var(--lt-error)",
                            color: "white",
                          }
                        : undefined
                    }
                  >
                    <X />
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function RehabPlanDemo() {
  const [selectedDay, setSelectedDay] = React.useState(9)
  const [exercises, setExercises] = React.useState(EXERCISES)
  const [appointments, setAppointments] = React.useState(APPOINTMENTS)
  const [painLevel, setPainLevel] = React.useState("3")
  const [chartMetric, setChartMetric] = React.useState<MeasurementType>("knee_extension")

  const kneeExtensionValues = getMeasurementsByType("knee_extension")
    .map((item) => item.value)
    .reverse()
  const lastPainRecord = getMeasurementsByType("pain")[0]
  const chartPoints = getMeasurementsByType(chartMetric).slice().reverse()
  const chartConfig = MEASUREMENT_CONFIG[chartMetric]
  const chartLatest = chartPoints[chartPoints.length - 1]?.value ?? 0
  const chartFirst = chartPoints[0]?.value ?? 0
  const chartDelta = chartLatest - chartFirst
  const painSparkline = getMeasurementsByType("pain")
    .slice()
    .reverse()
    .map((item, index, list) => {
      const x = list.length === 1 ? 50 : (index / (list.length - 1)) * 100
      const y = 24 - (item.value / 10) * 20
      return `${x},${y}`
    })
    .join(" ")

  const completedExercises = exercises.filter((ex) => ex.done >= ex.total).length
  const startedExercises = exercises.filter((ex) => ex.done > 0).length
  const totalReps = exercises.reduce((sum, ex) => sum + ex.total, 0)
  const doneReps = exercises.reduce((sum, ex) => sum + ex.done, 0)
  const weeklyCompliance = Math.round((doneReps / totalReps) * 100)
  const attendedAppointments = appointments.filter((item) => item.attendance === "yes").length
  const lateAppointments = appointments.filter((item) => item.attendance === "late").length
  const rescheduledAppointments = appointments.filter((item) => item.rescheduledFrom).length
  const pendingTodayAppointments = appointments.filter(
    (item) => item.timing === "today" && item.attendance === null
  ).length
  const nextAppointment =
    appointments.find(
      (item) =>
        (item.timing === "today" || item.timing === "upcoming") &&
        getAppointmentDisplayStatus(item.timing, item.attendance, item.rescheduledFrom) !==
          "rescheduled"
    ) ??
    appointments.find((item) => item.timing === "today" || item.timing === "upcoming") ??
    appointments[0]
  const nextAppointmentCategory = APPOINTMENT_CATEGORY[nextAppointment.category]
  const painValue = Number(painLevel) || 0
  const painTone = painValue >= 7 ? "error" : painValue >= 4 ? "warning" : "success"
  const painColor = {
    error: "var(--lt-error)",
    warning: "var(--lt-warning)",
    success: "var(--lt-success)",
  }[painTone]

  function updateExercise(id: string, delta: number) {
    setExercises((current) =>
      current.map((ex) =>
        ex.id === id ? { ...ex, done: Math.max(0, Math.min(ex.total, ex.done + delta)) } : ex
      )
    )
  }

  function toggleExerciseComplete(id: string) {
    setExercises((current) =>
      current.map((ex) => (ex.id === id ? { ...ex, done: ex.done >= ex.total ? 0 : ex.total } : ex))
    )
  }

  function setAppointmentAttendance(id: string, attendance: AppointmentAttendance) {
    setAppointments((current) =>
      current.map((item) => (item.id === id ? { ...item, attendance } : item))
    )
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--lt-background)" }}>
      <AppSidebar
        brand="LifeTrack OS"
        items={NAV}
        user={{ name: "Ricardo Solis", subtitle: "Plan activo", initials: "RS" }}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "16px 24px",
            borderBottom: "1px solid var(--lt-border)",
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--lt-primary) 5%, var(--lt-surface-1)), var(--lt-surface-1) 40%)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
            <div className="lt:font-heading lt:text-base lt:font-bold lt:text-text-1">
              LifeTrack OS
            </div>
            <div style={{ width: 1, height: 24, background: "var(--lt-border)" }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <h1 className="lt:font-heading lt:text-body-lg lt:font-semibold lt:text-text-1">
                  Rodilla Recovery
                </h1>
                <Badge variant="success" showDot>
                  Activo
                </Badge>
              </div>
              <p className="lt:mt-0.5 lt:text-label-md lt:text-text-3">30/7/2026</p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Button variant="outline" size="sm">
              <CheckCircle2 />
              Marcar completado
            </Button>
            <Button variant="secondary" size="sm">
              <Pause />
              Pausar plan
            </Button>
            <SearchInput placeholder="Buscar..." className="lt:w-[200px]" />
            <Button variant="ghost" size="icon" aria-label="Notificaciones">
              <Bell />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Configuración">
              <Settings />
            </Button>
            <Avatar size="sm">
              <AvatarFallback>RS</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
          {/* Main */}
          <main style={{ flex: 1, padding: 24, overflow: "auto" }}>
            <Tabs defaultValue="ejercicios">
              <TabsList>
                <TabsTrigger value="ejercicios">Ejercicios</TabsTrigger>
                <TabsTrigger value="citas">Citas</TabsTrigger>
                <TabsTrigger value="mediciones">Mediciones</TabsTrigger>
                <TabsTrigger value="fotos">Fotos</TabsTrigger>
              </TabsList>

              <TabsContent value="ejercicios" className="lt:mt-6">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2 className="lt:font-heading lt:text-heading-4 lt:font-semibold lt:text-text-1">
                      Protocolo de hoy
                    </h2>
                    <p className="lt:mt-1 lt:text-body-md lt:text-text-3">
                      Día {selectedDay} · {completedExercises}/{exercises.length} completados ·{" "}
                      {startedExercises - completedExercises} en progreso
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 6, marginRight: 4 }}>
                      <Badge variant="success" showDot>
                        Completado
                      </Badge>
                      <Badge variant="warning" showDot>
                        En progreso
                      </Badge>
                      <Badge variant="destructive" showDot>
                        Vencido
                      </Badge>
                    </div>
                    <Button variant="ghost">Guardar</Button>
                    <Button variant="outline">
                      <Plus />
                      Agregar ejercicio
                    </Button>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <DayStrip selectedDay={selectedDay} onSelect={setSelectedDay} />
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  {exercises.map((exercise) => (
                    <ExerciseCard
                      key={exercise.id}
                      {...exercise}
                      onIncrement={() => updateExercise(exercise.id, 1)}
                      onDecrement={() => updateExercise(exercise.id, -1)}
                      onToggleComplete={() => toggleExerciseComplete(exercise.id)}
                    />
                  ))}
                </div>

                <Card
                  style={{
                    borderTop: `3px solid ${painColor}`,
                    background: `color-mix(in srgb, ${painColor} 4%, var(--lt-surface-1))`,
                  }}
                >
                  <CardHeader>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                      }}
                    >
                      <CardTitle>Registrar dolor de hoy (0–10)</CardTitle>
                      <Badge
                        variant={
                          painTone === "error"
                            ? "destructive"
                            : painTone === "warning"
                              ? "warning"
                              : "success"
                        }
                        showDot
                      >
                        {painValue >= 7
                          ? "Dolor alto"
                          : painValue >= 4
                            ? "Dolor moderado"
                            : "Dolor leve"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div
                      style={{
                        display: "grid",
                        gap: 16,
                        gridTemplateColumns: "minmax(0, 120px) 1fr auto",
                        alignItems: "end",
                      }}
                    >
                      <FormFieldItem label="Nivel">
                        <Input
                          type="number"
                          min={0}
                          max={10}
                          value={painLevel}
                          onChange={(e) => setPainLevel(e.target.value)}
                        />
                      </FormFieldItem>
                      <FormFieldItem label="Notas (opcional)">
                        <Textarea placeholder="¿Cómo te sentís hoy?" rows={2} />
                      </FormFieldItem>
                      <Button style={{ height: 40 }}>Registrar</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="citas" className="lt:mt-6">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2 className="lt:font-heading lt:text-heading-4 lt:font-semibold lt:text-text-1">
                      Citas del plan
                    </h2>
                    <p className="lt:mt-1 lt:text-body-md lt:text-text-3">
                      {attendedAppointments} asistidas · {lateAppointments} tarde ·{" "}
                      {rescheduledAppointments} reprogramadas · {pendingTodayAppointments}{" "}
                      pendientes hoy
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                    <div style={{ display: "flex", gap: 6, marginRight: 4, flexWrap: "wrap" }}>
                      <Badge variant="warning" showDot>
                        Hoy
                      </Badge>
                      <Badge variant="secondary" showDot>
                        Próxima
                      </Badge>
                      <Badge variant="default" showDot>
                        Reprogramada
                      </Badge>
                      <Badge variant="success" showDot>
                        Asistió
                      </Badge>
                      <Badge variant="warning" showDot>
                        Llegó tarde
                      </Badge>
                      <Badge variant="destructive" showDot>
                        No asistió
                      </Badge>
                    </div>
                    <Button variant="outline">
                      <Plus />
                      Agregar cita
                    </Button>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {appointments.map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      {...appointment}
                      onAttendance={(attendance) =>
                        setAppointmentAttendance(appointment.id, attendance)
                      }
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="mediciones" className="lt:mt-6">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                    marginBottom: 20,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <h2 className="lt:font-heading lt:text-heading-4 lt:font-semibold lt:text-text-1">
                      Mediciones del plan
                    </h2>
                    <p className="lt:mt-1 lt:text-body-md lt:text-text-3">
                      Seguimiento separado por tipo · extensión, peso y dolor
                    </p>
                  </div>
                  <Button variant="outline">
                    <Plus />
                    Registrar medición
                  </Button>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  <MeasurementBarKpi
                    label="Rango de extensión de rodilla"
                    values={kneeExtensionValues}
                    unit="°"
                    tone="primary"
                  />
                  <KpiCard
                    label="Último dolor registrado"
                    value={
                      lastPainRecord ? formatMeasurementValue("pain", lastPainRecord.value) : "—"
                    }
                    tone="error"
                    delta={lastPainRecord ? lastPainRecord.dateLabel : undefined}
                    sparklinePoints={painSparkline || undefined}
                  />
                  <KpiCard
                    label="Peso actual"
                    value={
                      getMeasurementsByType("weight")[0]
                        ? formatMeasurementValue("weight", getMeasurementsByType("weight")[0].value)
                        : "—"
                    }
                    tone="success"
                    delta={
                      chartMetric === "weight" && chartDelta !== 0
                        ? `${chartDelta > 0 ? "+" : ""}${chartDelta} kg`
                        : undefined
                    }
                  />
                </div>

                <Card
                  style={{
                    marginBottom: 24,
                    borderTop: `3px solid ${chartConfig.border}`,
                    background: `color-mix(in srgb, ${chartConfig.border} 4%, var(--lt-surface-1))`,
                  }}
                >
                  <CardHeader>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <CardTitle className="lt:text-body-md">Evolución de mediciones</CardTitle>
                      <Select
                        value={chartMetric}
                        onValueChange={(value) => setChartMetric(value as MeasurementType)}
                      >
                        <SelectTrigger size="sm" className="lt:w-[220px]">
                          <SelectValue placeholder="Tipo de medición" />
                        </SelectTrigger>
                        <SelectContent>
                          {(Object.keys(MEASUREMENT_CONFIG) as MeasurementType[]).map((type) => (
                            <SelectItem key={type} value={type}>
                              {MEASUREMENT_CONFIG[type].label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <MeasurementLineChart points={chartPoints} type={chartMetric} />
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                        gap: 12,
                        marginTop: 16,
                      }}
                    >
                      <div
                        style={{
                          padding: "10px 12px",
                          borderRadius: 10,
                          background: "var(--lt-surface-2)",
                          border: "1px solid var(--lt-border)",
                        }}
                      >
                        <p className="lt:text-label-md lt:text-text-3">Actual</p>
                        <p className="lt:mt-1 lt:font-mono lt:text-sm lt:font-semibold lt:text-text-1">
                          {formatMeasurementValue(chartMetric, chartLatest)}
                        </p>
                      </div>
                      <div
                        style={{
                          padding: "10px 12px",
                          borderRadius: 10,
                          background: "var(--lt-surface-2)",
                          border: "1px solid var(--lt-border)",
                        }}
                      >
                        <p className="lt:text-label-md lt:text-text-3">Inicio</p>
                        <p className="lt:mt-1 lt:font-mono lt:text-sm lt:font-semibold lt:text-text-1">
                          {formatMeasurementValue(chartMetric, chartFirst)}
                        </p>
                      </div>
                      <div
                        style={{
                          padding: "10px 12px",
                          borderRadius: 10,
                          background: "var(--lt-surface-2)",
                          border: "1px solid var(--lt-border)",
                        }}
                      >
                        <p className="lt:text-label-md lt:text-text-3">Cambio</p>
                        <p
                          className="lt:mt-1 lt:font-mono lt:text-sm lt:font-semibold"
                          style={{
                            color:
                              chartDelta > 0 && chartMetric === "pain"
                                ? "var(--lt-error)"
                                : chartDelta > 0 && chartMetric === "knee_extension"
                                  ? "var(--lt-success)"
                                  : chartDelta < 0 && chartMetric === "pain"
                                    ? "var(--lt-success)"
                                    : "var(--lt-text-1)",
                          }}
                        >
                          {chartDelta > 0 ? "+" : ""}
                          {chartDelta}
                          {chartMetric === "pain" ? "/10" : chartConfig.unit}
                        </p>
                      </div>
                      <div
                        style={{
                          padding: "10px 12px",
                          borderRadius: 10,
                          background: "var(--lt-surface-2)",
                          border: "1px solid var(--lt-border)",
                        }}
                      >
                        <p className="lt:text-label-md lt:text-text-3">Registros</p>
                        <p className="lt:mt-1 lt:font-mono lt:text-sm lt:font-semibold lt:text-text-1">
                          {chartPoints.length}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div style={{ marginBottom: 16 }}>
                  <h3 className="lt:font-heading lt:text-body-lg lt:font-semibold lt:text-text-1">
                    Historial por tipo
                  </h3>
                  <p className="lt:mt-1 lt:text-label-md lt:text-text-3">
                    Cada medición en su propia sección — sin mezclar extensión, peso y dolor.
                  </p>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 16,
                    marginBottom: 24,
                  }}
                >
                  <MeasurementHistoryGroup type="knee_extension" />
                  <MeasurementHistoryGroup type="weight" />
                  <MeasurementHistoryGroup type="pain" />
                </div>

                <Card
                  style={{
                    borderTop: `3px solid ${painColor}`,
                    background: `color-mix(in srgb, ${painColor} 4%, var(--lt-surface-1))`,
                  }}
                >
                  <CardHeader>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 12,
                        flexWrap: "wrap",
                      }}
                    >
                      <CardTitle>Registrar dolor de hoy (0–10)</CardTitle>
                      <Badge
                        variant={
                          painTone === "error"
                            ? "destructive"
                            : painTone === "warning"
                              ? "warning"
                              : "success"
                        }
                        showDot
                      >
                        {painValue >= 7
                          ? "Dolor alto"
                          : painValue >= 4
                            ? "Dolor moderado"
                            : "Dolor leve"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div
                      style={{
                        display: "grid",
                        gap: 16,
                        gridTemplateColumns: "minmax(0, 120px) 1fr auto",
                        alignItems: "end",
                      }}
                    >
                      <FormFieldItem label="Nivel">
                        <Input
                          type="number"
                          min={0}
                          max={10}
                          value={painLevel}
                          onChange={(e) => setPainLevel(e.target.value)}
                        />
                      </FormFieldItem>
                      <FormFieldItem label="Nota (opcional)">
                        <Textarea placeholder="¿Cómo te sentís hoy?" rows={2} />
                      </FormFieldItem>
                      <Button style={{ height: 40 }}>Registrar</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="fotos" className="lt:mt-6">
                <Card>
                  <CardContent
                    style={{ padding: 24, display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <Camera className="lt:size-5 lt:text-text-3" />
                    <p className="lt:text-body-md lt:text-text-3">
                      Evolución fotográfica — placeholder.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>

          {/* Right sidebar */}
          <aside
            style={{
              width: 280,
              borderLeft: "1px solid var(--lt-border)",
              padding: 20,
              background: "var(--lt-surface-1)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              flexShrink: 0,
            }}
          >
            <Card
              style={{
                borderTop: "3px solid var(--lt-primary)",
                background: "color-mix(in srgb, var(--lt-primary) 3%, var(--lt-surface-1))",
              }}
            >
              <CardHeader>
                <CardTitle className="lt:text-body-md">Estadísticas de sesión</CardTitle>
              </CardHeader>
              <CardContent style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}
                  >
                    <span className="lt:text-label-md lt:text-text-3">Completado hoy</span>
                    <span className="lt:font-metric lt:text-metric-sm lt:text-success">
                      {completedExercises}/{exercises.length}
                    </span>
                  </div>
                  <Progress
                    value={(completedExercises / exercises.length) * 100}
                    className="lt:bg-success/20"
                    indicatorClassName="lt:bg-success"
                  />
                </div>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}
                  >
                    <span className="lt:text-label-md lt:text-text-3">Reps acumuladas</span>
                    <span className="lt:font-metric lt:text-metric-sm lt:text-primary">
                      {doneReps}/{totalReps}
                    </span>
                  </div>
                  <Progress
                    value={totalReps > 0 ? (doneReps / totalReps) * 100 : 0}
                    className="lt:bg-primary/20"
                    indicatorClassName="lt:bg-primary"
                  />
                </div>
                <div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}
                  >
                    <span className="lt:text-label-md lt:text-text-3">Cumplimiento semanal</span>
                    <span className="lt:font-metric lt:text-metric-sm lt:text-warning">
                      {weeklyCompliance}%
                    </span>
                  </div>
                  <Progress
                    value={weeklyCompliance}
                    className="lt:bg-warning/20"
                    indicatorClassName="lt:bg-warning"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 14px",
                    borderRadius: 10,
                    background:
                      "color-mix(in srgb, var(--lt-accent-tint) 12%, var(--lt-surface-2))",
                    border:
                      "1px solid color-mix(in srgb, var(--lt-accent-tint) 30%, var(--lt-border))",
                  }}
                >
                  <span className="lt:text-label-md lt:text-text-3">Racha</span>
                  <span
                    className="lt:font-metric lt:text-metric-sm"
                    style={{ color: "var(--lt-accent-tint)" }}
                  >
                    2 días
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card
              style={{
                borderLeft: `3px solid ${APPOINTMENT_STATUS_STYLE[getAppointmentDisplayStatus(nextAppointment.timing, nextAppointment.attendance, nextAppointment.rescheduledFrom)].border}`,
                background: "color-mix(in srgb, var(--lt-primary) 4%, var(--lt-surface-1))",
              }}
            >
              <CardHeader>
                <CardTitle className="lt:text-body-md">Próxima cita</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", gap: 12 }}>
                  <AppointmentDateThumb
                    dateLabel={nextAppointment.dateLabel}
                    timeLabel={nextAppointment.timeLabel}
                    accent={nextAppointment.accent}
                  />
                  <div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}
                    >
                      <p className="lt:text-body-md lt:font-semibold lt:text-text-1">
                        {nextAppointment.title}
                      </p>
                      <Badge variant={nextAppointmentCategory.variant} className="lt:uppercase">
                        {nextAppointmentCategory.label}
                      </Badge>
                    </div>
                    <p className="lt:mt-1 lt:text-label-md lt:text-text-3">
                      {nextAppointment.location}
                    </p>
                    <Badge
                      variant={
                        APPOINTMENT_STATUS_STYLE[
                          getAppointmentDisplayStatus(
                            nextAppointment.timing,
                            nextAppointment.attendance,
                            nextAppointment.rescheduledFrom
                          )
                        ].badge.variant
                      }
                      showDot
                      className="lt:mt-2"
                    >
                      {
                        APPOINTMENT_STATUS_STYLE[
                          getAppointmentDisplayStatus(
                            nextAppointment.timing,
                            nextAppointment.attendance,
                            nextAppointment.rescheduledFrom
                          )
                        ].badge.label
                      }
                    </Badge>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
                      <Stethoscope size={14} color="var(--lt-text-3)" />
                      <span className="lt:text-label-md lt:text-text-3">
                        {nextAppointment.provider}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <RehabPlanDemo />,
}
