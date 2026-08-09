import type { Meta, StoryObj } from "@storybook/react"

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Molecules/Tooltip",
  component: Tooltip,
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <div style={{ padding: 40 }}>
      <TooltipProvider>
        <Tooltip defaultOpen>
          <TooltipTrigger>Botón</TooltipTrigger>
          <TooltipContent>
            <p>Editar plan</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  ),
}
