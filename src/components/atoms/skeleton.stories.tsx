import type { Meta, StoryObj } from "@storybook/react"

import { Skeleton } from "./skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
}

export default meta

type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: (args) => <Skeleton {...args} style={{ width: 240, height: 20 }} />,
}
