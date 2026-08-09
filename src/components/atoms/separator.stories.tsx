import type { Meta, StoryObj } from "@storybook/react"

import { Separator } from "./separator"

const meta: Meta<typeof Separator> = {
  title: "Atoms/Separator",
  component: Separator,
}

export default meta

type Story = StoryObj<typeof Separator>

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 300 }}>
      <div>Sección uno</div>
      <Separator {...args} style={{ margin: "12px 0" }} />
      <div>Sección dos</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", height: 40, gap: 12 }}>
      <span>Izquierda</span>
      <Separator {...args} orientation="vertical" />
      <span>Derecha</span>
    </div>
  ),
}
