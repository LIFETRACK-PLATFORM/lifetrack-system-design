import type { Meta, StoryObj } from "@storybook/react"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "./avatar"

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  args: {
    size: "default",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://broken-url.example/none.png" alt="Unknown user" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const Group: Story = {
  name: "Group (AvatarGroup)",
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>JC</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>MP</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
}
