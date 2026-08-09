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
  TrendingUp,
  Vault,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "../components/atoms/avatar"
import { Badge } from "../components/atoms/badge"
import { Progress } from "../components/atoms/progress"
import { SearchInput } from "../components/atoms/search-input"
import { Card, CardContent, CardHeader, CardTitle } from "../components/molecules/card"
import { KpiCard } from "../components/molecules/kpi-card"
import { AppSidebar } from "../components/organisms/app-sidebar"

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

const NAV = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Tareas", icon: ListChecks },
  { label: "Finanzas", icon: TrendingUp },
  { label: "Vault", icon: Vault },
  { label: "Rehab", icon: Activity },
  { label: "Carrera", icon: Briefcase },
  { label: "Calendario", icon: Calendar },
]

const KPIS = [
  {
    label: "Ahorro mes",
    value: "$18,420",
    delta: "+4.3%",
    tone: "success" as const,
    sparklinePoints: "0,22 20,20 40,16 60,17 80,8 100,4",
  },
  {
    label: "Tareas completadas",
    value: "86%",
    delta: "+2.1%",
    tone: "primary" as const,
    sparklinePoints: "0,18 20,20 40,12 60,14 80,10 100,6",
  },
  {
    label: "Sesiones rehab",
    value: "12/16",
    delta: "-1",
    tone: "warning" as const,
    sparklinePoints: "0,8 20,10 40,9 60,14 80,16 100,18",
  },
  {
    label: "Próximo pago",
    value: "3 días",
    delta: "vencido",
    tone: "error" as const,
    sparklinePoints: "0,6 20,8 40,10 60,16 80,20 100,24",
  },
]

const ACTIVITIES = [
  {
    title: "Sesión de kinesiología",
    time: "Hoy · 10:30",
    label: "Confirmado",
    tone: "success" as const,
    Icon: Activity,
  },
  {
    title: "Pago tarjeta familiar",
    time: "Hoy · 18:00",
    label: "Pendiente",
    tone: "warning" as const,
    Icon: TrendingUp,
  },
  {
    title: "Control médico — Julián",
    time: "Mañana · 09:00",
    label: "Agendado",
    tone: "primary" as const,
    Icon: Calendar,
  },
  {
    title: "Entrega informe mensual",
    time: "Vie 8 · 12:00",
    label: "Vencido",
    tone: "error" as const,
    Icon: FileText,
  },
  {
    title: "Entrevista laboral",
    time: "Lun 11 · 15:30",
    label: "Agendado",
    tone: "primary" as const,
    Icon: Briefcase,
  },
]

const PIPELINE = [
  { initials: "SR", name: "Sofía Ramos", stage: "Tratamiento", progress: 72 },
  { initials: "JC", name: "Julián Castro", stage: "Evaluación", progress: 24 },
  { initials: "MP", name: "Mara Peralta", stage: "Seguimiento", progress: 55 },
]

const STAGES = ["Evaluación", "Tratamiento", "Seguimiento", "Alta"]
const CURRENT_STAGE_INDEX = 1

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", minHeight: 680, background: "var(--lt-background)" }}>
      <AppSidebar
        items={NAV}
        user={{ name: "Martina Ortega", subtitle: "Plan Familiar", initials: "MO" }}
      />

      <main style={{ flex: 1, padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <SearchInput
            placeholder="Buscar tareas, personas, movimientos..."
            style={{ maxWidth: 360, flex: 1 }}
          />
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
            <KpiCard key={k.label} {...k} />
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
