import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "./label"
import { RadioGroup, RadioGroupItem } from "./radio-group"

const meta: Meta<typeof RadioGroup> = {
  title: "Atoms/RadioGroup",
  component: RadioGroup,
  args: {
    defaultValue: "familiar",
  },
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args} style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="individual" id="r1" />
        <Label htmlFor="r1">Individual</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="familiar" id="r2" />
        <Label htmlFor="r2">Familiar</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <RadioGroupItem value="profesional" id="r3" />
        <Label htmlFor="r3">Profesional</Label>
      </div>
    </RadioGroup>
  ),
}
