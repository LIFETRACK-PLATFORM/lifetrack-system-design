import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj

function Swatch({ name, varName }: { name: string; varName: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: 12,
          background: `var(${varName})`,
          border: "1px solid var(--lt-border)",
        }}
      />
      <span className="lt:text-label-md" style={{ color: "var(--lt-text-1)" }}>
        {name}
      </span>
      <span className="lt:text-label-md lt:font-mono" style={{ color: "var(--lt-text-3)" }}>
        {varName}
      </span>
    </div>
  )
}

function Group({
  label,
  swatches,
}: {
  label: string
  swatches: { name: string; varName: string }[]
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        className="lt:text-label-md"
        style={{ color: "var(--lt-primary)", textTransform: "uppercase" }}
      >
        {label}
      </div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {swatches.map((s) => (
          <Swatch key={s.varName} {...s} />
        ))}
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Group
        label="Superficies"
        swatches={[
          { name: "background", varName: "--lt-background" },
          { name: "surface-1", varName: "--lt-surface-1" },
          { name: "surface-2", varName: "--lt-surface-2" },
          { name: "surface-3", varName: "--lt-surface-3" },
          { name: "surface-4", varName: "--lt-surface-4" },
          { name: "surface-5", varName: "--lt-surface-5" },
        ]}
      />
      <Group
        label="Marca"
        swatches={[
          { name: "primary", varName: "--lt-primary" },
          { name: "primary-hover", varName: "--lt-primary-hover" },
          { name: "primary-active", varName: "--lt-primary-active" },
          { name: "accent-tint", varName: "--lt-accent-tint" },
          { name: "border", varName: "--lt-border" },
        ]}
      />
      <Group
        label="Semánticos"
        swatches={[
          { name: "success", varName: "--lt-success" },
          { name: "warning", varName: "--lt-warning" },
          { name: "error", varName: "--lt-error" },
        ]}
      />
      <Group
        label="Texto"
        swatches={[
          { name: "text-1", varName: "--lt-text-1" },
          { name: "text-3", varName: "--lt-text-3" },
        ]}
      />
    </div>
  ),
}
