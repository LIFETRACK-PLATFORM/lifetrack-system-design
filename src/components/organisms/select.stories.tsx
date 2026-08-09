import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

const meta: Meta<typeof Select> = {
  title: "Organisms/Select",
  component: Select,
}

export default meta

type Story = StoryObj<typeof Select>

function SelectDemo() {
  const [value, setValue] = React.useState<string>()

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger style={{ width: 200 }}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  )
}

export const Default: Story = {
  render: () => <SelectDemo />,
}
