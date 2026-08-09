import { Plus } from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./button"

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  args: {
    children: "Guardar",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "ghost",
        "destructive",
        "success",
        "warning",
        "outline",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["lg", "default", "sm", "icon-lg", "icon", "icon-sm"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

const nightframeVariants = [
  { variant: "default" as const, label: "Guardar", name: "primary" },
  { variant: "secondary" as const, label: "Guardar", name: "secondary" },
  { variant: "ghost" as const, label: "Guardar", name: "ghost" },
  { variant: "destructive" as const, label: "Eliminar", name: "destructive" },
] as const

const extraVariants = [
  { variant: "success" as const, label: "Completado" },
  { variant: "warning" as const, label: "Pendiente" },
  { variant: "outline" as const, label: "Outline" },
  { variant: "link" as const, label: "Link" },
] as const

export const Variants: Story = {
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-3">
      {nightframeVariants.map(({ variant, label }) => (
        <Button key={variant} variant={variant}>
          {label}
        </Button>
      ))}
      {extraVariants.map(({ variant, label }) => (
        <Button key={variant} variant={variant}>
          {label}
        </Button>
      ))}
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-8">
      {nightframeVariants.map(({ variant, label, name }) => (
        <div key={name} className="lt:flex lt:flex-col lt:items-start lt:gap-2.5">
          <span className="lt:font-mono lt:text-[11px] lt:font-medium lt:tracking-wide lt:text-text-3 lt:uppercase">
            {name}
          </span>
          <Button variant={variant} size="lg">
            {label}
          </Button>
          <Button variant={variant} size="default">
            {label}
          </Button>
          <Button variant={variant} size="sm">
            {label}
          </Button>
        </div>
      ))}
    </div>
  ),
}

export const IconButton: Story = {
  name: "Icon button",
  render: () => (
    <div className="lt:flex lt:flex-col lt:items-start lt:gap-2.5">
      <span className="lt:font-mono lt:text-[11px] lt:font-medium lt:tracking-wide lt:text-text-3 lt:uppercase">
        icon-button
      </span>
      <Button variant="secondary" size="icon-lg" aria-label="Agregar">
        <Plus />
      </Button>
      <Button variant="secondary" size="icon" aria-label="Agregar">
        <Plus />
      </Button>
      <Button variant="secondary" size="icon-sm" aria-label="Agregar">
        <Plus />
      </Button>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-6">
      {[
        { name: "default", props: {} },
        { name: "focus", props: { className: "lt:ring-[3px] lt:ring-primary/20" } },
        { name: "disabled", props: { disabled: true } },
      ].map(({ name, props }) => (
        <div key={name} className="lt:flex lt:flex-col lt:items-center lt:gap-2">
          <Button variant="default" {...props}>
            Continuar
          </Button>
          <span className="lt:font-mono lt:text-[11px] lt:text-text-3">{name}</span>
        </div>
      ))}
    </div>
  ),
}
