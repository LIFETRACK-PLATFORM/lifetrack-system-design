import type { Meta, StoryObj } from "@storybook/react"
import {
  Activity,
  Bell,
  Briefcase,
  Calendar,
  Check,
  ChevronDown,
  LayoutGrid,
  ListChecks,
  Plus,
  Search,
  Settings,
  TrendingUp,
  TriangleAlert,
  User,
  Vault,
  X,
  type LucideIcon,
} from "lucide-react"

const meta: Meta = {
  title: "Foundations/Icons",
  parameters: {
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj

const ICONS: { name: string; Icon: LucideIcon }[] = [
  { name: "dashboard", Icon: LayoutGrid },
  { name: "tareas", Icon: ListChecks },
  { name: "finanzas", Icon: TrendingUp },
  { name: "vault", Icon: Vault },
  { name: "rehab", Icon: Activity },
  { name: "carrera", Icon: Briefcase },
  { name: "calendario", Icon: Calendar },
  { name: "notificación", Icon: Bell },
  { name: "búsqueda", Icon: Search },
  { name: "usuario", Icon: User },
  { name: "check", Icon: Check },
  { name: "alerta", Icon: TriangleAlert },
  { name: "config", Icon: Settings },
  { name: "chevron", Icon: ChevronDown },
  { name: "cerrar", Icon: X },
  { name: "agregar", Icon: Plus },
]

export const Default: Story = {
  render: () => (
    <div>
      <p className="lt:text-body-md" style={{ color: "var(--lt-text-3)", marginBottom: 20 }}>
        Stroke 1.75px, esquinas redondeadas, estilo lucide — lucide-react ya es una dependencia del
        paquete, se importa directo.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
          gap: 12,
        }}
      >
        {ICONS.map(({ name, Icon }) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              padding: 16,
              borderRadius: 12,
              border: "1px solid var(--lt-border)",
              background: "var(--lt-surface-1)",
            }}
          >
            <Icon size={22} strokeWidth={1.75} color="var(--lt-text-1)" />
            <span className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  ),
}
