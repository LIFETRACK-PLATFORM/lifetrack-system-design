import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import type { DateRange } from "react-day-picker"

import { Calendar } from "./calendar"

const meta: Meta<typeof Calendar> = {
  title: "Molecules/Calendar",
  component: Calendar,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Calendar>

function CalendarDemo() {
  const [selected, setSelected] = React.useState<Date | undefined>(new Date(2026, 7, 6))

  return (
    <Calendar
      mode="single"
      defaultMonth={new Date(2026, 7, 1)}
      selected={selected}
      onSelect={setSelected}
    />
  )
}

function CalendarRangeDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(2026, 7, 10),
    to: new Date(2026, 7, 14),
  })

  return (
    <Calendar
      mode="range"
      defaultMonth={new Date(2026, 7, 1)}
      selected={range}
      onSelect={setRange}
    />
  )
}

export const Default: Story = {
  render: () => <CalendarDemo />,
}

export const Range: Story = {
  render: () => <CalendarRangeDemo />,
}
