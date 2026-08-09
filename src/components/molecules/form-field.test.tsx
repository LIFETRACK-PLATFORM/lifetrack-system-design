import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Input } from "../atoms/input"
import { FormFieldItem } from "./form-field"

describe("FormFieldItem", () => {
  it("renders label and control", () => {
    render(
      <FormFieldItem label="Email">
        <Input type="email" placeholder="nombre@lifetrack.os" />
      </FormFieldItem>
    )

    expect(screen.getByText("Email")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("nombre@lifetrack.os")).toBeInTheDocument()
  })

  it("renders error message and marks control invalid", () => {
    render(
      <FormFieldItem label="Monto" error="Ingresá un monto válido.">
        <Input defaultValue="abc" />
      </FormFieldItem>
    )

    expect(screen.getByRole("alert")).toHaveTextContent("Ingresá un monto válido.")
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true")
  })

  it("renders hint when there is no error", () => {
    render(
      <FormFieldItem label="Notas" hint="Opcional.">
        <Input />
      </FormFieldItem>
    )

    expect(screen.getByText("Opcional.")).toHaveAttribute("data-slot", "field-hint")
  })
})
