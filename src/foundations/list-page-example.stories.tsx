import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { ArrowUp, Plus, Search } from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/atoms/avatar"
import { Badge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Progress } from "@/components/atoms/progress"
import { SearchInput } from "@/components/atoms/search-input"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/molecules/breadcrumb"
import { EmptyState } from "@/components/molecules/empty-state"
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderRow,
  PageHeaderTitle,
} from "@/components/molecules/page-header"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/molecules/pagination"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/organisms/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/molecules/table"

const meta: Meta = {
  title: "Examples/List page",
  parameters: {
    controls: { disable: true },
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj

type Tone = "success" | "warning" | "primary"

const TONE_CLASS: Record<Tone, string> = {
  success: "lt:bg-success/15 lt:text-success",
  warning: "lt:bg-warning/15 lt:text-warning",
  primary: "lt:bg-primary/15 lt:text-primary",
}

const INDICATOR_TONE: Record<Tone, string> = {
  success: "lt:bg-success",
  warning: "lt:bg-warning",
  primary: "lt:bg-primary",
}

const ALL_PATIENTS = [
  {
    initials: "SR",
    name: "Sofía Ramos",
    stage: "Tratamiento",
    progress: 72,
    progressTone: "primary" as const,
    status: "Activo",
    tone: "success" as const,
  },
  {
    initials: "JC",
    name: "Julián Castro",
    stage: "Evaluación",
    progress: 20,
    progressTone: "warning" as const,
    status: "Pendiente",
    tone: "warning" as const,
  },
  {
    initials: "MP",
    name: "Mora Peralta",
    stage: "Seguimiento",
    progress: 85,
    progressTone: "primary" as const,
    status: "Activo",
    tone: "success" as const,
  },
  {
    initials: "EV",
    name: "Ezequiel Vidal",
    stage: "Alta",
    progress: 100,
    progressTone: "success" as const,
    status: "Completado",
    tone: "primary" as const,
  },
]

export const Default: Story = {
  render: () => <ListPageDemo />,
}

export const Empty: Story = {
  name: "Sin resultados",
  render: () => <ListPageDemo forceEmpty />,
}

function ListPageDemo({ forceEmpty = false }: { forceEmpty?: boolean }) {
  const [query, setQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState("all")

  const filtered = React.useMemo(() => {
    if (forceEmpty) return []
    return ALL_PATIENTS.filter((patient) => {
      const matchesQuery = patient.name.toLowerCase().includes(query.toLowerCase())
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && patient.status === "Activo") ||
        (statusFilter === "pending" && patient.status === "Pendiente") ||
        (statusFilter === "done" && patient.status === "Completado")
      return matchesQuery && matchesStatus
    })
  }, [forceEmpty, query, statusFilter])

  return (
    <div className="lt:min-h-screen lt:bg-background lt:px-6 lt:py-10">
      <div className="lt:mx-auto lt:max-w-5xl lt:flex lt:flex-col lt:gap-6">
        <PageHeader>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Rehab</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Pacientes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <PageHeaderRow>
            <PageHeaderContent>
              <PageHeaderTitle>Pacientes en rehabilitación</PageHeaderTitle>
              <PageHeaderDescription>
                Listado con filtros, tabla y paginación — patrón típico de LifeTrack.
              </PageHeaderDescription>
            </PageHeaderContent>
            <PageHeaderActions>
              <Button>
                <Plus />
                Nuevo paciente
              </Button>
            </PageHeaderActions>
          </PageHeaderRow>
        </PageHeader>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          <SearchInput
            placeholder="Buscar paciente..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            style={{ flex: 1, minWidth: 220, maxWidth: 360 }}
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger style={{ width: 180 }}>
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="active">Activos</SelectItem>
              <SelectItem value="pending">Pendientes</SelectItem>
              <SelectItem value="done">Completados</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={<Search />}
            title="Sin resultados"
            description="No encontramos pacientes con esos filtros. Probá otra búsqueda."
          />
        ) : (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <span className="lt:inline-flex lt:items-center lt:gap-1">
                      Paciente
                      <ArrowUp className="lt:size-3.5 lt:text-text-3" />
                    </span>
                  </TableHead>
                  <TableHead>Etapa</TableHead>
                  <TableHead>Progreso</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((patient) => (
                  <TableRow key={patient.name}>
                    <TableCell>
                      <div className="lt:flex lt:items-center lt:gap-3">
                        <Avatar size="sm">
                          <AvatarFallback>{patient.initials}</AvatarFallback>
                        </Avatar>
                        <span className="lt:font-semibold lt:text-text-1">{patient.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{patient.stage}</TableCell>
                    <TableCell>
                      <div className="lt:w-28">
                        <Progress
                          value={patient.progress}
                          indicatorClassName={INDICATOR_TONE[patient.progressTone]}
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={TONE_CLASS[patient.tone]} showDot>
                        {patient.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </div>
    </div>
  )
}
