import type { Meta, StoryObj } from "@storybook/react"

import { SearchInput } from "./search-input"

const meta: Meta<typeof SearchInput> = {
  title: "Atoms/SearchInput",
  component: SearchInput,
  decorators: [
    (Story) => (
      <div className="lt:max-w-sm lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  args: {
    placeholder: "Buscar tareas, personas, movimientos...",
  },
}
