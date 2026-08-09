import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./input"

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  args: {
    type: "email",
    placeholder: "nombre@lifetrack.os",
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Invalid: Story = {
  args: {
    type: "text",
    placeholder: "monto inválido",
    "aria-invalid": true,
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "bloqueado",
    disabled: true,
  },
}
