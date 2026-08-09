import type { Meta, StoryObj } from "@storybook/react"
import { Activity, Lock, Search } from "lucide-react"

import { Button } from "../atoms/button"
import { EmptyState } from "./empty-state"

const meta: Meta<typeof EmptyState> = {
  title: "Molecules/EmptyState",
  component: EmptyState,
}

export default meta

type Story = StoryObj<typeof EmptyState>

export const NoResults: Story = {
  name: "Sin resultados",
  args: {
    icon: <Search />,
    title: "Sin resultados",
    description: "No encontramos nada para tu búsqueda. Probá con otros términos.",
  },
}

export const EmptyVault: Story = {
  name: "Vault vacío (con acción)",
  args: {
    icon: <Lock />,
    title: "Tu vault está vacío",
    description: "Guardá tu primera contraseña, todo se cifra en tu navegador.",
    action: <Button size="sm">Agregar contraseña</Button>,
  },
}

export const NoRehabPlan: Story = {
  name: "Sin plan de rehab (con acción)",
  args: {
    icon: <Activity />,
    title: "Todavía no hay un plan",
    description: "Creá un plan de recuperación para empezar a registrar sesiones.",
    action: <Button size="sm">Crear plan</Button>,
  },
}
