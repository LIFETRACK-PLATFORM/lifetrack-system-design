import type { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"

import { Button } from "../atoms/button"
import { Toaster } from "./sonner"

const meta: Meta<typeof Toaster> = {
  title: "Molecules/Sonner",
  component: Toaster,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-8">
        <Toaster />
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-3">
      <Button variant="outline" onClick={() => toast.success("Plan actualizado correctamente.")}>
        Éxito
      </Button>
      <Button variant="outline" onClick={() => toast.error("No se pudo guardar el cambio.")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning("La sesión vence en 10 minutos.")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info("Hay un informe pendiente de revisión.")}>
        Info
      </Button>
    </div>
  ),
}
