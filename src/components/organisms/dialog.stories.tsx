import { AlertTriangle, CheckCircle2, Info, Trash2, type LucideIcon } from "lucide-react"
import type { ComponentProps } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { cn } from "@/lib/utils"
import { Button } from "../atoms/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

type DialogTone = "primary" | "success" | "warning" | "destructive"

type ToneConfig = {
  trigger: string
  title: string
  description: string
  confirm: string
  Icon: LucideIcon
  accentClassName: string
  actionVariant: ComponentProps<typeof Button>["variant"]
}

const TONE_CONFIG: Record<DialogTone, ToneConfig> = {
  primary: {
    trigger: "Editar plan",
    title: "Editar plan",
    description: "Modificá los detalles del plan de rehabilitación de Sofía Ramos.",
    confirm: "Guardar cambios",
    Icon: Info,
    accentClassName: "lt:border-primary/30 lt:bg-primary/10 lt:text-primary",
    actionVariant: "default",
  },
  success: {
    trigger: "Ver resumen",
    title: "Plan actualizado",
    description: "Los cambios se guardaron y el equipo clínico ya puede ver el nuevo plan.",
    confirm: "Entendido",
    Icon: CheckCircle2,
    accentClassName: "lt:border-success/30 lt:bg-success/10 lt:text-success",
    actionVariant: "success",
  },
  warning: {
    trigger: "Reprogramar sesión",
    title: "Conflicto de agenda",
    description: "Esta sesión se superpone con otra cita del mismo paciente.",
    confirm: "Reprogramar",
    Icon: AlertTriangle,
    accentClassName: "lt:border-warning/30 lt:bg-warning/10 lt:text-warning",
    actionVariant: "warning",
  },
  destructive: {
    trigger: "Eliminar documento",
    title: "Eliminar informe médico",
    description: "El archivo dejará de estar disponible para todo el equipo.",
    confirm: "Eliminar",
    Icon: Trash2,
    accentClassName: "lt:border-error/30 lt:bg-error/10 lt:text-error",
    actionVariant: "destructive",
  },
}

function DialogByTone({ tone, withAccent = true }: { tone: DialogTone; withAccent?: boolean }) {
  const config = TONE_CONFIG[tone]
  const Icon = config.Icon

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{config.trigger}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className={withAccent ? "lt:gap-3" : undefined}>
          {withAccent ? (
            <div
              className={cn(
                "lt:flex lt:size-10 lt:shrink-0 lt:items-center lt:justify-center lt:rounded-[10px] lt:border",
                config.accentClassName
              )}
            >
              <Icon className="lt:size-5" strokeWidth={2} />
            </div>
          ) : null}
          <div className="lt:flex lt:flex-col lt:gap-2">
            <DialogTitle>{config.title}</DialogTitle>
            <DialogDescription>{config.description}</DialogDescription>
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button variant={config.actionVariant}>{config.confirm}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const meta: Meta<typeof Dialog> = {
  title: "Organisms/Dialog",
  component: Dialog,
  decorators: [
    (Story) => (
      <div className="lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
  name: "Neutral (primary)",
  render: () => <DialogByTone tone="primary" withAccent={false} />,
}

export const NeutralTones: Story = {
  name: "Neutral · all tones",
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-3">
      {(Object.keys(TONE_CONFIG) as DialogTone[]).map((tone) => (
        <DialogByTone key={tone} tone={tone} withAccent={false} />
      ))}
    </div>
  ),
}

export const Primary: Story = {
  render: () => <DialogByTone tone="primary" />,
}

export const Success: Story = {
  render: () => <DialogByTone tone="success" />,
}

export const Warning: Story = {
  render: () => <DialogByTone tone="warning" />,
}

export const Destructive: Story = {
  render: () => <DialogByTone tone="destructive" />,
}

export const Variants: Story = {
  render: () => (
    <div className="lt:flex lt:flex-wrap lt:gap-3">
      <DialogByTone tone="primary" withAccent={false} />
      {(Object.keys(TONE_CONFIG) as DialogTone[]).map((tone) => (
        <DialogByTone key={tone} tone={tone} />
      ))}
    </div>
  ),
}
