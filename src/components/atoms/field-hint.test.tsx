import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { FieldHint } from "./field-hint"

describe("FieldHint", () => {
  it("renders helper text", () => {
    render(<FieldHint>Texto de ayuda opcional.</FieldHint>)

    expect(screen.getByText("Texto de ayuda opcional.")).toHaveAttribute("data-slot", "field-hint")
  })
})
