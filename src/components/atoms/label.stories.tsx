import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "./label"

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  args: {
    children: "Correo electrónico",
  },
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {}
