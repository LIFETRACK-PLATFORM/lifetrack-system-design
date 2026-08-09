import type { Meta, StoryObj } from "@storybook/react"
import { Inbox } from "lucide-react"

import { EmptyState } from "./empty-state"

const meta: Meta<typeof EmptyState> = {
  title: "Molecules/EmptyState",
  component: EmptyState,
  args: {
    icon: <Inbox />,
    title: "No items found",
    description: "There is nothing to show here yet. Try creating a new item.",
  },
}

export default meta

type Story = StoryObj<typeof EmptyState>

export const Default: Story = {}
