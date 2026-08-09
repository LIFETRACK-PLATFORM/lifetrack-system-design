import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import {
  Activity,
  Bell,
  Briefcase,
  Calendar,
  FileText,
  LayoutGrid,
  ListChecks,
  Search,
  TrendingUp,
  Vault,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "../components/atoms/avatar"
import { Badge } from "../components/atoms/badge"
import { Progress } from "../components/atoms/progress"
import { Card, CardContent, CardHeader, CardTitle } from "../components/molecules/card"

const meta: Meta = {
  title: "Examples/Dashboard",
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj

type Tone = "success" | "warning" | "error" | "primary" | "neutral"

const TONE_COLOR: Record<Tone, string> = {
  success: "var(--lt-success)",
  warning: "var(--lt-warning)",
  error: "var(--lt-error)",
  primary: "var(--lt-primary)",
  neutral: "var(--lt-text-3)",
}

const TONE_BADGE_CLASS: Record<Tone, string> = {
  success: "lt:bg-success/15 lt:text-success",
  warning: "lt:bg-warning/15 lt:text-warning",
  error: "lt:bg-error/15 lt:text-error",
  primary: "lt:bg-primary/15 lt:text-primary",
  neutral: "lt:bg-text-3/12 lt:text-text-3",
}

const TONE_DOT_CLASS: Record<Tone, string> = {
  success: "lt:bg-success",
  warning: "lt:bg-warning",
  error: "lt:bg-error",
  primary: "lt:bg-primary",
  neutral: "lt:bg-text-3",
}

function Sparkline({ points, tone }: { points: string; tone: Tone }) {
  return (
    <svg width="100%" height="28" viewBox="0 0 100 28" preserveAspectRatio="none">
      <polyline points={points} fill="none" stroke={TONE_COLOR[tone]} strokeWidth={2} />
    </svg>
  )
}

function IconWrap({ Icon, tone }: { Icon: LucideIcon; tone: Tone }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: 9,
        flexShrink: 0,
        background: `color-mix(in srgb, ${TONE_COLOR[tone]} 15%, transparent)`,
        color: TONE_COLOR[tone],
      }}
    >
      <Icon size={15} strokeWidth={1.75} />
    </div>
  )
}

function ToneBadge({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <Badge className={TONE_BADGE_CLASS[tone]} dotClassName={TONE_DOT_CLASS[tone]} showDot>
      {children}
    </Badge>
  )
}

const NAV: { label: string; Icon: LucideIcon; active?: boolean }[] = [
  { label: "Dashboard", Icon: LayoutGrid, active: true },
  { label: "Tareas", Icon: ListChecks },
  { label: "Finanzas", Icon: TrendingUp },
  { label: "Vault", Icon: Vault },
  { label: "Rehab", Icon: Activity },
  { label: "Carrera", Icon: Briefcase },
  { label: "Calendario", Icon: Calendar },
]

const KPIS: {
  label: string
  value: string
  delta: string
  tone: Tone
  points: string
}[] = [
  {
    label: "Ahorro mes",
    value: "$18,420",
    delta: "+4.3%",
    tone: "success",
    points: "0,22 20,20 40,16 60,17 80,8 100,4",
  },
  {
    label: "Tareas completadas",
    value: "86%",
    delta: "+2.1%",
    tone: "primary",
    points: "0,18 20,20 40,12 60,14 80,10 100,6",
  },
  {
    label: "Sesiones rehab",
    value: "12/16",
    delta: "-1",
    tone: "warning",
    points: "0,8 20,10 40,9 60,14 80,16 100,18",
  },
  {
    label: "Próximo pago",
    value: "3 días",
    delta: "vencido",
    tone: "error",
    points: "0,6 20,8 40,10 60,16 80,20 100,24",
  },
]

const ACTIVITIES: {
  title: string
  time: string
  label: string
  tone: Tone
  Icon: LucideIcon
}[] = [
  {
    title: "Sesión de kinesiología",
    time: "Hoy · 10:30",
    label: "Confirmado",
    tone: "success",
    Icon: Activity,
  },
  {
    title: "Pago tarjeta familiar",
    time: "Hoy · 18:00",
    label: "Pendiente",
    tone: "warning",
    Icon: TrendingUp,
  },
  {
    title: "Control médico — Julián",
    time: "Mañana · 09:00",
    label: "Agendado",
    tone: "primary",
    Icon: Calendar,
  },
  {
    title: "Entrega informe mensual",
    time: "Vie 8 · 12:00",
    label: "Vencido",
    tone: "error",
    Icon: FileText,
  },
  {
    title: "Entrevista laboral",
    time: "Lun 11 · 15:30",
    label: "Agendado",
    tone: "primary",
    Icon: Briefcase,
  },
]

