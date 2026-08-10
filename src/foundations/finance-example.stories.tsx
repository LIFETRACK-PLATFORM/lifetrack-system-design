import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import {
  Activity,
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  Building2,
  GraduationCap,
  LayoutGrid,
  MoreHorizontal,
  Plus,
  Settings,
  ShoppingBag,
  TrendingUp,
  User,
  Utensils,
  Vault,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/atoms/avatar"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Progress } from "@/components/atoms/progress"
import { SearchInput } from "@/components/atoms/search-input"
import { Alert, AlertDescription, AlertTitle } from "@/components/molecules/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/molecules/card"
import { KpiCard } from "@/components/molecules/kpi-card"
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
import { AppSidebar } from "@/components/organisms/app-sidebar"

const meta: Meta = {
  title: "Examples/Finance",
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

const NAV = [
  { label: "Panel", icon: LayoutGrid },
  { label: "Rehabilitación", icon: Activity },
  { label: "Finanzas", icon: TrendingUp, active: true },
  { label: "Bóveda", icon: Vault },
  { label: "Perfil", icon: User },
]

const MONTHS = [
  { value: "2024-08", label: "Agosto 2024" },
  { value: "2024-07", label: "Julio 2024" },
  { value: "2024-06", label: "Junio 2024" },
]

const ACCOUNTS = [
  { id: "a1", name: "Ahorro SPP", type: "BANK", currency: "PEN", balance: 380 },
  { id: "a2", name: "Cuenta dólares", type: "BANK", currency: "USD", balance: 120 },
]

const CATEGORIES = [
  { id: "c1", name: "Sueldo", color: "var(--lt-success)", Icon: Wallet },
  { id: "c2", name: "Educación", color: "var(--lt-primary)", Icon: GraduationCap },
  { id: "c3", name: "Compras", color: "var(--lt-warning)", Icon: ShoppingBag },
  { id: "c4", name: "Comida", color: "var(--lt-accent-tint)", Icon: Utensils },
  { id: "c5", name: "Servicios", color: "var(--lt-text-3)", Icon: Building2 },
]

const TRANSACTIONS = [
  {
    id: "t1",
    title: "Supermercado",
    category: "Comida",
    account: "Ahorro SPP",
    date: "Hoy · 14:20",
    amount: -48.5,
    kind: "expense" as const,
  },
  {
    id: "t2",
    title: "Pago curso",
    category: "Educación",
    account: "Ahorro SPP",
    date: "Hoy · 09:10",
    amount: -20,
    kind: "expense" as const,
  },
  {
    id: "t3",
    title: "Depósito freelance",
    category: "Sueldo",
    account: "Cuenta dólares",
    date: "08 ago · 18:00",
    amount: 150,
    kind: "income" as const,
  },
  {
    id: "t4",
    title: "Luz / agua",
    category: "Servicios",
    account: "Ahorro SPP",
    date: "05 ago · 11:30",
    amount: -65,
    kind: "expense" as const,
  },
  {
    id: "t5",
    title: "Ropa",
    category: "Compras",
    account: "Ahorro SPP",
    date: "02 ago · 16:45",
    amount: -89.9,
    kind: "expense" as const,
  },
]

const BUDGETS = [
  { id: "b1", name: "Educación", spent: 20, limit: 120, status: "ok" as const },
  { id: "b2", name: "Comida", spent: 48.5, limit: 200, status: "ok" as const },
  { id: "b3", name: "Compras", spent: 89.9, limit: 80, status: "over" as const },
]

const RECURRING = [
  {
    id: "r1",
    name: "Ahorro automático",
    day: 1,
    account: "Ahorro SPP",
    amount: 3,
    pending: true,
  },
  {
    id: "r2",
    name: "Netflix",
    day: 15,
    account: "Ahorro SPP",
    amount: 35.9,
    pending: false,
  },
]

const EXPENSE_BY_CATEGORY = [
  { name: "Compras", value: 40, color: "var(--lt-warning)" },
  { name: "Servicios", value: 29, color: "var(--lt-text-3)" },
  { name: "Comida", value: 22, color: "var(--lt-accent-tint)" },
  { name: "Educación", value: 9, color: "var(--lt-primary)" },
]

const DAILY_CUMULATIVE = [0, 0, 0, 20, 20, 85, 85, 85, 134, 134, 134, 154, 154, 203, 203, 223]

function formatPen(amount: number) {
  const abs = Math.abs(amount).toLocaleString("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  if (amount < 0) return `-S/ ${abs}`
  return `S/ ${abs}`
}

function formatUsd(amount: number) {
  return `USD ${amount.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
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

function SectionHeader({
  title,
  actionLabel = "Nuevo",
  onAction,
}: {
  title: string
  actionLabel?: string
  onAction?: () => void
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 4,
      }}
    >
      <CardTitle>{title}</CardTitle>
      {onAction ? (
        <Button variant="ghost" size="sm" onClick={onAction}>
          <Plus />
          {actionLabel}
        </Button>
      ) : null}
    </div>
  )
}

function NewEntityDialog({
  title,
  description,
  triggerLabel = "Nuevo",
}: {
  title: string
  description: string
  triggerLabel?: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Plus />
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div>
            <DialogTitle className="lt:font-heading lt:text-body-lg">{title}</DialogTitle>
            <DialogDescription className="lt:mt-1">{description}</DialogDescription>
          </div>
          <DialogCloseButton />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Input placeholder="Nombre" />
          <Input placeholder="Monto (opcional)" type="number" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>Guardar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function BarChartViz() {
  const bars = [
    { label: "Ingresos", value: 150, color: "var(--lt-success)", max: 250 },
    { label: "Gastos", value: 223.4, color: "var(--lt-error)", max: 250 },
  ]

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 40,
        height: 180,
        paddingTop: 8,
      }}
    >
      {bars.map((bar) => (
        <div
          key={bar.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            flex: 1,
            maxWidth: 88,
            height: "100%",
            justifyContent: "flex-end",
          }}
        >
          <span className="lt:font-metric lt:text-label-md" style={{ color: bar.color }}>
            {formatPen(bar.value)}
          </span>
          <div
            style={{
              width: "100%",
              height: `${(bar.value / bar.max) * 100}%`,
              minHeight: 8,
              borderRadius: "10px 10px 4px 4px",
              background: `linear-gradient(180deg, ${bar.color}, color-mix(in srgb, ${bar.color} 55%, transparent))`,
            }}
          />
          <span className="lt:text-label-md lt:text-text-3">{bar.label}</span>
        </div>
      ))}
    </div>
  )
}

function PieChartViz() {
  const segments = EXPENSE_BY_CATEGORY.reduce<
    Array<(typeof EXPENSE_BY_CATEGORY)[number] & { start: number }>
  >((acc, slice) => {
    const start = acc.reduce((sum, item) => sum + item.value, 0)
    acc.push({ ...slice, start })
    return acc
  }, [])

  const gradient = segments.map((s) => `${s.color} ${s.start}% ${s.start + s.value}%`).join(", ")

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        height: 180,
        padding: "8px 0",
      }}
    >
      <div
        aria-hidden
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          flexShrink: 0,
          background: `conic-gradient(${gradient})`,
          mask: "radial-gradient(circle at center, transparent 42%, black 43%)",
          WebkitMask: "radial-gradient(circle at center, transparent 42%, black 43%)",
        }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 0 }}>
        {EXPENSE_BY_CATEGORY.map((slice) => (
          <div
            key={slice.name}
            style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: slice.color,
                flexShrink: 0,
              }}
            />
            <span className="lt:truncate lt:text-label-md lt:text-text-1">{slice.name}</span>
            <span className="lt:ml-auto lt:text-label-md lt:text-text-3">{slice.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AreaChartViz() {
  const w = 320
  const h = 160
  const pad = 8
  const max = Math.max(...DAILY_CUMULATIVE, 1)
  const points = DAILY_CUMULATIVE.map((v, i) => {
    const x = pad + (i / (DAILY_CUMULATIVE.length - 1)) * (w - pad * 2)
    const y = h - pad - (v / max) * (h - pad * 2)
    return `${x},${y}`
  }).join(" ")
  const area = `M ${pad},${h - pad} L ${points} L ${w - pad},${h - pad} Z`

  return (
    <div style={{ height: 180, display: "flex", alignItems: "center" }}>
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="180" preserveAspectRatio="none">
        <defs>
          <linearGradient id="financeAreaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--lt-primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--lt-primary)" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#financeAreaFill)" />
        <polyline
          points={points}
          fill="none"
          stroke="var(--lt-primary)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function TransactionRow({
  title,
  meta,
  amount,
  kind,
}: {
  title: string
  meta: string
  amount: number
  kind: "income" | "expense"
}) {
  const tone: Tone = kind === "income" ? "success" : "error"
  const Icon = kind === "income" ? ArrowDownLeft : ArrowUpRight

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <IconWrap Icon={Icon} tone={tone} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="lt:truncate lt:text-body-md lt:text-text-1">{title}</div>
        <div className="lt:truncate lt:text-label-md lt:text-text-3">{meta}</div>
      </div>
      <span
        className="lt:font-metric lt:text-body-md"
        style={{ color: TONE_COLOR[tone], whiteSpace: "nowrap" }}
      >
        {kind === "income" ? "+" : ""}
        {formatPen(amount)}
      </span>
      <Button variant="ghost" size="icon-sm" aria-label="Opciones">
        <MoreHorizontal />
      </Button>
    </div>
  )
}

function FinanceDemo() {
  const [month, setMonth] = React.useState("2024-08")
  const [showPending, setShowPending] = React.useState(true)
  const [pendingAmount, setPendingAmount] = React.useState("3")

  const todayTx = TRANSACTIONS.filter((t) => t.date.startsWith("Hoy"))
  const penTotal = ACCOUNTS.filter((a) => a.currency === "PEN").reduce((s, a) => s + a.balance, 0)
  const usdTotal = ACCOUNTS.filter((a) => a.currency === "USD").reduce((s, a) => s + a.balance, 0)

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--lt-background)" }}>
      <AppSidebar
        brand="LifeTrack OS"
        items={NAV}
        user={{ name: "Ricardo Solis", subtitle: "Finanzas personales", initials: "RS" }}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
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
                  Finanzas
                </h1>
                <Badge variant="secondary" showDot>
                  Agosto
                </Badge>
              </div>
              <p className="lt:mt-0.5 lt:text-label-md lt:text-text-3">
                Cuentas, gastos e ingresos en un solo lugar
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <Select value={month} onValueChange={setMonth}>
              <SelectTrigger className="lt:w-[160px]">
                <SelectValue placeholder="Mes" />
              </SelectTrigger>
              <SelectContent>
                {MONTHS.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <NewEntityDialog
              title="Nueva transacción"
              description="Registra un ingreso o gasto del período."
              triggerLabel="Transacción"
            />
            <SearchInput placeholder="Buscar..." className="lt:w-[180px]" />
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

        <main
          style={{
            flex: 1,
            padding: 24,
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {showPending ? (
            <Alert variant="primary">
              <Bell />
              <AlertTitle>Pendientes del mes</AlertTitle>
              <AlertDescription>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    flexWrap: "wrap",
                    marginTop: 8,
                  }}
                >
                  <span className="lt:text-text-1">
                    <strong>Ahorro automático</strong> · sugerido {formatPen(3)}
                  </span>
                  <Input
                    value={pendingAmount}
                    onChange={(e) => setPendingAmount(e.target.value)}
                    className="lt:w-[88px]"
                    aria-label="Monto a registrar"
                  />
                  <Button size="sm">Registrar</Button>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Descartar pendiente"
                    onClick={() => setShowPending(false)}
                  >
                    <X />
                  </Button>
                </div>
              </AlertDescription>
            </Alert>
          ) : null}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 12,
            }}
          >
            <KpiCard
              label="Patrimonio PEN"
              value={formatPen(penTotal)}
              delta="+2.1%"
              tone="primary"
              sparklinePoints="0,20 20,18 40,16 60,14 80,10 100,8"
            />
            <KpiCard
              label="Patrimonio USD"
              value={formatUsd(usdTotal)}
              delta="+0.0%"
              tone="neutral"
              sparklinePoints="0,14 20,14 40,14 60,14 80,14 100,14"
            />
            <KpiCard
              label="Ingresos"
              value={formatPen(150)}
              delta="+150"
              tone="success"
              sparklinePoints="0,22 20,20 40,18 60,12 80,8 100,4"
            />
            <KpiCard
              label="Gastos"
              value={formatPen(223.4)}
              delta="+12%"
              tone="error"
              sparklinePoints="0,8 20,10 40,12 60,16 80,18 100,22"
            />
            <KpiCard
              label="Neto del mes"
              value={formatPen(-73.4)}
              delta="déficit"
              tone="error"
              sparklinePoints="0,6 20,8 40,10 60,14 80,18 100,24"
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Ingresos vs gastos (PEN)</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChartViz />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gastos por categoría</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChartViz />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Gasto acumulado diario</CardTitle>
              </CardHeader>
              <CardContent>
                <AreaChartViz />
                <p className="lt:mt-1 lt:text-label-md lt:text-text-3">
                  Total mes: {formatPen(223.4)}
                </p>
              </CardContent>
            </Card>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 16,
            }}
          >
            <Card>
              <CardHeader>
                <SectionHeader title="Hoy" />
              </CardHeader>
              <CardContent style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {todayTx.map((t) => (
                  <TransactionRow
                    key={t.id}
                    title={t.title}
                    meta={`${t.category} · ${t.date}`}
                    amount={t.amount}
                    kind={t.kind}
                  />
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <CardTitle>Cuentas</CardTitle>
                  <NewEntityDialog
                    title="Nueva cuenta"
                    description="Agrega una cuenta bancaria o efectivo."
                  />
                </div>
              </CardHeader>
              <CardContent style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {ACCOUNTS.map((a) => (
                  <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <IconWrap Icon={Wallet} tone="primary" />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="lt:text-body-md lt:text-text-1">{a.name}</div>
                      <div className="lt:text-label-md lt:text-text-3">
                        {a.type} · {a.currency}
                      </div>
                    </div>
                    <span className="lt:font-metric lt:text-body-md lt:text-text-1">
                      {a.currency === "PEN" ? formatPen(a.balance) : formatUsd(a.balance)}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <CardTitle>Categorías</CardTitle>
                  <NewEntityDialog
                    title="Nueva categoría"
                    description="Organiza tus movimientos por categoría."
                  />
                </div>
              </CardHeader>
              <CardContent style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {CATEGORIES.map(({ id, name, color, Icon }) => (
                  <Badge
                    key={id}
                    variant="outline"
                    className="lt:gap-1.5 lt:border-transparent"
                    style={{
                      color,
                      background: `color-mix(in srgb, ${color} 14%, transparent)`,
                    }}
                  >
                    <Icon size={12} strokeWidth={2} />
                    {name}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <CardTitle>Presupuestos del mes</CardTitle>
                  <NewEntityDialog
                    title="Nuevo presupuesto"
                    description="Define un tope de gasto por categoría."
                  />
                </div>
              </CardHeader>
              <CardContent style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {BUDGETS.map((b) => {
                  const pct = Math.min(100, Math.round((b.spent / b.limit) * 100))
                  const over = b.status === "over"
                  return (
                    <div key={b.id} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 8,
                        }}
                      >
                        <span className="lt:text-body-md lt:text-text-1">{b.name}</span>
                        <Badge variant={over ? "destructive" : "success"} showDot>
                          {over ? "Excedido" : "En rango"}
                        </Badge>
                      </div>
                      <Progress value={pct} indicatorClassName={over ? "lt:bg-error" : undefined} />
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 8,
                        }}
                      >
                        <span className="lt:text-label-md lt:text-text-3">
                          {formatPen(b.spent)} / {formatPen(b.limit)}
                        </span>
                        <span className="lt:text-label-md lt:text-text-3">{pct}%</span>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <CardTitle>Recurrentes</CardTitle>
                  <NewEntityDialog
                    title="Nuevo recurrente"
                    description="Recordatorios o cargos que se repiten cada mes."
                  />
                </div>
              </CardHeader>
              <CardContent style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {RECURRING.map((r) => (
                  <div key={r.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <IconWrap Icon={TrendingUp} tone={r.pending ? "warning" : "primary"} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="lt:text-body-md lt:text-text-1">{r.name}</div>
                      <div className="lt:text-label-md lt:text-text-3">
                        Día {r.day} · {r.account}
                      </div>
                    </div>
                    <span className="lt:font-metric lt:text-body-md lt:text-text-1">
                      {formatPen(r.amount)}
                    </span>
                    {r.pending ? (
                      <Badge variant="warning" showDot>
                        Pendiente
                      </Badge>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card style={{ gridColumn: "1 / -1" }}>
              <CardHeader>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <CardTitle>Transacciones del mes</CardTitle>
                  <NewEntityDialog
                    title="Nueva transacción"
                    description="Registra un ingreso o gasto del período."
                  />
                </div>
              </CardHeader>
              <CardContent style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {TRANSACTIONS.map((t) => (
                  <TransactionRow
                    key={t.id}
                    title={t.title}
                    meta={`${t.category} · ${t.account} · ${t.date}`}
                    amount={t.amount}
                    kind={t.kind}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => <FinanceDemo />,
}
