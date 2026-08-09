import type { Meta, StoryObj } from "@storybook/react"
import { ArrowUp } from "lucide-react"

import { Avatar, AvatarFallback } from "../atoms/avatar"
import { Badge } from "../atoms/badge"
import { Progress } from "../atoms/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table"

const meta: Meta<typeof Table> = {
  title: "Molecules/Table",
  component: Table,
}

export default meta

type Story = StoryObj<typeof Table>

type Tone = "success" | "warning" | "primary"

const TONE_CLASS: Record<Tone, string> = {
  success: "lt:bg-success/15 lt:text-success",
  warning: "lt:bg-warning/15 lt:text-warning",
  primary: "lt:bg-primary/15 lt:text-primary",
}

const PATIENTS: {
  initials: string
  name: string
  stage: string
  progress: number
  status: string
  tone: Tone
}[] = [
  {
    initials: "SR",
    name: "Sofía Ramos",
    stage: "Tratamiento",
    progress: 55,
    status: "Activo",
    tone: "success",
  },
  {
    initials: "JC",
    name: "Julián Castro",
    stage: "Evaluación",
    progress: 15,
    status: "Pendiente",
    tone: "warning",
  },
  {
    initials: "MP",
    name: "Mora Peralta",
    stage: "Seguimiento",
    progress: 65,
    status: "Activo",
    tone: "success",
  },
  {
    initials: "EV",
    name: "Ezequiel Vidal",
    stage: "Alta",
    progress: 100,
    status: "Completado",
    tone: "primary",
  },
]

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              Paciente <ArrowUp size={12} strokeWidth={2} />
            </span>
          </TableHead>
          <TableHead>Etapa</TableHead>
          <TableHead>Progreso</TableHead>
          <TableHead>Estado</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {PATIENTS.map((p) => (
          <TableRow key={p.name}>
            <TableCell>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <Avatar size="sm">
                  <AvatarFallback>{p.initials}</AvatarFallback>
                </Avatar>
                {p.name}
              </div>
            </TableCell>
            <TableCell>{p.stage}</TableCell>
            <TableCell>
              <Progress value={p.progress} style={{ width: 120 }} />
            </TableCell>
            <TableCell>
              <Badge className={TONE_CLASS[p.tone]} showDot>
                {p.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}
