import * as React from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Combobox, type ComboboxOption } from "./combobox"

const meta: Meta<typeof Combobox> = {
  title: "Organisms/Combobox",
  component: Combobox,
}

export default meta

type Story = StoryObj<typeof Combobox>

const frameworks: ComboboxOption[] = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

function ComboboxDemo() {
  const [value, setValue] = React.useState<string>()

  return (
    <div style={{ width: 250 }}>
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <ComboboxDemo />,
}
