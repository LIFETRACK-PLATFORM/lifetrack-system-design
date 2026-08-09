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
  const [value, setValue] = React.useState<string>("tratamiento")

  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger style={{ width: 220 }}>
        <SelectValue placeholder="Etapa" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="evaluacion">Evaluación</SelectItem>
        <SelectItem value="tratamiento">Tratamiento</SelectItem>
        <SelectItem value="seguimiento">Seguimiento</SelectItem>
        <SelectItem value="alta">Alta</SelectItem>
      </SelectContent>
    </Select>
  )
}

export const Default: Story = {
  render: () => <SelectDemo />,
}
