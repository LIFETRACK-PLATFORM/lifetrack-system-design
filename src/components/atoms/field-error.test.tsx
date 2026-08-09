import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { FieldError } from "./field-error"

describe("FieldError", () => {
  it("renders error message with alert role", () => {
    render(<FieldError>Ingresá un monto válido.</FieldError>)

    const message = screen.getByRole("alert")
    expect(message).toHaveTextContent("Ingresá un monto válido.")
    expect(message).toHaveAttribute("data-slot", "field-error")
  })
})
