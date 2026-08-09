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
  Scale,
  HeartPulse,
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
import { Calendar } from "@/components/molecules/calendar"
import { FormFieldItem } from "@/components/molecules/form-field"
import { KpiCard, type KpiTone } from "@/components/molecules/kpi-card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/molecules/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/molecules/tabs"
import { AppSidebar } from "@/components/organisms/app-sidebar"
import {
  Dialog,
  DialogClose,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/organisms/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/organisms/select"
import { cn } from "@/lib/utils"

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

function getMeasurementsByType(type: MeasurementType, source: MeasurementRecord[]) {
  return source
    .filter((item) => item.type === type)
    .sort((a, b) => b.dateLabel.localeCompare(a.dateLabel, "es"))
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

function MeasurementHistoryGroup({
  type,
  measurements,
}: {
  type: MeasurementType
  measurements: MeasurementRecord[]
}) {
  const config = MEASUREMENT_CONFIG[type]
  const items = getMeasurementsByType(type, measurements)

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

type MeasureMode = "reps" | "duration"

const WEEKDAY_OPTIONS = [
  { key: "sun", label: "D" },
  { key: "mon", label: "L" },
  { key: "tue", label: "M" },
  { key: "wed", label: "M" },
  { key: "thu", label: "J" },
  { key: "fri", label: "V" },
  { key: "sat", label: "S" },
] as const

const EXERCISE_ACCENTS: AccentKey[] = ["primary", "success", "warning", "accent"]

const MEASURE_MODE_STYLE = {
  reps: {
    color: "var(--lt-primary)",
    border: "color-mix(in srgb, var(--lt-primary) 45%, var(--lt-border))",
    bg: "color-mix(in srgb, var(--lt-primary) 10%, var(--lt-surface-1))",
  },
  duration: {
    color: "var(--lt-warning)",
    border: "color-mix(in srgb, var(--lt-warning) 45%, var(--lt-border))",
    bg: "color-mix(in srgb, var(--lt-warning) 10%, var(--lt-surface-1))",
  },
} as const

const APPOINTMENT_TYPE_STYLE = {
  terapia: {
    color: "var(--lt-primary)",
    border: "var(--lt-primary)",
    bg: "color-mix(in srgb, var(--lt-primary) 12%, var(--lt-surface-1))",
    idleIcon: "color-mix(in srgb, var(--lt-primary) 55%, var(--lt-text-3))",
  },
  control: {
    color: "var(--lt-success)",
    border: "var(--lt-success)",
    bg: "color-mix(in srgb, var(--lt-success) 12%, var(--lt-surface-1))",
    idleIcon: "color-mix(in srgb, var(--lt-success) 55%, var(--lt-text-3))",
  },
} as const

const MEASUREMENT_TYPE_STYLE = {
  knee_extension: {
    color: "var(--lt-primary)",
    border: "var(--lt-primary)",
    bg: "color-mix(in srgb, var(--lt-primary) 12%, var(--lt-surface-1))",
    idleIcon: "color-mix(in srgb, var(--lt-primary) 55%, var(--lt-text-3))",
    icon: TrendingUp,
    hint: "Grados de flexión",
  },
  weight: {
    color: "var(--lt-success)",
    border: "var(--lt-success)",
    bg: "color-mix(in srgb, var(--lt-success) 12%, var(--lt-surface-1))",
    idleIcon: "color-mix(in srgb, var(--lt-success) 55%, var(--lt-text-3))",
    icon: Scale,
    hint: "Peso corporal",
  },
  pain: {
    color: "var(--lt-error)",
    border: "var(--lt-error)",
    bg: "color-mix(in srgb, var(--lt-error) 12%, var(--lt-surface-1))",
    idleIcon: "color-mix(in srgb, var(--lt-error) 55%, var(--lt-text-3))",
    icon: HeartPulse,
    hint: "Escala 0–10",
  },
} as const

const MODAL_FOOTER_CLASS =
  "lt:border-t lt:border-primary/20 lt:bg-[linear-gradient(180deg,var(--lt-surface-1),color-mix(in_srgb,var(--lt-primary)_7%,var(--lt-surface-2)))] lt:px-6 lt:py-4"

function AddExerciseDialog({ onAdd }: { onAdd: (exercise: (typeof EXERCISES)[number]) => void }) {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  const [measureMode, setMeasureMode] = React.useState<MeasureMode>("reps")
  const [sets, setSets] = React.useState("3")
  const [reps, setReps] = React.useState("20")
  const [duration, setDuration] = React.useState("1")
  const [notes, setNotes] = React.useState("")
  const [days, setDays] = React.useState<string[]>([])

  function resetForm() {
    setName("")
    setMeasureMode("reps")
    setSets("3")
    setReps("20")
    setDuration("1")
    setNotes("")
    setDays([])
  }

  function toggleDay(key: string) {
    setDays((current) =>
      current.includes(key) ? current.filter((day) => day !== key) : [...current, key]
    )
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const title = name.trim()
    if (!title) return

    const setsValue = Math.max(1, Number(sets) || 1)
    const repsValue = Math.max(1, Number(reps) || 1)
    const durationValue = Math.max(1, Number(duration) || 1)
    const meta =
      measureMode === "reps"
        ? `${setsValue} series · ${repsValue} reps`
        : `${setsValue} series · ${durationValue} min`
    const total = measureMode === "reps" ? setsValue * repsValue : setsValue

    onAdd({
      id: `ex-${Date.now()}`,
      title,
      meta,
      done: 0,
      total,
      overdue: false,
      accent: EXERCISE_ACCENTS[Math.floor(Math.random() * EXERCISE_ACCENTS.length)],
    })

    resetForm()
    setOpen(false)
  }

  const setsValue = Math.max(1, Number(sets) || 1)
  const repsValue = Math.max(1, Number(reps) || 1)
  const durationValue = Math.max(1, Number(duration) || 1)
  const previewTotal = measureMode === "reps" ? setsValue * repsValue : setsValue
  const previewMeta =
    measureMode === "reps"
      ? `${setsValue} series · ${repsValue} reps`
      : `${setsValue} series · ${durationValue} min`

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (!nextOpen) resetForm()
      }}
    >
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus />
          Agregar ejercicio
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="lt:gap-0 lt:overflow-hidden lt:p-0 lt:sm:max-w-[540px]"
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              padding: "20px 24px 0",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Badge variant="default" className="lt:gap-1.5">
                  <Activity size={12} />
                  Ejercicio
                </Badge>
                <Badge variant="secondary">Protocolo</Badge>
              </div>
              <DialogTitle className="lt:font-heading lt:text-body-lg">
                Configurar volumen
              </DialogTitle>
              <DialogDescription className="lt:mt-1 lt:text-label-md lt:text-text-3">
                Definí series, repeticiones y frecuencia semanal.
              </DialogDescription>
            </div>
            <DialogCloseButton />
          </div>

          <div style={{ padding: "16px 24px 0" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto 1fr auto 1fr",
                alignItems: "center",
                gap: 10,
                padding: "18px 16px",
                borderRadius: 14,
                border: "1px solid color-mix(in srgb, var(--lt-primary) 25%, var(--lt-border))",
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--lt-primary) 8%, var(--lt-surface-1)), color-mix(in srgb, var(--lt-success) 6%, var(--lt-surface-2)))",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <p className="lt:text-[11px] lt:font-semibold lt:text-primary lt:uppercase">
                  Series
                </p>
                <p className="lt:mt-1 lt:font-metric lt:text-metric-md lt:text-primary">
                  {setsValue}
                </p>
              </div>
              <span className="lt:font-metric lt:text-xl lt:text-text-3">×</span>
              <div style={{ textAlign: "center" }}>
                <p
                  className="lt:text-[11px] lt:font-semibold lt:uppercase"
                  style={{
                    color:
                      measureMode === "duration" ? "var(--lt-warning)" : "var(--lt-accent-tint)",
                  }}
                >
                  {measureMode === "reps" ? "Reps" : "Min"}
                </p>
                <p
                  className="lt:mt-1 lt:font-metric lt:text-metric-md"
                  style={{
                    color:
                      measureMode === "duration" ? "var(--lt-warning)" : "var(--lt-accent-tint)",
                  }}
                >
                  {measureMode === "reps" ? repsValue : durationValue}
                </p>
              </div>
              <span className="lt:font-metric lt:text-xl lt:text-text-3">=</span>
              <div style={{ textAlign: "center" }}>
                <p className="lt:text-[11px] lt:font-semibold lt:text-success lt:uppercase">
                  Total
                </p>
                <p className="lt:mt-1 lt:font-metric lt:text-metric-md lt:text-success">
                  {previewTotal}
                  <span className="lt:ml-0.5 lt:text-label-md lt:text-text-3">
                    {measureMode === "reps" ? "reps" : "min"}
                  </span>
                </p>
              </div>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}
            >
              {(
                [
                  {
                    value: "reps" as const,
                    label: "Repeticiones",
                    hint: "Contar series × reps",
                    icon: TrendingUp,
                  },
                  {
                    value: "duration" as const,
                    label: "Duración",
                    hint: "Medir en minutos",
                    icon: Clock,
                  },
                ] as const
              ).map((option) => {
                const active = measureMode === option.value
                const Icon = option.icon
                const tone = MEASURE_MODE_STYLE[option.value]

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setMeasureMode(option.value)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 6,
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: active ? `2px solid ${tone.color}` : `1px solid ${tone.border}`,
                      background: active ? tone.bg : "var(--lt-surface-1)",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <Icon
                      size={16}
                      color={active ? tone.color : tone.color}
                      style={{ opacity: active ? 1 : 0.55 }}
                    />
                    <span
                      className="lt:text-sm lt:font-semibold"
                      style={{ color: active ? tone.color : "var(--lt-text-1)" }}
                    >
                      {option.label}
                    </span>
                    <span className="lt:text-[11px] lt:text-text-3">{option.hint}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, padding: "18px 24px" }}>
            <FormFieldItem label="Nombre del ejercicio" htmlFor="exercise-name">
              <Input
                id="exercise-name"
                placeholder="Ej. Elevaciones de talón"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoFocus
              />
            </FormFieldItem>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <FormFieldItem label="Series" htmlFor="exercise-sets">
                <Input
                  id="exercise-sets"
                  type="number"
                  min={1}
                  value={sets}
                  onChange={(event) => setSets(event.target.value)}
                />
              </FormFieldItem>
              {measureMode === "reps" ? (
                <FormFieldItem label="Repeticiones" htmlFor="exercise-reps">
                  <Input
                    id="exercise-reps"
                    type="number"
                    min={1}
                    value={reps}
                    onChange={(event) => setReps(event.target.value)}
                  />
                </FormFieldItem>
              ) : (
                <FormFieldItem label="Minutos" htmlFor="exercise-duration">
                  <Input
                    id="exercise-duration"
                    type="number"
                    min={1}
                    value={duration}
                    onChange={(event) => setDuration(event.target.value)}
                  />
                </FormFieldItem>
              )}
            </div>

            <div>
              <span className="lt:text-xs lt:font-semibold lt:text-text-3">Frecuencia semanal</span>
              <div style={{ display: "flex", gap: 6, marginTop: 8, flexWrap: "wrap" }}>
                {WEEKDAY_OPTIONS.map((day, index) => {
                  const selected = days.includes(day.key)
                  const dayColor =
                    index % 3 === 0
                      ? "var(--lt-primary)"
                      : index % 3 === 1
                        ? "var(--lt-success)"
                        : "var(--lt-warning)"

                  return (
                    <button
                      key={day.key}
                      type="button"
                      aria-pressed={selected}
                      aria-label={`Día ${day.label}`}
                      onClick={() => toggleDay(day.key)}
                      className="lt:flex lt:size-8 lt:items-center lt:justify-center lt:rounded-full lt:text-[11px] lt:font-bold lt:transition-colors"
                      style={
                        selected
                          ? {
                              background: dayColor,
                              color: "white",
                              border: `1px solid ${dayColor}`,
                            }
                          : {
                              background: "var(--lt-surface-1)",
                              color: "var(--lt-text-3)",
                              border: "1px solid var(--lt-border)",
                            }
                      }
                    >
                      {day.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <FormFieldItem label="Indicaciones" htmlFor="exercise-notes" hint="Opcional">
              <Input
                id="exercise-notes"
                placeholder="Ej. Banda mediana, espalda recta"
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
              />
            </FormFieldItem>

            {name.trim() ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: 12,
                  borderRadius: 12,
                  border: "1px dashed color-mix(in srgb, var(--lt-primary) 35%, var(--lt-border))",
                  background: "color-mix(in srgb, var(--lt-primary) 4%, var(--lt-surface-1))",
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "color-mix(in srgb, var(--lt-primary) 12%, var(--lt-surface-2))",
                    color: "var(--lt-primary)",
                    flexShrink: 0,
                  }}
                >
                  <Activity size={20} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p className="lt:text-label-md lt:font-semibold lt:text-text-3">Vista previa</p>
                  <p className="lt:truncate lt:text-body-md lt:font-semibold lt:text-text-1">
                    {name.trim()}
                  </p>
                  <p className="lt:text-label-md lt:text-text-3">{previewMeta}</p>
                </div>
                <Badge variant="secondary" showDot className="lt:ml-auto lt:shrink-0">
                  Pendiente
                </Badge>
              </div>
            ) : null}
          </div>

          <DialogFooter className={MODAL_FOOTER_CLASS}>
            <DialogClose asChild>
              <Button variant="outline" type="button" className="lt:min-w-[108px]">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="lt:min-w-[156px]" disabled={!name.trim()}>
              Agregar al protocolo
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

type AppointmentFormCategory = "terapia" | "control"

const APPOINTMENT_TIME_OPTIONS = [
  "08:00",
  "09:00",
  "10:00",
  "11:30",
  "14:00",
  "16:00",
  "18:00",
] as const

const APPOINTMENT_ACCENTS: AccentKey[] = ["accent", "primary", "success", "warning"]

const STORY_TODAY = new Date(2026, 7, 9)

function formatAppointmentDateLabel(date: Date) {
  const month = date.toLocaleDateString("es", { month: "short" }).replace(".", "")
  return `${month} ${date.getDate()}`
}

function formatAppointmentTimeLabel(time: string) {
  const [hours, minutes] = time.split(":").map(Number)
  const period = hours >= 12 ? "p.m." : "a.m."
  const hour12 = hours % 12 || 12
  return `${hour12}:${String(minutes).padStart(2, "0")} ${period}`
}

function getAppointmentTiming(date: Date): AppointmentTiming {
  const dayStart = (value: Date) =>
    new Date(value.getFullYear(), value.getMonth(), value.getDate()).getTime()
  const target = dayStart(date)
  const today = dayStart(STORY_TODAY)

  if (target === today) return "today"
  if (target > today) return "upcoming"
  return "past"
}

function AddAppointmentDialog({
  onAdd,
}: {
  onAdd: (appointment: (typeof APPOINTMENTS)[number]) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [title, setTitle] = React.useState("")
  const [category, setCategory] = React.useState<AppointmentFormCategory>("terapia")
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [time, setTime] = React.useState<string>("09:00")
  const [place, setPlace] = React.useState("")
  const [notes, setNotes] = React.useState("")
  const [repeatWeekly, setRepeatWeekly] = React.useState(false)

  function resetForm() {
    setTitle("")
    setCategory("terapia")
    setDate(undefined)
    setTime("09:00")
    setPlace("")
    setNotes("")
    setRepeatWeekly(false)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedTitle = title.trim()
    const trimmedPlace = place.trim()
    if (!trimmedTitle || !date || !trimmedPlace) return

    onAdd({
      id: `ap-${Date.now()}`,
      title: trimmedTitle,
      category,
      provider: trimmedPlace,
      location: trimmedPlace,
      dateLabel: formatAppointmentDateLabel(date),
      timeLabel: formatAppointmentTimeLabel(time),
      timing: getAppointmentTiming(date),
      attendance: null,
      accent: APPOINTMENT_ACCENTS[Math.floor(Math.random() * APPOINTMENT_ACCENTS.length)],
    })

    resetForm()
    setOpen(false)
  }

  const dateLabel = date
    ? date.toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })
    : "Seleccioná una fecha"
  const previewDateLabel = date ? formatAppointmentDateLabel(date) : "—"
  const previewTimeLabel = formatAppointmentTimeLabel(time)
  const categoryLabel = category === "terapia" ? "TERAPIA" : "CONTROL"

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (!nextOpen) resetForm()
      }}
    >
      <DialogTrigger asChild>
        <Button variant="default">
          <CalendarDays />
          Agendar cita
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="lt:gap-0 lt:overflow-hidden lt:p-0 lt:sm:max-w-[760px]"
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(280px, 320px) 1fr",
            }}
          >
            <div
              style={{
                padding: 20,
                borderRight:
                  "1px solid color-mix(in srgb, var(--lt-primary) 20%, var(--lt-border))",
                background:
                  "linear-gradient(165deg, color-mix(in srgb, var(--lt-primary) 16%, var(--lt-surface-2)), color-mix(in srgb, var(--lt-success) 8%, var(--lt-surface-1)) 55%, var(--lt-surface-1))",
              }}
            >
              <Badge variant="default" className="lt:mb-2 lt:gap-1.5">
                <CalendarDays size={12} />
                Agenda
              </Badge>
              <DialogTitle className="lt:mt-1 lt:font-heading lt:text-body-lg">
                Elegí el día
              </DialogTitle>
              <DialogDescription className="lt:mt-1 lt:mb-3 lt:text-label-md lt:text-text-3">
                El calendario queda fijo mientras completás los datos.
              </DialogDescription>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="lt:w-full lt:rounded-[12px] lt:border lt:border-border lt:bg-surface-1"
              />
              {date ? (
                <div
                  style={{
                    marginTop: 12,
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: "1px solid color-mix(in srgb, var(--lt-success) 40%, var(--lt-border))",
                    background: "color-mix(in srgb, var(--lt-success) 12%, var(--lt-surface-1))",
                  }}
                >
                  <p className="lt:text-[11px] lt:font-semibold lt:text-success lt:uppercase">
                    Fecha seleccionada
                  </p>
                  <p className="lt:mt-1 lt:text-sm lt:font-semibold lt:text-text-1">{dateLabel}</p>
                </div>
              ) : null}
            </div>

            <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "16px 20px 0",
                }}
              >
                <DialogCloseButton />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  padding: "4px 20px 20px",
                }}
              >
                <FormFieldItem label="Título de la cita" htmlFor="appointment-title">
                  <Input
                    id="appointment-title"
                    placeholder="Ej. Control post-operatorio"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    autoFocus
                  />
                </FormFieldItem>

                <div>
                  <span className="lt:text-xs lt:font-semibold lt:text-text-3">Tipo de cita</span>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 10,
                      marginTop: 8,
                    }}
                  >
                    {(
                      [
                        {
                          value: "terapia" as const,
                          label: "Terapia",
                          hint: "Sesión con fisioterapeuta",
                          icon: Activity,
                        },
                        {
                          value: "control" as const,
                          label: "Médica",
                          hint: "Control o evaluación",
                          icon: Stethoscope,
                        },
                      ] as const
                    ).map((option) => {
                      const active = category === option.value
                      const Icon = option.icon
                      const tone = APPOINTMENT_TYPE_STYLE[option.value]

                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setCategory(option.value)}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            gap: 8,
                            padding: "14px 12px",
                            borderRadius: 12,
                            border: active
                              ? `2px solid ${tone.border}`
                              : `1px solid ${tone.border}`,
                            background: active ? tone.bg : "var(--lt-surface-1)",
                            cursor: "pointer",
                            textAlign: "left",
                            opacity: active ? 1 : 0.92,
                          }}
                        >
                          <Icon size={18} color={active ? tone.color : tone.idleIcon} />
                          <span
                            className="lt:text-sm lt:font-semibold"
                            style={{ color: active ? tone.color : "var(--lt-text-1)" }}
                          >
                            {option.label}
                          </span>
                          <span className="lt:text-[11px] lt:text-text-3">{option.hint}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <span className="lt:text-xs lt:font-semibold lt:text-text-3">Hora</span>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                      marginTop: 8,
                    }}
                  >
                    {APPOINTMENT_TIME_OPTIONS.map((option) => {
                      const active = time === option

                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setTime(option)}
                          className={cn(
                            "lt:inline-flex lt:items-center lt:gap-1.5 lt:rounded-full lt:px-3 lt:py-1.5 lt:text-xs lt:font-semibold lt:transition-colors",
                            active
                              ? "lt:border-primary lt:bg-primary lt:text-primary-foreground"
                              : "lt:border-warning/35 lt:bg-warning/8 lt:text-warning lt:hover:border-warning/60"
                          )}
                          style={{ border: "1px solid" }}
                        >
                          {!active ? <Clock size={12} /> : null}
                          {option}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <FormFieldItem label="Profesional / centro" htmlFor="appointment-place">
                  <Input
                    id="appointment-place"
                    placeholder="Ej. Centro Médico Apex"
                    value={place}
                    onChange={(event) => setPlace(event.target.value)}
                  />
                </FormFieldItem>

                <FormFieldItem label="Notas" htmlFor="appointment-notes" hint="Opcional">
                  <Input
                    id="appointment-notes"
                    placeholder="Ej. Llevar resonancia"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                  />
                </FormFieldItem>

                <label
                  htmlFor="appointment-repeat"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    borderRadius: 10,
                    border: "1px solid color-mix(in srgb, var(--lt-warning) 35%, var(--lt-border))",
                    background: "color-mix(in srgb, var(--lt-warning) 8%, var(--lt-surface-1))",
                    cursor: "pointer",
                  }}
                >
                  <Checkbox
                    id="appointment-repeat"
                    variant="warning"
                    checked={repeatWeekly}
                    onCheckedChange={(checked) => setRepeatWeekly(checked === true)}
                  />
                  <span className="lt:text-label-md lt:text-text-2">Repetir cada semana</span>
                </label>

                {title.trim() && date && place.trim() ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: 12,
                      borderRadius: 12,
                      border:
                        "1px dashed color-mix(in srgb, var(--lt-primary) 35%, var(--lt-border))",
                      background: "color-mix(in srgb, var(--lt-primary) 5%, var(--lt-surface-1))",
                    }}
                  >
                    <AppointmentDateThumb
                      dateLabel={previewDateLabel}
                      timeLabel={previewTimeLabel}
                      accent="primary"
                    />
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <p className="lt:text-label-md lt:font-semibold lt:text-text-3">
                        Vista previa
                      </p>
                      <p className="lt:truncate lt:text-body-md lt:font-semibold lt:text-text-1">
                        {title.trim()}
                      </p>
                      <p className="lt:truncate lt:text-label-md lt:text-text-3">{place.trim()}</p>
                    </div>
                    <Badge variant="default" className="lt:shrink-0 lt:uppercase">
                      {categoryLabel}
                    </Badge>
                  </div>
                ) : null}
              </div>

              <DialogFooter className={MODAL_FOOTER_CLASS}>
                <DialogClose asChild>
                  <Button variant="outline" type="button" className="lt:min-w-[108px]">
                    Cancelar
                  </Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="lt:min-w-[140px]"
                  disabled={!title.trim() || !date || !place.trim()}
                >
                  Confirmar cita
                </Button>
              </DialogFooter>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function formatMeasurementDateLabel(date: Date) {
  const day = String(date.getDate()).padStart(2, "0")
  const month = date.toLocaleDateString("es", { month: "short" }).replace(".", "")
  return `${day} ${month}. ${date.getFullYear()}`
}

