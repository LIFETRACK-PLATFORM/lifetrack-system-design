import * as React from "react"
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  InfoIcon,
  OctagonXIcon,
  Search,
  Trash2,
} from "lucide-react"
import type { Meta, StoryObj } from "@storybook/react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/atoms/avatar"
import { Badge, StatusBadge } from "@/components/atoms/badge"
import { Button } from "@/components/atoms/button"
import { Checkbox } from "@/components/atoms/checkbox"
import { Input } from "@/components/atoms/input"
import { Label } from "@/components/atoms/label"
import { Progress } from "@/components/atoms/progress"
import { ProgressRing } from "@/components/atoms/progress-ring"
import { RadioGroup, RadioGroupItem } from "@/components/atoms/radio-group"
import { SearchInput } from "@/components/atoms/search-input"
import { Skeleton } from "@/components/atoms/skeleton"
import { Spinner } from "@/components/atoms/spinner"
import { Switch } from "@/components/atoms/switch"
import { Textarea } from "@/components/atoms/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/molecules/alert"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/molecules/breadcrumb"
import { Calendar } from "@/components/molecules/calendar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/molecules/card"
import { EmptyState } from "@/components/molecules/empty-state"
import { FormFieldItem } from "@/components/molecules/form-field"
import { KpiCard } from "@/components/molecules/kpi-card"
import {
  PageHeader,
  PageHeaderActions,
  PageHeaderContent,
  PageHeaderDescription,
  PageHeaderRow,
  PageHeaderTitle,
} from "@/components/molecules/page-header"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/molecules/popover"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/molecules/pagination"
import { Toaster } from "@/components/molecules/sonner"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/molecules/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/molecules/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/molecules/tooltip"
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
} from "@/components/organisms/alert-dialog"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/organisms/dialog"
import { Combobox } from "@/components/organisms/combobox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/organisms/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/organisms/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/organisms/select"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/organisms/sheet"
import { cn } from "@/lib/utils"

const COMBO_OPTIONS = [
  { value: "sofia-ramos", label: "Sofía Ramos" },
  { value: "sofia-beltran", label: "Sofía Beltrán" },
  { value: "sofia-ianni", label: "Sofía Ianni" },
]

