import type { Meta, StoryObj } from "@storybook/react"
import {
  Activity,
  Bell,
  Briefcase,
  Calendar,
  LayoutGrid,
  ListChecks,
  Search,
  TrendingUp,
  Vault,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "../components/atoms/avatar"
import { Progress } from "../components/atoms/progress"
import { StatusBadge, type StatusBadgeStatus } from "../components/atoms/badge"
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

const NAV: { label: string; Icon: LucideIcon; active?: boolean }[] = [
  { label: "Dashboard", Icon: LayoutGrid, active: true },
  { label: "Tareas", Icon: ListChecks },
  { label: "Finanzas", Icon: TrendingUp },
  { label: "Vault", Icon: Vault },
  { label: "Rehab", Icon: Activity },
  { label: "Carrera", Icon: Briefcase },
  { label: "Calendario", Icon: Calendar },
]

const KPIS = [
  { label: "Ahorro mes", value: "$18,420", delta: "+4.3%", positive: true },
  { label: "Tareas completadas", value: "86%", delta: "+2.1%", positive: true },
  { label: "Sesiones rehab", value: "12/16", delta: "-1", positive: false },
  { label: "Próximo pago", value: "3 días", delta: "vencido", positive: false },
]

const ACTIVITIES: { title: string; time: string; status: StatusBadgeStatus }[] = [
  { title: "Sesión de kinesiología", time: "Hoy · 10:30", status: "active" },
  { title: "Pago tarjeta familiar", time: "Hoy · 18:00", status: "pending" },
  { title: "Control médico — Julián", time: "Mañana · 09:00", status: "therapy" },
  { title: "Entrega informe mensual", time: "Vie 8 · 12:00", status: "overdue" },
]

const PIPELINE: { initials: string; name: string; stage: string; progress: number }[] = [
  { initials: "SR", name: "Sofía Ramos", stage: "Tratamiento", progress: 72 },
  { initials: "JC", name: "Julián Castro", stage: "Evaluación", progress: 24 },
  { initials: "MP", name: "Mara Peralta", stage: "Seguimiento", progress: 55 },
]

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", minHeight: 640, background: "var(--lt-background)" }}>
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
        <div className="lt:font-heading" style={{ fontWeight: 700, color: "var(--lt-text-1)" }}>
          LifeTrack
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
                color: active ? "var(--lt-primary)" : "var(--lt-text-3)",
                background: active ? "var(--lt-accent-tint)" + "22" : "transparent",
              }}
            >
              <Icon size={17} strokeWidth={1.75} />
              {label}
            </div>
          ))}
        </nav>
        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar size="sm">
            <AvatarFallback>MO</AvatarFallback>
          </Avatar>
          <div className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
            Martina Ortega
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
            }}
          >
            <Search size={16} strokeWidth={1.75} />
            <span className="lt:text-body-md">Buscar tareas, personas, movimientos...</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <Bell size={18} strokeWidth={1.75} color="var(--lt-text-3)" />
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
                    {k.label}
                  </span>
                  <span
                    className="lt:text-label-md"
                    style={{ color: k.positive ? "var(--lt-success)" : "var(--lt-error)" }}
                  >
                    {k.delta}
                  </span>
                </div>
                <div
                  className="lt:text-metric-lg lt:font-metric"
                  style={{ color: "var(--lt-text-1)" }}
                >
                  {k.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
          <Card>
            <CardHeader>
              <CardTitle>Próximas actividades</CardTitle>
            </CardHeader>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ACTIVITIES.map((a) => (
                <div
                  key={a.title}
                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
                >
                  <div>
                    <div className="lt:text-body-md" style={{ color: "var(--lt-text-1)" }}>
                      {a.title}
                    </div>
                    <div className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
                      {a.time}
                    </div>
                  </div>
                  <StatusBadge status={a.status} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pipeline de rehabilitación</CardTitle>
            </CardHeader>
            <CardContent style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  ),
}
