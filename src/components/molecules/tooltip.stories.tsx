import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../atoms/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

const meta: Meta<typeof Tooltip> = {
  title: "Molecules/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-16">
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Tooltip>

const VARIANTS = [
  { variant: "default" as const, label: "Default", text: "Editar plan" },
  { variant: "primary" as const, label: "Primary", text: "Acción principal" },
  { variant: "success" as const, label: "Success", text: "Plan guardado" },
  { variant: "warning" as const, label: "Warning", text: "Sesión por vencer" },
  { variant: "destructive" as const, label: "Destructive", text: "Eliminar registro" },
  { variant: "inverse" as const, label: "Inverse", text: "Tooltip oscuro" },
] as const

function TooltipDemo({
  variant,
  text,
  label,
}: {
  variant: (typeof VARIANTS)[number]["variant"]
  text: string
  label: string
}) {
  return (
    <Tooltip defaultOpen>
      <TooltipTrigger asChild>
        <Button variant="secondary" size="sm">
          {label}
        </Button>
      </TooltipTrigger>
      <TooltipContent variant={variant}>{text}</TooltipContent>
    </Tooltip>
  )
}

export const Default: Story = {
  render: () => <TooltipDemo variant="default" text="Editar plan" label="Botón" />,
}

export const Variants: Story = {
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-6">
      {VARIANTS.map(({ variant, label, text }) => (
        <TooltipDemo key={variant} variant={variant} label={label} text={text} />
      ))}
    </div>
  ),
}
