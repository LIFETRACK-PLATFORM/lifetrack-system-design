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
      <div>Section one</div>
      <Separator {...args} style={{ margin: "12px 0" }} />
      <div>Section two</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", height: 40, gap: 12 }}>
      <span>Left</span>
      <Separator {...args} orientation="vertical" />
      <span>Right</span>
    </div>
  ),
}
