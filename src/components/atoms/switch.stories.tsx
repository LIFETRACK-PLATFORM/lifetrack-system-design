import type { Meta, StoryObj } from "@storybook/react"

import { Switch } from "./switch"

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  args: {
    defaultChecked: true,
    size: "default",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {}
