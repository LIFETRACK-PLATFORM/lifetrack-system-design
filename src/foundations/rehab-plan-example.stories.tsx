import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import {
  Activity,
  Bell,
  CalendarDays,
  Camera,
  Check,
  CheckCircle2,
  Circle,
  Clock,
  LayoutGrid,
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
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/atoms/avatar"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Progress } from "@/components/atoms/progress"
import { SearchInput } from "@/components/atoms/search-input"
import { Textarea } from "@/components/atoms/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/card"
import { FormFieldItem } from "@/components/molecules/form-field"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/molecules/tabs"
import { AppSidebar } from "@/components/organisms/app-sidebar"

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
    ring: string
  }
> = {
  pending: {
    badge: { variant: "destructive", label: "Vencido" },
    border: "var(--lt-error)",
    progress: "lt:bg-error/70",
    ring: "var(--lt-error)",
  },
  in_progress: {
    badge: { variant: "warning", label: "En progreso" },
    border: "var(--lt-warning)",
    progress: "lt:bg-primary",
    ring: "var(--lt-warning)",
  },
  completed: {
    badge: { variant: "success", label: "Completado" },
    border: "var(--lt-success)",
    progress: "lt:bg-success",
    ring: "var(--lt-success)",
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

function ExerciseThumb({ accent, status }: { accent: AccentKey; status: ExerciseStatus }) {
  const palette = ACCENT[accent]
  const isDone = status === "completed"

  return (
    <div style={{ position: "relative", flexShrink: 0 }}>
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 10,
          background: `linear-gradient(135deg, ${palette.bg}, var(--lt-surface-3))`,
          border: `1px solid ${palette.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isDone ? (
          <Check size={28} strokeWidth={2.5} color={palette.color} />
        ) : (
          <Activity size={28} strokeWidth={1.5} color={palette.color} />
        )}
      </div>
      <StatusRing status={status} />
    </div>
  )
}

function StatusRing({ status }: { status: ExerciseStatus }) {
  const style = STATUS_STYLE[status]

  return (
    <span
      aria-hidden
      style={{
        position: "absolute",
        top: -4,
        right: -4,
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "var(--lt-surface-1)",
        border: `2px solid ${style.ring}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 1px 4px color-mix(in srgb, var(--lt-text-1) 12%, transparent)",
      }}
    >
      {status === "completed" ? (
        <Check size={11} strokeWidth={3} color={style.ring} />
      ) : status === "in_progress" ? (
        <Clock size={10} strokeWidth={2.5} color={style.ring} />
      ) : (
        <Circle size={8} fill={style.ring} stroke="none" />
      )}
    </span>
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
  title,
  meta,
  done,
  total,
  overdue,
  accent,
  onIncrement,
  onDecrement,
}: (typeof EXERCISES)[number] & {
  onIncrement: () => void
  onDecrement: () => void
}) {
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
              <div style={{ display: "flex", gap: 4 }}>
                <Button variant="ghost" size="icon-sm" aria-label="Editar">
                  <Pencil />
                </Button>
                <Button variant="ghost" size="icon-sm" aria-label="Eliminar">
                  <Trash2 />
                </Button>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 14 }}>
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

function RehabPlanDemo() {
  const [selectedDay, setSelectedDay] = React.useState(9)
  const [exercises, setExercises] = React.useState(EXERCISES)
  const [painLevel, setPainLevel] = React.useState("3")

  const completedExercises = exercises.filter((ex) => ex.done >= ex.total).length
  const startedExercises = exercises.filter((ex) => ex.done > 0).length
  const totalReps = exercises.reduce((sum, ex) => sum + ex.total, 0)
  const doneReps = exercises.reduce((sum, ex) => sum + ex.done, 0)
  const weeklyCompliance = Math.round((doneReps / totalReps) * 100)
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
                <Card>
                  <CardContent style={{ padding: 24 }}>
                    <p className="lt:text-body-md lt:text-text-3">
                      Vista de citas del plan — placeholder.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mediciones" className="lt:mt-6">
                <Card>
                  <CardContent style={{ padding: 24 }}>
                    <p className="lt:text-body-md lt:text-text-3">
                      Historial de mediciones — placeholder.
                    </p>
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
                borderLeft: "3px solid var(--lt-success)",
                background: "color-mix(in srgb, var(--lt-success) 4%, var(--lt-surface-1))",
              }}
            >
              <CardHeader>
                <CardTitle className="lt:text-body-md">Próxima cita</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", gap: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "color-mix(in srgb, var(--lt-success) 15%, transparent)",
                      border:
                        "1px solid color-mix(in srgb, var(--lt-success) 35%, var(--lt-border))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--lt-success)",
                      flexShrink: 0,
                    }}
                  >
                    <CalendarDays size={18} />
                  </div>
                  <div>
                    <p className="lt:text-body-md lt:font-semibold lt:text-text-1">
                      Evaluación de lesión
                    </p>
                    <p className="lt:mt-1 lt:text-label-md lt:text-text-3">San Isidro Camacho</p>
                    <Badge variant="success" showDot className="lt:mt-2">
                      Confirmada
                    </Badge>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 8 }}>
                      <Stethoscope size={14} color="var(--lt-text-3)" />
                      <span className="lt:text-label-md lt:text-text-3">Control médico</span>
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