const meta: Meta = {
  title: "Foundations/Catalog",
  parameters: {
    layout: "fullscreen",
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj

function Section({
  title,
  children,
  className,
}: {
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={cn("catalog-section", className)}>
      <div className="catalog-section-head">
        <h2 className="catalog-section-title">{title}</h2>
      </div>
      <div className="catalog-section-body">{children}</div>
    </section>
  )
}

function Group({
  label,
  children,
  className,
}: {
  label?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("catalog-group", className)}>
      {label ? <p className="catalog-group-label">{label}</p> : null}
      {children}
    </div>
  )
}

function Row({
  children,
  className,
  align = "center",
}: {
  children: React.ReactNode
  className?: string
  align?: "center" | "end"
}) {
  return (
    <div className={cn("catalog-row", align === "end" && "catalog-row--end", className)}>
      {children}
    </div>
  )
}

function CatalogPage() {
  const [calendarDate, setCalendarDate] = React.useState<Date | undefined>(new Date(2026, 7, 6))
  const [comboValue, setComboValue] = React.useState<string>()
  const [selectValue, setSelectValue] = React.useState("tratamiento")

  return (
    <TooltipProvider>
      <Toaster />
      <div className="catalog-page">
        <div className="catalog-stack">
          <header className="catalog-header">
            <p className="lt:font-mono lt:text-xs lt:font-medium lt:tracking-[0.06em] lt:text-primary lt:uppercase">
              Nightframe
            </p>
            <h1 className="lt:mt-2 lt:font-heading lt:text-headline-md lt:font-semibold lt:text-text-1">
              Catálogo de componentes
            </h1>
            <p className="lt:mt-3 lt:max-w-2xl lt:text-body-md lt:leading-relaxed lt:text-text-3">
              Vista rápida de todos los componentes con sus variantes principales. Para detalle
              interactivo, abrí la story individual en el sidebar.
            </p>
          </header>

          <Section title="01 — Atoms · Botones & badges">
            <Group label="Variantes">
              <Row>
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="success">Success</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="outline">Outline</Button>
              </Row>
            </Group>
            <Group label="Icon buttons">
              <Row>
                <Button variant="secondary" size="icon-lg" aria-label="Agregar">
                  +
                </Button>
                <Button variant="secondary" size="icon" aria-label="Agregar">
                  +
                </Button>
                <Button variant="secondary" size="icon-sm" aria-label="Agregar">
                  +
                </Button>
              </Row>
            </Group>
            <Group label="Badges">
              <Row>
                <Badge>Default</Badge>
                <Badge variant="success" showDot>
                  Activo
                </Badge>
                <Badge variant="warning" showDot>
                  Pendiente
                </Badge>
                <Badge variant="destructive" showDot>
                  Vencido
                </Badge>
                <StatusBadge status="active" />
                <StatusBadge status="pending" />
                <StatusBadge status="overdue" />
              </Row>
            </Group>
          </Section>

          <Section title="02 — Atoms · Formulario">
            <Group label="FormField (label + control + hint/error)">
              <div className="catalog-form-stack">
                <FormFieldItem label="Email" hint="Usaremos este correo para notificaciones.">
                  <Input type="email" placeholder="nombre@lifetrack.os" />
                </FormFieldItem>
                <FormFieldItem label="Monto" error="Ingresá un monto válido.">
                  <Input defaultValue="ccccc" aria-invalid placeholder="0.00" />
                </FormFieldItem>
              </div>
            </Group>
            <Group label="SearchInput">
              <SearchInput placeholder="Buscar tareas, personas, movimientos..." />
            </Group>
            <Group label="Campos sueltos">
              <div className="catalog-form-stack">
                <div className="catalog-form-field">
                  <Label className="lt:text-xs lt:font-semibold lt:text-text-3">Textarea</Label>
                  <Textarea placeholder="Notas sobre el plan..." />
                </div>
              </div>
            </Group>
            <Group label="Selección">
              <div className="catalog-chip-row">
                <div className="catalog-chip">
                  <Checkbox id="catalog-check" defaultChecked />
                  <Label htmlFor="catalog-check">Checkbox</Label>
                </div>
                <div className="catalog-chip">
                  <Switch id="catalog-switch" defaultChecked />
                  <Label htmlFor="catalog-switch">Switch</Label>
                </div>
                <RadioGroup defaultValue="a" className="catalog-radio-group">
                  <div className="catalog-radio-option">
                    <RadioGroupItem value="a" id="catalog-r1" />
                    <Label htmlFor="catalog-r1">A</Label>
                  </div>
                  <div className="catalog-radio-option">
                    <RadioGroupItem value="b" id="catalog-r2" />
                    <Label htmlFor="catalog-r2">B</Label>
                  </div>
                </RadioGroup>
              </div>
            </Group>
          </Section>

          <Section title="03 — Atoms · Feedback">
            <Group label="Progreso & carga">
              <Row align="end">
                <div className="catalog-item-box catalog-item-box--wide">
                  <Progress value={72} indicatorClassName="lt:bg-primary" />
                </div>
                <div className="catalog-item-box">
                  <ProgressRing value={72} />
                </div>
                <div className="catalog-item-box">
                  <Spinner />
                </div>
                <div className="catalog-item-box">
                  <Skeleton className="lt:h-10 lt:w-32" />
                </div>
              </Row>
            </Group>
            <Group label="Avatars">
              <Row>
                <Avatar>
                  <AvatarFallback>SR</AvatarFallback>
                </Avatar>
                <Avatar size="sm">
                  <AvatarFallback>JC</AvatarFallback>
                </Avatar>
                <AvatarGroup>
                  <Avatar size="sm">
                    <AvatarFallback>SR</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback>JC</AvatarFallback>
                  </Avatar>
                  <Avatar size="sm">
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <AvatarGroupCount>+3</AvatarGroupCount>
                </AvatarGroup>
              </Row>
            </Group>
            <Group label="KpiCard">
              <div style={{ maxWidth: 280 }}>
                <KpiCard
                  label="Ahorro mes"
                  value="$18,420"
                  delta="+4.3%"
                  tone="success"
                  sparklinePoints="0,22 20,20 40,16 60,17 80,8 100,4"
                />
              </div>
            </Group>
          </Section>

          <Section title="04 — Molecules · Alertas & cards">
            <Group label="Alertas">
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Alert>
                  <InfoIcon />
                  <AlertTitle>Atención</AlertTitle>
                  <AlertDescription>Mensaje informativo para el usuario.</AlertDescription>
                </Alert>
                <Alert variant="primary">
                  <Info />
                  <AlertTitle>Información clave</AlertTitle>
                  <AlertDescription>
                    Hay una actualización disponible para este plan.
                  </AlertDescription>
                </Alert>
                <Alert variant="success">
                  <CheckCircle2 />
                  <AlertTitle>Plan actualizado</AlertTitle>
                  <AlertDescription>Los cambios se guardaron correctamente.</AlertDescription>
                </Alert>
                <Alert variant="warning">
                  <AlertTriangle />
                  <AlertTitle>Sesión por vencer</AlertTitle>
                  <AlertDescription>Tu sesión expira en 5 minutos.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <OctagonXIcon />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>No se pudieron guardar los cambios.</AlertDescription>
                </Alert>
              </div>
            </Group>
            <Group label="Cards">
              <div className="catalog-grid-2">
                <Card style={{ width: 320, maxWidth: "100%" }}>
                  <CardContent style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <span className="lt:font-semibold lt:text-text-1">Sin header/footer</span>
                    <span className="lt:text-body-md lt:text-text-3">
                      Contenedor base para agrupar contenido relacionado.
                    </span>
                  </CardContent>
                </Card>
                <Card style={{ width: 320, maxWidth: "100%" }}>
                  <CardHeader>
                    <CardTitle>Plan de rehabilitación</CardTitle>
                    <CardAction>
                      <Badge className="lt:bg-success/15 lt:text-success" showDot>
                        Activo
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Etapa actual: Tratamiento · 3 de 4 sesiones completadas.
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="lt:justify-between lt:border-t lt:border-border lt:pt-4">
                    <span className="lt:text-label-md lt:text-text-3">Actualizado hace 2h</span>
                    <a href="#" className="lt:text-label-md lt:text-primary lt:no-underline">
                      Ver detalle →
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </Group>
          </Section>

          <Section title="05 — Molecules · Navegación">
            <Group label="Tabs">
              <Tabs defaultValue="resumen" className="lt:max-w-lg">
                <TabsList>
                  <TabsTrigger value="resumen">Resumen</TabsTrigger>
                  <TabsTrigger value="actividades">Actividades</TabsTrigger>
                  <TabsTrigger value="documentos">Documentos</TabsTrigger>
                </TabsList>
                <TabsContent value="resumen" className="lt:mt-4 lt:text-body-md lt:text-text-3">
                  Vista general del plan.
                </TabsContent>
              </Tabs>
            </Group>
            <Group label="Breadcrumb">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Rehab</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Planes</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Sofía Ramos</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </Group>
            <Group label="Paginación">
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
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">12</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </Group>
          </Section>

          <Section title="06 — Molecules · Datos & calendario">
            <div className="catalog-grid-split">
              <Group label="Calendario" className="lt:w-fit">
                <Calendar
                  mode="single"
                  defaultMonth={new Date(2026, 7, 1)}
                  selected={calendarDate}
                  onSelect={setCalendarDate}
                />
              </Group>
              <Group label="Tabla">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Paciente</TableHead>
                      <TableHead>Etapa</TableHead>
                      <TableHead>Estado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="lt:font-semibold lt:text-text-1">Sofía Ramos</TableCell>
                      <TableCell>Tratamiento</TableCell>
                      <TableCell>
                        <Badge variant="success" showDot>
                          Activo
                        </Badge>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="lt:font-semibold lt:text-text-1">
                        Julián Castro
                      </TableCell>
                      <TableCell>Evaluación</TableCell>
                      <TableCell>
                        <Badge variant="warning" showDot>
                          Pendiente
                        </Badge>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Group>
            </div>
          </Section>

          <Section title="07 — Molecules · Tooltips & toasts">
            <Group label="Tooltips">
              <Row>
                {(
                  [
                    ["default", "Default"],
                    ["primary", "Primary"],
                    ["success", "Success"],
                    ["warning", "Warning"],
                    ["destructive", "Destructive"],
                  ] as const
                ).map(([variant, label]) => (
                  <Tooltip key={variant} defaultOpen>
                    <TooltipTrigger asChild>
                      <Button variant="secondary" size="sm">
                        {label}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent variant={variant}>Tooltip {label.toLowerCase()}</TooltipContent>
                  </Tooltip>
                ))}
              </Row>
            </Group>
            <Group label="Toasts">
              <Row>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.success("Plan actualizado.")}
                >
                  Toast éxito
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.error("Error al guardar.")}
                >
                  Toast error
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.warning("Sesión por vencer.")}
                >
                  Toast warning
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toast.info("Informe pendiente.")}
                >
                  Toast info
                </Button>
              </Row>
            </Group>
          </Section>

          <Section title="08 — Molecules · Empty state">
            <Group>
              <EmptyState
                icon={<Search />}
                title="Sin resultados"
                description="No encontramos nada para tu búsqueda."
                className="lt:max-w-md"
              />
            </Group>
          </Section>

          <Section title="09 — Organisms · Dialogs">
            <Group label="Dialog">
              <Row>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      Dialog neutral
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar plan</DialogTitle>
                      <DialogDescription>
                        Modificá los detalles del plan de Sofía Ramos.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancelar</Button>
                      </DialogClose>
                      <Button>Guardar</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                {(
                  [
                    [
                      "primary",
                      Info,
                      "lt:border-primary/30 lt:bg-primary/10 lt:text-primary",
                      "default",
                    ],
                    [
                      "success",
                      CheckCircle2,
                      "lt:border-success/30 lt:bg-success/10 lt:text-success",
                      "success",
                    ],
                    [
                      "warning",
                      AlertTriangle,
                      "lt:border-warning/30 lt:bg-warning/10 lt:text-warning",
                      "warning",
                    ],
                    [
                      "destructive",
                      Trash2,
                      "lt:border-error/30 lt:bg-error/10 lt:text-error",
                      "destructive",
                    ],
                  ] as const
                ).map(([label, Icon, accent, variant]) => (
                  <Dialog key={label}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Dialog {label}
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader className="lt:gap-3">
                        <div
                          className={cn(
                            "lt:flex lt:size-10 lt:items-center lt:justify-center lt:rounded-[10px] lt:border",
                            accent
                          )}
                        >
                          <Icon className="lt:size-5" />
                        </div>
                        <div>
                          <DialogTitle>Dialog {label}</DialogTitle>
                          <DialogDescription>Ejemplo con icono tintado {label}.</DialogDescription>
                        </div>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button variant={variant}>Confirmar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ))}
              </Row>
            </Group>
            <Group label="Alert dialog">
              <Row>
                {(
                  [
                    ["primary", Info, "lt:bg-primary/15 lt:text-primary", "default"],
                    ["success", CheckCircle2, "lt:bg-success/15 lt:text-success", "success"],
                    ["warning", AlertTriangle, "lt:bg-warning/15 lt:text-warning", "warning"],
                    ["destructive", Trash2, "lt:bg-error/15 lt:text-error", "destructive"],
                  ] as const
                ).map(([label, Icon, media, variant]) => (
                  <AlertDialog key={label}>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Alert {label}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent size="sm">
                      <AlertDialogHeader>
                        <AlertDialogMedia className={media}>
                          <Icon className="lt:size-8" />
                        </AlertDialogMedia>
                        <AlertDialogTitle>Alert {label}</AlertDialogTitle>
                        <AlertDialogDescription>
                          Confirmación con tono {label}.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel variant="outline">Cancelar</AlertDialogCancel>
                        <AlertDialogAction variant={variant}>Confirmar</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                ))}
              </Row>
            </Group>
          </Section>

          <Section title="10 — Formularios avanzados & overlays">
            <Group label="Select & Combobox">
              <div className="catalog-form-stack">
                <FormFieldItem label="Etapa">
                  <Select value={selectValue} onValueChange={setSelectValue}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar etapa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="evaluacion">Evaluación</SelectItem>
                      <SelectItem value="tratamiento">Tratamiento</SelectItem>
                      <SelectItem value="seguimiento">Seguimiento</SelectItem>
                      <SelectItem value="alta">Alta</SelectItem>
                    </SelectContent>
                  </Select>
                </FormFieldItem>
                <FormFieldItem label="Paciente" hint="Buscá por nombre.">
                  <Combobox
                    options={COMBO_OPTIONS}
                    value={comboValue}
                    onValueChange={setComboValue}
                    placeholder="Buscar paciente..."
                  />
                </FormFieldItem>
              </div>
            </Group>
            <Group label="Popover · Dropdown · Sheet · Command">
              <Row>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm">
                      Popover
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="lt:w-56">
                    <p className="lt:text-body-md lt:text-text-1">Contenido del popover.</p>
                  </PopoverContent>
                </Popover>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Dropdown
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Editar plan</DropdownMenuItem>
                    <DropdownMenuItem>Duplicar</DropdownMenuItem>
                    <DropdownMenuItem variant="destructive">Eliminar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      Sheet
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Detalle del plan</SheetTitle>
                      <SheetDescription>Vista lateral con más contexto.</SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </Row>
              <div style={{ maxWidth: 360, marginTop: 16 }}>
                <Command className="lt:rounded-[10px] lt:border lt:border-border">
                  <CommandInput placeholder="Buscar acciones..." />
                  <CommandList>
                    <CommandEmpty>Sin resultados.</CommandEmpty>
                    <CommandGroup heading="Acciones">
                      <CommandItem>Nuevo plan</CommandItem>
                      <CommandItem>Buscar paciente</CommandItem>
                      <CommandItem>Ver calendario</CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </Group>
            <Group label="PageHeader">
              <PageHeader>
                <PageHeaderRow>
                  <PageHeaderContent>
                    <PageHeaderTitle>Pacientes</PageHeaderTitle>
                    <PageHeaderDescription>Vista de encabezado reutilizable.</PageHeaderDescription>
                  </PageHeaderContent>
                  <PageHeaderActions>
                    <Button size="sm">Acción</Button>
                  </PageHeaderActions>
                </PageHeaderRow>
              </PageHeader>
            </Group>
            <Group label="Examples">
              <p className="lt:mb-4 lt:text-body-md lt:text-text-3">
                Pantallas completas armadas con los componentes del sistema.
              </p>
              <Row>
                <Button variant="secondary" size="sm" asChild>
                  <a href="?path=/story/examples-dashboard--default">Dashboard →</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="?path=/story/examples-form-page--default">Form page →</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="?path=/story/examples-list-page--default">List page →</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="?path=/story/examples-rehab-plan--default">Rehab plan →</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="?path=/story/foundations-colors--default">Colors →</a>
                </Button>
                <Button variant="secondary" size="sm" asChild>
                  <a href="?path=/story/foundations-icons--default">Icons →</a>
                </Button>
              </Row>
            </Group>
          </Section>
        </div>
      </div>
    </TooltipProvider>
  )
}

export const AllComponents: Story = {
  name: "All components",
  render: () => <CatalogPage />,
}
