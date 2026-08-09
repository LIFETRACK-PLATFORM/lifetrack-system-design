import type { Meta, StoryObj } from "@storybook/react"

import { FieldError } from "./field-error"
import { Input } from "./input"
import { Label } from "./label"
import { Textarea } from "./textarea"

const fieldLabelClassName =
  "lt:mt-3.5 lt:mb-0.5 lt:text-xs lt:font-semibold lt:text-[#55555F] lt:dark:text-[#A6A6AE]"

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  decorators: [
    (Story) => (
      <div className="lt:max-w-md lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
  args: {
    type: "email",
    placeholder: "nombre@lifetrack.os",
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Invalid: Story = {
  render: () => (
    <div>
      <Label className={fieldLabelClassName} htmlFor="input-invalid">
        Text input — error
      </Label>
      <Input
        id="input-invalid"
        type="text"
        defaultValue="ccccc"
        placeholder="monto inválido"
        aria-invalid
        aria-describedby="input-invalid-error"
      />
      <FieldError id="input-invalid-error">Ingresá un monto válido.</FieldError>
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    placeholder: "bloqueado",
    disabled: true,
  },
}

export const States: Story = {
  render: () => (
    <div className="lt:flex lt:flex-col lt:gap-1">
      <Label className={fieldLabelClassName} htmlFor="input-default">
        Text input — default
      </Label>
      <Input id="input-default" type="email" placeholder="nombre@lifetrack.os" />

      <Label className={fieldLabelClassName} htmlFor="input-error">
        Text input — error
      </Label>
      <Input
        id="input-error"
        type="text"
        defaultValue="ccccc"
        placeholder="monto inválido"
        aria-invalid
        aria-describedby="input-error-message"
      />
      <FieldError id="input-error-message">Ingresá un monto válido.</FieldError>

      <Label className={fieldLabelClassName} htmlFor="input-disabled">
        Text input — disabled
      </Label>
      <Input id="input-disabled" placeholder="bloqueado" disabled />
    </div>
  ),
}

export const FormFields: Story = {
  name: "Form fields",
  render: () => (
    <div className="lt:flex lt:flex-col lt:gap-1">
      <Label className={fieldLabelClassName} htmlFor="form-email">
        Text input — default
      </Label>
      <Input id="form-email" type="email" placeholder="nombre@lifetrack.os" />

      <Label className={fieldLabelClassName} htmlFor="form-amount">
        Text input — error
      </Label>
      <Input
        id="form-amount"
        type="text"
        defaultValue="ccccc"
        placeholder="monto inválido"
        aria-invalid
        aria-describedby="form-amount-error"
      />
      <FieldError id="form-amount-error">Ingresá un monto válido.</FieldError>

      <Label className={fieldLabelClassName} htmlFor="form-disabled">
        Text input — disabled
      </Label>
      <Input id="form-disabled" placeholder="bloqueado" disabled />

      <Label className={fieldLabelClassName} htmlFor="form-notes">
        Textarea
      </Label>
      <Textarea id="form-notes" placeholder="Notas sobre el plan de rehabilitación..." />
    </div>
  ),
}