const PIPELINE: { initials: string; name: string; stage: string; progress: number }[] = [
  { initials: "SR", name: "Sofía Ramos", stage: "Tratamiento", progress: 72 },
  { initials: "JC", name: "Julián Castro", stage: "Evaluación", progress: 24 },
  { initials: "MP", name: "Mara Peralta", stage: "Seguimiento", progress: 55 },
]

const STAGES = ["Evaluación", "Tratamiento", "Seguimiento", "Alta"]
const CURRENT_STAGE_INDEX = 1

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", minHeight: 680, background: "var(--lt-background)" }}>
      <aside
        style={{
          width: 220,
          borderRight: "1px solid var(--lt-border)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          className="lt:font-heading"
          style={{ fontWeight: 700, fontSize: 16, color: "var(--lt-text-1)" }}
        >
          LifeTrack
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map(({ label, Icon, active }) => (
            <div
              key={label}
              className="lt:text-body-md"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 10px",
                borderRadius: 10,
                fontWeight: active ? 600 : 400,
                color: active ? "var(--lt-primary)" : "var(--lt-text-3)",
                background: active
                  ? "color-mix(in srgb, var(--lt-primary) 12%, transparent)"
                  : "transparent",
              }}
            >
              <Icon size={17} strokeWidth={1.75} />
              {label}
            </div>
          ))}
        </nav>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 16,
            borderTop: "1px solid var(--lt-border)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Avatar size="sm">
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <div>
            <div className="lt:text-body-md" style={{ color: "var(--lt-text-1)" }}>
              Martina Ortega
            </div>
            <div className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
              Plan Familiar
            </div>
          </div>
        </div>
      </aside>

      <main style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "var(--lt-text-3)",
              flex: 1,
              maxWidth: 360,
              border: "1px solid var(--lt-border)",
              borderRadius: 10,
              padding: "8px 12px",
              background: "var(--lt-surface-1)",
            }}
          >
            <Search size={16} strokeWidth={1.75} />
            <span className="lt:text-body-md">Buscar tareas, personas, movimientos...</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ position: "relative" }}>
              <Bell size={18} strokeWidth={1.75} color="var(--lt-text-3)" />
              <span
                style={{
                  position: "absolute",
                  top: -1,
                  right: -1,
                  width: 7,
                  height: 7,
                  borderRadius: 9999,
                  background: "var(--lt-error)",
                  border: "1.5px solid var(--lt-background)",
                }}
              />
            </div>
            <Avatar size="sm">
              <AvatarFallback>MO</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 16,
          }}
        >
          {KPIS.map((k) => (
            <Card key={k.label}>
              <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                  <span className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
                    {k.label}
                  </span>
                  <span className="lt:text-label-md" style={{ color: TONE_COLOR[k.tone] }}>
                    {k.delta}
                  </span>
                </div>
                <div
                  className="lt:text-metric-lg lt:font-metric"
                  style={{ color: "var(--lt-text-1)", marginBottom: 10 }}
                >
                  {k.value}
                </div>
                <Sparkline points={k.points} tone={k.tone} />
              </CardContent>
            </Card>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <Card>
            <CardHeader>
              <CardTitle>Próximas actividades</CardTitle>
            </CardHeader>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {ACTIVITIES.map((a) => (
                <div key={a.title} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <IconWrap Icon={a.Icon} tone={a.tone} />
                  <div style={{ flex: 1 }}>
                    <div className="lt:text-body-md" style={{ color: "var(--lt-text-1)" }}>
                      {a.title}
                    </div>
                    <div className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
                      {a.time}
                    </div>
                  </div>
                  <ToneBadge tone={a.tone}>{a.label}</ToneBadge>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pipeline de rehabilitación</CardTitle>
            </CardHeader>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {STAGES.map((stage, i) => (
                  <div
                    key={stage}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 9999,
                        background: i <= CURRENT_STAGE_INDEX ? "var(--lt-primary)" : "transparent",
                        border: `2px solid ${i <= CURRENT_STAGE_INDEX ? "var(--lt-primary)" : "var(--lt-border)"}`,
                      }}
                    />
                    <span className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
                      {stage}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {PIPELINE.map((p) => (
                  <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Avatar size="sm">
                      <AvatarFallback>{p.initials}</AvatarFallback>
                    </Avatar>
                    <div style={{ flex: 1 }}>
                      <div className="lt:text-body-md" style={{ color: "var(--lt-text-1)" }}>
                        {p.name}
                      </div>
                      <Progress value={p.progress} style={{ marginTop: 6 }} />
                    </div>
                    <span className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
                      {p.stage}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  ),
}
