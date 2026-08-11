import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { DatePicker } from "./date-picker"

const meta: Meta<typeof DatePicker> = {
  title: "Organisms/DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof DatePicker>

function DatePickerDemo() {
  const [value, setValue] = React.useState<Date | undefined>(new Date())

  return (
    <div style={{ width: 280 }}>
      <DatePicker value={value} onValueChange={setValue} />
    </div>
  )
}

export const Default: Story = {
  render: () => <DatePickerDemo />,
}

export const Empty: Story = {
  render: () => {
    function Empty() {
      const [value, setValue] = React.useState<Date | undefined>(undefined)
      return (
        <div style={{ width: 280 }}>
          <DatePicker value={value} onValueChange={setValue} placeholder="Elegir fecha" />
        </div>
      )
    }
    return <Empty />
  },
}
