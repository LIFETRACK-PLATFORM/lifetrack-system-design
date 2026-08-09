import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Combobox, type ComboboxOption } from "./combobox"

const meta: Meta<typeof Combobox> = {
  title: "Organisms/Combobox",
  component: Combobox,
}

export default meta

type Story = StoryObj<typeof Combobox>

const patients: ComboboxOption[] = [
  { value: "sofia-ramos", label: "Sofía Ramos" },
  { value: "sofia-beltran", label: "Sofía Beltrán" },
  { value: "sofia-ianni", label: "Sofía Ianni" },
  { value: "julian-castro", label: "Julián Castro" },
  { value: "mora-peralta", label: "Mora Peralta" },
]

function ComboboxDemo() {
  const [value, setValue] = React.useState<string>()

  return (
    <div style={{ width: 250 }}>
      <Combobox
        options={patients}
        value={value}
        onValueChange={setValue}
        placeholder="Buscar paciente..."
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <ComboboxDemo />,
}