function formatMeasurementChartLabel(date: Date) {
  const day = String(date.getDate()).padStart(2, "0")
  const month = date.toLocaleDateString("es", { month: "short" }).replace(".", "")
  return `${day}-${month}`
}

function AddMeasurementDialog({ onAdd }: { onAdd: (measurement: MeasurementRecord) => void }) {
  const [open, setOpen] = React.useState(false)
  const [type, setType] = React.useState<MeasurementType>("knee_extension")
  const [value, setValue] = React.useState("")
  const [date, setDate] = React.useState<Date | undefined>(STORY_TODAY)

  function resetForm() {
    setType("knee_extension")
    setValue("")
    setDate(STORY_TODAY)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!date) return

    const numericValue = Number(value)
    const config = MEASUREMENT_CONFIG[type]
    if (!Number.isFinite(numericValue) || numericValue < config.min || numericValue > config.max) {
      return
    }

    onAdd({
      id: `m-${Date.now()}`,
      type,
      value: numericValue,
      dateLabel: formatMeasurementDateLabel(date),
      chartLabel: formatMeasurementChartLabel(date),
    })

    resetForm()
    setOpen(false)
  }

  const config = MEASUREMENT_CONFIG[type]
  const tone = MEASUREMENT_TYPE_STYLE[type]
  const numericValue = Number(value)
  const valueIsValid =
    value.trim() !== "" &&
    Number.isFinite(numericValue) &&
    numericValue >= config.min &&
    numericValue <= config.max
  const dateLabel = date
    ? date.toLocaleDateString("es", { day: "numeric", month: "long", year: "numeric" })
    : "Seleccioná una fecha"
  const previewValue = valueIsValid ? formatMeasurementValue(type, numericValue) : "—"
  const TypeIcon = tone.icon

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (!nextOpen) resetForm()
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus />
          Registrar medición
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="lt:gap-0 lt:overflow-hidden lt:p-0 lt:sm:max-w-[520px]"
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              padding: "20px 24px 0",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <Badge variant="default" className="lt:gap-1.5">
                  <TrendingUp size={12} />
                  Medición
                </Badge>
                <Badge variant="secondary">Seguimiento</Badge>
              </div>
              <DialogTitle className="lt:font-heading lt:text-body-lg">
                Registrar medición
              </DialogTitle>
              <DialogDescription className="lt:mt-1 lt:text-label-md lt:text-text-3">
                Elegí el tipo, cargá el valor y la fecha del registro.
              </DialogDescription>
            </div>
            <DialogCloseButton />
          </div>

          <div style={{ padding: "16px 24px 0" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 10,
              }}
            >
              {(Object.keys(MEASUREMENT_TYPE_STYLE) as MeasurementType[]).map((option) => {
                const active = type === option
                const optionConfig = MEASUREMENT_CONFIG[option]
                const optionTone = MEASUREMENT_TYPE_STYLE[option]
                const Icon = optionTone.icon

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setType(option)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 6,
                      padding: "12px 10px",
                      borderRadius: 12,
                      border: active
                        ? `2px solid ${optionTone.border}`
                        : `1px solid ${optionTone.border}`,
                      background: active ? optionTone.bg : "var(--lt-surface-1)",
                      cursor: "pointer",
                      textAlign: "left",
                      opacity: active ? 1 : 0.92,
                    }}
                  >
                    <Icon size={16} color={active ? optionTone.color : optionTone.idleIcon} />
                    <span
                      className="lt:text-xs lt:font-semibold lt:leading-tight"
                      style={{ color: active ? optionTone.color : "var(--lt-text-1)" }}
                    >
                      {optionConfig.label}
                    </span>
                    <span className="lt:text-[10px] lt:text-text-3">{optionTone.hint}</span>
                  </button>
                )
              })}
            </div>

            <div
              style={{
                marginTop: 12,
                padding: "16px",
                borderRadius: 14,
                border: `1px solid color-mix(in srgb, ${tone.border} 35%, var(--lt-border))`,
                background: `linear-gradient(135deg, color-mix(in srgb, ${tone.border} 10%, var(--lt-surface-1)), var(--lt-surface-2))`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div>
                <p
                  className="lt:text-[11px] lt:font-semibold lt:uppercase"
                  style={{ color: tone.color }}
                >
                  Valor a registrar
                </p>
                <p
                  className="lt:mt-1 lt:font-metric lt:text-metric-md"
                  style={{ color: tone.color }}
                >
                  {previewValue}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p className="lt:text-[11px] lt:font-semibold lt:text-text-3 lt:uppercase">Fecha</p>
                <p className="lt:mt-1 lt:text-sm lt:font-semibold lt:text-text-1">
                  {date ? formatMeasurementDateLabel(date) : "—"}
                </p>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
                marginTop: 16,
              }}
            >
              <FormFieldItem
                label={`Valor (${config.unit})`}
                htmlFor="measurement-value"
                hint={`Rango ${config.min}–${config.max}`}
              >
                <Input
                  id="measurement-value"
                  type="number"
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  placeholder={type === "pain" ? "Ej. 3" : type === "weight" ? "Ej. 76" : "Ej. 85"}
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                  autoFocus
                />
              </FormFieldItem>

              <FormFieldItem label="Fecha" htmlFor="measurement-date">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="measurement-date"
                      type="button"
                      variant="outline"
                      className={cn(
                        "lt:w-full lt:justify-start lt:font-normal",
                        !date && "lt:text-text-3"
                      )}
                    >
                      <CalendarDays />
                      {dateLabel}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="lt:w-auto lt:p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} />
                  </PopoverContent>
                </Popover>
              </FormFieldItem>
            </div>

            {valueIsValid && date ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: 16,
                  padding: 12,
                  borderRadius: 12,
                  border: `1px dashed color-mix(in srgb, ${tone.border} 40%, var(--lt-border))`,
                  background: `color-mix(in srgb, ${tone.border} 6%, var(--lt-surface-1))`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: tone.bg,
                    border: `1px solid color-mix(in srgb, ${tone.border} 35%, var(--lt-border))`,
                    color: tone.color,
                    flexShrink: 0,
                  }}
                >
                  <TypeIcon size={20} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <p className="lt:text-label-md lt:font-semibold lt:text-text-3">Vista previa</p>
                  <p className="lt:text-body-md lt:font-semibold lt:text-text-1">
                    {config.label} · {previewValue}
                  </p>
                  <p className="lt:text-label-md lt:text-text-3">
                    {formatMeasurementDateLabel(date)}
                  </p>
                </div>
                <Badge
                  variant={
                    type === "pain" ? "destructive" : type === "weight" ? "success" : "default"
                  }
                  className="lt:shrink-0"
                >
                  Nuevo
                </Badge>
              </div>
            ) : null}
          </div>

          <DialogFooter className={MODAL_FOOTER_CLASS}>
            <DialogClose asChild>
              <Button variant="outline" type="button" className="lt:min-w-[108px]">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" className="lt:min-w-[120px]" disabled={!valueIsValid || !date}>
              Registrar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function RehabPlanDemo() {
  const [selectedDay, setSelectedDay] = React.useState(9)
  const [exercises, setExercises] = React.useState(EXERCISES)
  const [appointments, setAppointments] = React.useState(APPOINTMENTS)
  const [measurements, setMeasurements] = React.useState(MEASUREMENTS)
  const [painLevel, setPainLevel] = React.useState("3")
  const [chartMetric, setChartMetric] = React.useState<MeasurementType>("knee_extension")

  const kneeExtensionValues = getMeasurementsByType("knee_extension", measurements)
    .map((item) => item.value)
    .reverse()
  const lastPainRecord = getMeasurementsByType("pain", measurements)[0]
  const chartPoints = getMeasurementsByType(chartMetric, measurements).slice().reverse()
  const chartConfig = MEASUREMENT_CONFIG[chartMetric]
  const chartLatest = chartPoints[chartPoints.length - 1]?.value ?? 0
  const chartFirst = chartPoints[0]?.value ?? 0
  const chartDelta = chartLatest - chartFirst
  const painSparkline = getMeasurementsByType("pain", measurements)
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

  function addExercise(exercise: (typeof EXERCISES)[number]) {
    setExercises((current) => [...current, exercise])
  }

  function addAppointment(appointment: (typeof APPOINTMENTS)[number]) {
    setAppointments((current) => [...current, appointment])
  }

  function addMeasurement(measurement: MeasurementRecord) {
    setMeasurements((current) => [measurement, ...current])
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
                    <AddExerciseDialog onAdd={addExercise} />
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
                    <AddAppointmentDialog onAdd={addAppointment} />
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
                  <AddMeasurementDialog onAdd={addMeasurement} />
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
                      getMeasurementsByType("weight", measurements)[0]
                        ? formatMeasurementValue(
                            "weight",
                            getMeasurementsByType("weight", measurements)[0].value
                          )
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
                  <MeasurementHistoryGroup type="knee_extension" measurements={measurements} />
                  <MeasurementHistoryGroup type="weight" measurements={measurements} />
                  <MeasurementHistoryGroup type="pain" measurements={measurements} />
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
