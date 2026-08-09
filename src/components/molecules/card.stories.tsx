import type { Meta, StoryObj } from "@storybook/react"

import { Badge } from "../atoms/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Simple: Story = {
  name: "Simple (sin header/footer)",
  render: () => (
    <div style={{ width: 320 }}>
      <Card>
        <CardContent style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span className="lt:font-semibold" style={{ color: "var(--lt-text-1)" }}>
            Sin header/footer
          </span>
          <span className="lt:text-body-md" style={{ color: "var(--lt-text-3)" }}>
            Contenedor base para agrupar contenido relacionado.
          </span>
        </CardContent>
      </Card>
    </div>
  ),
}

export const WithHeaderAndFooter: Story = {
  name: "Con header/footer",
  render: () => (
    <div style={{ width: 320 }}>
      <Card>
        <CardHeader>
          <CardTitle>Plan de rehabilitación</CardTitle>
          <CardAction>
            <Badge className="lt:bg-success/15 lt:text-success" showDot>
              Activo
            </Badge>
          </CardAction>
        </CardHeader>
        <CardContent>
          <CardDescription>
            Etapa actual: Tratamiento · 3 de 4 sesiones completadas.
          </CardDescription>
        </CardContent>
        <CardFooter
          className="lt:justify-between"
          style={{ borderTop: "1px solid var(--lt-border)", paddingTop: 16, marginTop: 4 }}
        >
          <span className="lt:text-label-md" style={{ color: "var(--lt-text-3)" }}>
            Actualizado hace 2h
          </span>
          <a
            href="#"
            className="lt:text-label-md"
            style={{ color: "var(--lt-primary)", textDecoration: "none" }}
          >
            Ver detalle →
          </a>
        </CardFooter>
      </Card>
    </div>
  ),
}
