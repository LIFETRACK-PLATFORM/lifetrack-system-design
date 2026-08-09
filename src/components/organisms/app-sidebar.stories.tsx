import type { Meta, StoryObj } from "@storybook/react"
import {
  Activity,
  Briefcase,
  Calendar,
  LayoutGrid,
  ListChecks,
  TrendingUp,
  Vault,
} from "lucide-react"

import { AppSidebar } from "./app-sidebar"

const meta: Meta<typeof AppSidebar> = {
  title: "Organisms/AppSidebar",
  component: AppSidebar,
  parameters: { layout: "fullscreen" },
}

export default meta

type Story = StoryObj<typeof AppSidebar>

const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutGrid, active: true },
  { label: "Tareas", icon: ListChecks },
  { label: "Finanzas", icon: TrendingUp },
  { label: "Vault", icon: Vault },
  { label: "Rehab", icon: Activity },
  { label: "Carrera", icon: Briefcase },
  { label: "Calendario", icon: Calendar },
]

export const Default: Story = {
  render: () => (
    <div className="lt:min-h-[640px] lt:bg-background">
      <AppSidebar
        items={NAV_ITEMS}
        user={{ name: "Martina Ortega", subtitle: "Plan Familiar", initials: "MO" }}
      />
    </div>
  ),
}
