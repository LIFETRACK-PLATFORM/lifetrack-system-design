import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "./label"
import { RadioGroup, RadioGroupItem } from "./radio-group"

const meta: Meta<typeof RadioGroup> = {
  title: "Atoms/RadioGroup",
  component: RadioGroup,
  args: {
    defaultValue: "familiar",
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive"],
    },
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

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: 20,
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      }}
    >
      {(["default", "success", "warning", "destructive"] as const).map((variant) => (
        <RadioGroup
          key={variant}
          variant={variant}
          defaultValue="a"
          style={{ display: "grid", gap: 8 }}
        >
          <p className="lt:text-label-md lt:font-semibold lt:capitalize lt:text-text-1">
            {variant === "default" ? "Primary" : variant}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <RadioGroupItem value="a" id={`${variant}-a`} />
            <Label htmlFor={`${variant}-a`}>Opción A</Label>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <RadioGroupItem value="b" id={`${variant}-b`} />
            <Label htmlFor={`${variant}-b`}>Opción B</Label>
          </div>
        </RadioGroup>
      ))}
    </div>
  ),
}
