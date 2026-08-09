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
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>This is an informational message for the user.</AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <OctagonXIcon />
      <AlertTitle>Something went wrong</AlertTitle>
      <AlertDescription>Your changes could not be saved. Please try again.</AlertDescription>
    </Alert>
  ),
}
