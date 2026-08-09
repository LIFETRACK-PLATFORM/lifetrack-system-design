import type { Meta, StoryObj } from "@storybook/react"
import { Plus } from "lucide-react"

import { Button } from "../atoms/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb"
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderEyebrow,
  PageHeaderRow,
  PageHeaderTitle,
} from "./page-header"

const meta: Meta<typeof PageHeader> = {
  title: "Molecules/PageHeader",
  component: PageHeader,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  render: () => (
    <PageHeader>
      <PageHeaderEyebrow>Rehab · Planes</PageHeaderEyebrow>
      <PageHeaderRow>
        <PageHeaderContent>
          <PageHeaderTitle>Planes de rehabilitación</PageHeaderTitle>
          <PageHeaderDescription>
            Gestioná los planes activos, pendientes y dados de alta.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <Button>
            <Plus />
            Nuevo plan
          </Button>
        </PageHeaderActions>
      </PageHeaderRow>
    </PageHeader>
  ),
}

export const WithBreadcrumb: Story = {
  render: () => (
    <PageHeader>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Rehab</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Planes</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <PageHeaderRow>
        <PageHeaderContent>
          <PageHeaderTitle>Sofía Ramos</PageHeaderTitle>
          <PageHeaderDescription>
            Plan en etapa de tratamiento · 3 de 4 sesiones.
          </PageHeaderDescription>
        </PageHeaderContent>
        <PageHeaderActions>
          <Button variant="outline">Editar</Button>
          <Button>Guardar</Button>
        </PageHeaderActions>
      </PageHeaderRow>
    </PageHeader>
  ),
}
