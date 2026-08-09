import type { Meta, StoryObj } from "@storybook/react"

import { Checkbox } from "./checkbox"
import { Label } from "./label"

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  args: {
    defaultChecked: true,
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

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {(["default", "success", "warning", "destructive"] as const).map((variant) => (
        <label
          key={variant}
          style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
        >
          <Checkbox id={`check-${variant}`} variant={variant} defaultChecked />
          <Label htmlFor={`check-${variant}`} className="lt:capitalize">
            {variant === "default" ? "Primary" : variant}
          </Label>
        </label>
      ))}
    </div>
  ),
}
