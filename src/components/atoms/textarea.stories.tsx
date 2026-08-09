import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "./textarea"

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  args: {
    placeholder: "Type your message here.",
  },
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {}
