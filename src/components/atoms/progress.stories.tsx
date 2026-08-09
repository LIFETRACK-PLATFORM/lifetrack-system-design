import type { Meta, StoryObj } from "@storybook/react"

import { Progress } from "./progress"

const meta: Meta<typeof Progress> = {
  title: "Atoms/Progress",
  component: Progress,
  args: {
    value: 60,
  },
  render: (args) => (
    <div style={{ width: 280 }}>
      <Progress {...args} />
    </div>
  ),
}

export default meta

type Story = StoryObj<typeof Progress>

export const Default: Story = {}
