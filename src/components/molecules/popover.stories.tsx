import type { Meta, StoryObj } from "@storybook/react"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverDescription,
} from "./popover"

const meta: Meta<typeof Popover> = {
  title: "Molecules/Popover",
  component: Popover,
}

export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <div style={{ padding: 80 }}>
      <Popover defaultOpen>
        <PopoverTrigger>Ver detalles</PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>
            <PopoverTitle>Sesión</PopoverTitle>
            <PopoverDescription>Duración estimada: 45 minutos.</PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  ),
}
