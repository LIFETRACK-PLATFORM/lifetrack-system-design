import type { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"

import { Toaster } from "./sonner"

const meta: Meta<typeof Toaster> = {
  title: "Molecules/Sonner",
  component: Toaster,
}

export default meta

type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <button
        style={{
          padding: "8px 16px",
          borderRadius: 6,
          border: "1px solid #d4d4d8",
          background: "#fff",
          cursor: "pointer",
        }}
        onClick={() => toast("Plan actualizado correctamente.")}
      >
        Mostrar notificación
      </button>
    </div>
  ),
}
