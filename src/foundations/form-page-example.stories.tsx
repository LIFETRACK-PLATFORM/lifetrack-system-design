import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"

import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Textarea } from "@/components/atoms/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/molecules/card"
import { FormFieldItem } from "@/components/molecules/form-field"
import { Combobox, type ComboboxOption } from "@/components/organisms/combobox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/organisms/select"

const meta: Meta = {
  title: "Examples/Form page",
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj

const patients: ComboboxOption[] = [
  { value: "sofia-ramos", label: "Sofía Ramos" },
  { value: "julian-castro", label: "Julián Castro" },
  { value: "mora-peralta", label: "Mora Peralta" },
]

export const Default: Story = {
  render: () => <FormPageDemo />,
}

function FormPageDemo() {
  const [patient, setPatient] = React.useState<string>()
  const [stage, setStage] = React.useState("tratamiento")
  const amountInvalid = true

  return (
    <div className="lt:min-h-screen lt:bg-background lt:px-6 lt:py-10">
      <div className="lt:mx-auto lt:max-w-2xl">
        <header className="lt:mb-8">
          <p className="lt:font-mono lt:text-xs lt:font-medium lt:tracking-[0.06em] lt:text-primary lt:uppercase">
            Rehab · Planes
          </p>
          <h1 className="lt:mt-2 lt:font-heading lt:text-headline-md lt:font-semibold lt:text-text-1">
            Nuevo plan de rehabilitación
          </h1>
          <p className="lt:mt-2 lt:text-body-md lt:text-text-3">
            Completá los datos del paciente y la etapa inicial del tratamiento.
          </p>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Datos del plan</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <FormFieldItem label="Paciente" hint="Buscá por nombre o apellido.">
                <Combobox
                  options={patients}
                  value={patient}
                  onValueChange={setPatient}
                  placeholder="Buscar paciente..."
                />
              </FormFieldItem>

              <FormFieldItem label="Etapa">
                <Select value={stage} onValueChange={setStage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar etapa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="evaluacion">Evaluación</SelectItem>
                    <SelectItem value="tratamiento">Tratamiento</SelectItem>
                    <SelectItem value="seguimiento">Seguimiento</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </FormFieldItem>

              <FormFieldItem
                label="Costo estimado"
                error={amountInvalid ? "Ingresá un monto válido." : undefined}
                hint={amountInvalid ? undefined : "Valor mensual del plan."}
              >
                <Input defaultValue="ccccc" placeholder="0.00" aria-invalid={amountInvalid} />
              </FormFieldItem>

              <FormFieldItem label="Notas clínicas" hint="Observaciones para el equipo médico.">
                <Textarea placeholder="Notas sobre el plan de rehabilitación..." />
              </FormFieldItem>
            </div>
          </CardContent>
          <CardFooter className="lt:justify-end lt:gap-3 lt:border-t lt:border-border lt:pt-4">
            <Button variant="outline">Cancelar</Button>
            <Button>Guardar plan</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
