import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Button } from "./button"

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Guardar</Button>)
    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument()
  })

  it("applies variant data attribute via className", () => {
    render(
      <Button variant="destructive" data-testid="danger">
        Eliminar
      </Button>
    )

    expect(screen.getByTestId("danger")).toHaveTextContent("Eliminar")
  })
})
