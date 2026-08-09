import type { Meta, StoryObj } from "@storybook/react"

import { ProgressRing } from "./progress-ring"

const meta: Meta<typeof ProgressRing> = {
  title: "Atoms/ProgressRing",
  component: ProgressRing,
  args: {
    value: 65,
    size: 64,
    strokeWidth: 8,
    children: "65%",
  },
}

export default meta

type Story = StoryObj<typeof ProgressRing>

export const Default: Story = {}
