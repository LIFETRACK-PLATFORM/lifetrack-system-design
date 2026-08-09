import type { Meta, StoryObj } from "@storybook/react"

import { Badge, StatusBadge, type StatusBadgeStatus } from "./badge"

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  args: {
    children: "Badge",
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "success",
        "warning",
        "destructive",
        "outline",
        "ghost",
        "link",
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Badge {...args} variant="default">
        Default
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="success">
        Success
      </Badge>
      <Badge {...args} variant="warning">
        Warning
      </Badge>
      <Badge {...args} variant="destructive">
        Destructive
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
      <Badge {...args} variant="ghost">
        Ghost
      </Badge>
      <Badge {...args} variant="link">
        Link
      </Badge>
    </div>
  ),
}

export const WithDot: Story = {
  name: "With dot (showDot)",
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      <Badge variant="default" showDot>
        Default
      </Badge>
      <Badge variant="secondary" showDot>
        Secondary
      </Badge>
      <Badge variant="success" showDot>
        Success
      </Badge>
      <Badge variant="warning" showDot>
        Warning
      </Badge>
      <Badge variant="destructive" showDot>
        Destructive
      </Badge>
    </div>
  ),
}

const STATUSES: StatusBadgeStatus[] = [
  "active",
  "pending",
  "overdue",
  "completed",
  "paused",
  "therapy",
  "medical",
]

export const StatusBadges: Story = {
  name: "StatusBadge (dot + label per status)",
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
      {STATUSES.map((status) => (
        <StatusBadge key={status} status={status} />
      ))}
    </div>
  ),
}
