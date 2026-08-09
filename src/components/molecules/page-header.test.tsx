import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
  PageHeader,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderTitle,
} from "./page-header"

describe("PageHeader", () => {
  it("renders title and description", () => {
    render(
      <PageHeader>
        <PageHeaderContent>
          <PageHeaderTitle>Pacientes</PageHeaderTitle>
          <PageHeaderDescription>Listado de pacientes activos.</PageHeaderDescription>
        </PageHeaderContent>
      </PageHeader>
    )

    expect(screen.getByRole("heading", { name: "Pacientes" })).toBeInTheDocument()
    expect(screen.getByText("Listado de pacientes activos.")).toBeInTheDocument()
  })
})
