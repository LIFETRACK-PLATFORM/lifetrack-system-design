import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "../atoms/input"
import { Textarea } from "../atoms/textarea"
import { FormFieldItem } from "./form-field"

const meta: Meta<typeof FormFieldItem> = {
  title: "Molecules/FormField",
  component: FormFieldItem,
  decorators: [
    (Story) => (
      <div className="lt:max-w-md lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof FormFieldItem>

export const Default: Story = {
  render: () => (
    <FormFieldItem label="Email" hint="Usaremos este correo para notificaciones.">
      <Input type="email" placeholder="nombre@lifetrack.os" />
    </FormFieldItem>
  ),
}

export const WithError: Story = {
  render: () => (
    <FormFieldItem label="Monto" error="Ingresá un monto válido.">
      <Input defaultValue="ccccc" placeholder="0.00" />
    </FormFieldItem>
  ),
}

export const TextareaField: Story = {
  render: () => (
    <FormFieldItem label="Notas" hint="Información adicional sobre el plan.">
      <Textarea placeholder="Notas sobre el plan de rehabilitación..." />
    </FormFieldItem>
  ),
}

export const FormStack: Story = {
  name: "Form stack",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <FormFieldItem label="Paciente" hint="Nombre completo del paciente.">
        <Input placeholder="Sofía Ramos" />
      </FormFieldItem>
      <FormFieldItem label="Email" error="El correo no es válido.">
        <Input type="email" defaultValue="sofia@" placeholder="nombre@lifetrack.os" />
      </FormFieldItem>
      <FormFieldItem label="Observaciones">
        <Textarea placeholder="Notas clínicas..." />
      </FormFieldItem>
    </div>
  ),
}
