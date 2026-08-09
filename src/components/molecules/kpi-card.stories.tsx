import type { Meta, StoryObj } from "@storybook/react"

import { KpiCard } from "./kpi-card"

const meta: Meta<typeof KpiCard> = {
  title: "Molecules/KpiCard",
  component: KpiCard,
  decorators: [
    (Story) => (
      <div className="lt:max-w-xs lt:bg-background lt:p-8">
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof KpiCard>

export const Default: Story = {
  args: {
    label: "Ahorro mes",
    value: "$18,420",
    delta: "+4.3%",
    tone: "success",
    sparklinePoints: "0,22 20,20 40,16 60,17 80,8 100,4",
  },
}

export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
      <KpiCard
        label="Tareas completadas"
        value="86%"
        delta="+2.1%"
        tone="primary"
        sparklinePoints="0,18 20,20 40,12 60,14 80,10 100,6"
      />
      <KpiCard
        label="Próximo pago"
        value="3 días"
        delta="vencido"
        tone="error"
        sparklinePoints="0,6 20,8 40,10 60,16 80,20 100,24"
      />
    </div>
  ),
}
