import { AlertTriangle, CheckCircle2, Info, Trash2, type LucideIcon } from "lucide-react"
import type { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../atoms/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog"

type DialogTone = "primary" | "success" | "warning" | "destructive"

type ToneConfig = {
  label: string
  trigger: string
  title: string
  description: string
  confirm: string
  Icon: LucideIcon
  mediaClassName: string
  actionVariant: ComponentProps<typeof Button>["variant"]
}

const TONE_CONFIG: Record<DialogTone, ToneConfig> = {
  primary: {
    label: "Primary",
    trigger: "Dar de alta",
    title: "Confirmar alta médica",
    description: "Esta acción cerrará el plan activo de Sofía Ramos.",
    confirm: "Confirmar",
    Icon: Info,
    mediaClassName: "lt:bg-primary/15 lt:text-primary",
    actionVariant: "default",
  },
  success: {
    label: "Success",
    trigger: "Activar plan",
    title: "Activar plan de seguimiento",
    description: "El plan quedará visible para el equipo clínico asignado.",
    confirm: "Activar",
    Icon: CheckCircle2,
    mediaClassName: "lt:bg-success/15 lt:text-success",
    actionVariant: "success",
  },
  warning: {
    label: "Warning",
    trigger: "Salir sin guardar",
    title: "Hay cambios sin guardar",
    description: "Si salís ahora, se perderán las notas de la sesión de hoy.",
    confirm: "Salir igual",
    Icon: AlertTriangle,
    mediaClassName: "lt:bg-warning/15 lt:text-warning",
    actionVariant: "warning",
  },
  destructive: {
    label: "Destructive",
    trigger: "Eliminar paciente",
    title: "Eliminar registro del paciente",
    description: "Esta acción no se puede deshacer. Se borrarán historial y documentos.",
    confirm: "Eliminar",
    Icon: Trash2,
    mediaClassName: "lt:bg-error/15 lt:text-error",
    actionVariant: "destructive",
  },
}

function AlertDialogByTone({ tone, withMedia = true }: { tone: DialogTone; withMedia?: boolean }) {
  const config = TONE_CONFIG[tone]
  const Icon = config.Icon

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">{config.trigger}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          {withMedia ? (
            <AlertDialogMedia className={config.mediaClassName}>
              <Icon className="lt:size-8" strokeWidth={2} />
            </AlertDialogMedia>
          ) : null}
          <AlertDialogTitle>{config.title}</AlertDialogTitle>
          <AlertDialogDescription>{config.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="outline">Cancelar</AlertDialogCancel>
          <AlertDialogAction variant={config.actionVariant}>{config.confirm}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

const meta: Meta<typeof AlertDialog> = {
  title: "Organisms/AlertDialog",
  component: AlertDialog,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof AlertDialog>

export const Default: Story = {
  name: "Neutral (primary)",
  render: () => <AlertDialogByTone tone="primary" withMedia={false} />,
}

export const NeutralTones: Story = {
  name: "Neutral · all tones",
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-3">
      {(Object.keys(TONE_CONFIG) as DialogTone[]).map((tone) => (
        <AlertDialogByTone key={tone} tone={tone} withMedia={false} />
      ))}
    </div>
  ),
}

export const Primary: Story = {
  render: () => <AlertDialogByTone tone="primary" />,
}

export const Success: Story = {
  render: () => <AlertDialogByTone tone="success" />,
}

export const Warning: Story = {
  render: () => <AlertDialogByTone tone="warning" />,
}

export const Destructive: Story = {
  render: () => <AlertDialogByTone tone="destructive" />,
}

export const Variants: Story = {
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-3">
      <AlertDialogByTone tone="primary" withMedia={false} />
      {(Object.keys(TONE_CONFIG) as DialogTone[]).map((tone) => (
        <AlertDialogByTone key={tone} tone={tone} />
      ))}
    </div>
  ),
}
