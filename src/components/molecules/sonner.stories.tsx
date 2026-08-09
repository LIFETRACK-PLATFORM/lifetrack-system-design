import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { toast } from "sonner"

import { Toaster } from "./sonner"

const meta: Meta<typeof Toaster> = {
  title: "Molecules/Sonner",
  component: Toaster,
}

export default meta

type Story = StoryObj<typeof Toaster>

const buttonStyle: React.CSSProperties = {
  padding: "8px 16px",
  borderRadius: 10,
  border: "1px solid var(--lt-border)",
  background: "var(--lt-surface-1)",
  color: "var(--lt-text-1)",
  cursor: "pointer",
}

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12 }}>
      <Toaster />
      <button style={buttonStyle} onClick={() => toast.success("Plan actualizado correctamente.")}>
        Mostrar éxito
      </button>
      <button style={buttonStyle} onClick={() => toast.error("No se pudo guardar el cambio.")}>
        Mostrar error
      </button>
    </div>
  ),
}
