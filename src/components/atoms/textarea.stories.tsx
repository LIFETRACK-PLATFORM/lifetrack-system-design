import type { Meta, StoryObj } from "@storybook/react"

import { FieldError } from "./field-error"
import { FieldHint } from "./field-hint"
import { Label } from "./label"
import { Textarea } from "./textarea"

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
    placeholder: "Notas sobre el plan de rehabilitación...",
  },
}

export const WithHint: Story = {
  render: () => (
    <div className="lt:max-w-md lt:bg-background lt:p-8">
      <Label className="lt:mb-2 lt:block lt:text-xs lt:font-semibold lt:text-text-3">Notas</Label>
      <Textarea placeholder="Notas sobre el plan..." />
      <FieldHint>Información adicional para el equipo médico.</FieldHint>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="lt:max-w-md lt:bg-background lt:p-8">
      <Label className="lt:mb-2 lt:block lt:text-xs lt:font-semibold lt:text-text-3">Notas</Label>
      <Textarea defaultValue="..." aria-invalid placeholder="Notas..." />
      <FieldError>Completá al menos 10 caracteres.</FieldError>
    </div>
  ),
}
