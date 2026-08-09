import type { Meta, StoryObj } from "@storybook/react"
import { InfoIcon, OctagonXIcon } from "lucide-react"

import { Alert, AlertTitle, AlertDescription } from "./alert"

const meta: Meta<typeof Alert> = {
  title: "Molecules/Alert",
  component: Alert,
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: () => (
    <Alert>
      <InfoIcon />
      <AlertTitle>Atención</AlertTitle>
      <AlertDescription>Este es un mensaje informativo para el usuario.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <OctagonXIcon />
      <AlertTitle>Algo salió mal</AlertTitle>
      <AlertDescription>No se pudieron guardar los cambios. Intentá de nuevo.</AlertDescription>
    </Alert>
  ),
}
