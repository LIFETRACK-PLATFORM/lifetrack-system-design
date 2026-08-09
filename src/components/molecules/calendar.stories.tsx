import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Calendar } from "./calendar"

const meta: Meta<typeof Calendar> = {
  title: "Molecules/Calendar",
  component: Calendar,
}

export default meta

type Story = StoryObj<typeof Calendar>

function CalendarDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date())

  return <Calendar mode="single" selected={selected} onSelect={setSelected} />
}

export const Default: Story = {
  render: () => <CalendarDemo />,
}
