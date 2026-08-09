import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  InfoIcon,
  OctagonXIcon,
  type LucideIcon,
} from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "./alert"

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
  decorators: [
    (Story) => (
      <div className="lt:max-w-md lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Alert>

type AlertVariant = NonNullable<ComponentProps<typeof Alert>["variant"]>

const ALERT_EXAMPLES: {
  variant: AlertVariant
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    variant: "default",
    icon: InfoIcon,
    title: "Atención",
    description: "Este es un mensaje informativo para el usuario.",
  },
  {
    variant: "primary",
    icon: Info,
    title: "Información clave",
    description: "Hay una actualización disponible para este plan.",
  },
  {
    variant: "success",
    icon: CheckCircle2,
    title: "Plan actualizado",
    description: "Los cambios se guardaron correctamente.",
  },
  {
    variant: "warning",
    icon: AlertTriangle,
    title: "Sesión por vencer",
    description: "Tu sesión expira en 5 minutos. Guardá los cambios.",
  },
  {
    variant: "destructive",
    icon: OctagonXIcon,
    title: "Algo salió mal",
    description: "No se pudieron guardar los cambios. Intentá de nuevo.",
  },
]

function AlertExample({
  variant,
  icon: Icon,
  title,
  description,
}: (typeof ALERT_EXAMPLES)[number]) {
  return (
    <Alert variant={variant}>
      <Icon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}

export const Default: Story = {
  render: () => <AlertExample {...ALERT_EXAMPLES[0]} />,
}

export const Primary: Story = {
  render: () => <AlertExample {...ALERT_EXAMPLES[1]} />,
}

export const Success: Story = {
  render: () => <AlertExample {...ALERT_EXAMPLES[2]} />,
}

export const Warning: Story = {
  render: () => <AlertExample {...ALERT_EXAMPLES[3]} />,
}

export const Destructive: Story = {
  render: () => <AlertExample {...ALERT_EXAMPLES[4]} />,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {ALERT_EXAMPLES.map((example) => (
        <AlertExample key={example.variant} {...example} />
      ))}
    </div>
  ),
}
