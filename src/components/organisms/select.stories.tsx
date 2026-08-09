import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Label } from "../atoms/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"

const meta: Meta<typeof Select> = {
  title: "Organisms/Select",
  component: Select,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Select>

function SelectDemo() {
  const [value, setValue] = React.useState<string>("tratamiento")

  return (
    <div style={{ width: 250 }}>
      <Label className="lt:mb-2 lt:block lt:text-xs lt:font-semibold lt:text-text-3">
        Select / dropdown
      </Label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Etapa" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="evaluacion">Evaluación</SelectItem>
          <SelectItem value="tratamiento">Tratamiento</SelectItem>
          <SelectItem value="seguimiento">Seguimiento</SelectItem>
          <SelectItem value="alta">Alta</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export const Default: Story = {
  render: () => <SelectDemo />,
}
