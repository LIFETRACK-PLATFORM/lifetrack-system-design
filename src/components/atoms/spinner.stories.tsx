import type { Meta, StoryObj } from "@storybook/react"

import { Spinner } from "./spinner"

const meta: Meta<typeof Spinner> = {
  title: "Atoms/Spinner",
  component: Spinner,
  args: {
    size: 32,
  },
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {}
