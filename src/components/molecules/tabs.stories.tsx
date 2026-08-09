import type { Meta, StoryObj } from "@storybook/react"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs"

const meta: Meta<typeof Tabs> = {
  title: "Molecules/Tabs",
  component: Tabs,
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Tabs defaultValue="resumen">
        <TabsList>
          <TabsTrigger value="resumen">Resumen</TabsTrigger>
          <TabsTrigger value="actividades">Actividades</TabsTrigger>
          <TabsTrigger value="documentos">Documentos</TabsTrigger>
          <TabsTrigger value="configuracion">Configuración</TabsTrigger>
        </TabsList>
        <TabsContent value="resumen">Vista general del plan de rehabilitación.</TabsContent>
        <TabsContent value="actividades">Historial de sesiones y actividades.</TabsContent>
        <TabsContent value="documentos">Estudios e informes médicos.</TabsContent>
        <TabsContent value="configuracion">Preferencias del plan.</TabsContent>
      </Tabs>
    </div>
  ),
}
