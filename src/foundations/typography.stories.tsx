import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj

const TYPE_SCALE: Array<{
  name: string
  className: string
  fontClassName: string
  spec: string
}> = [
  {
    name: "Display",
    className: "lt:text-display",
    fontClassName: "lt:font-heading",
    spec: "Space Grotesk / 56 / 700",
  },
  {
    name: "Heading 1",
    className: "lt:text-heading-1",
    fontClassName: "lt:font-heading",
    spec: "Space Grotesk / 40 / 700",
  },
  {
    name: "Headline lg",
    className: "lt:text-headline-lg",
    fontClassName: "lt:font-heading",
    spec: "Space Grotesk / 32 / 600",
  },
  {
    name: "Headline lg (mobile)",
    className: "lt:text-headline-lg-mobile",
    fontClassName: "lt:font-heading",
    spec: "Space Grotesk / 28 / 600",
  },
  {
    name: "Headline md",
    className: "lt:text-headline-md",
    fontClassName: "lt:font-heading",
    spec: "Space Grotesk / 24 / 600",
  },
  {
    name: "Heading 4",
    className: "lt:text-heading-4",
    fontClassName: "lt:font-heading",
    spec: "Space Grotesk / 18 / 600",
  },
  {
    name: "Body large",
    className: "lt:text-body-lg",
    fontClassName: "lt:font-sans",
    spec: "Manrope / 16 / 400",
  },
  {
    name: "Body",
    className: "lt:text-body-md",
    fontClassName: "lt:font-sans",
    spec: "Manrope / 14 / 400",
  },
  {
    name: "Label",
    className: "lt:text-label-md",
    fontClassName: "lt:font-label",
    spec: "Manrope / 12 / 500",
  },
  {
    name: "Metric lg",
    className: "lt:text-metric-lg",
    fontClassName: "lt:font-metric",
    spec: "JetBrains Mono / 28 / 700",
  },
  {
    name: "Metric xl",
    className: "lt:text-metric-xl",
    fontClassName: "lt:font-metric",
    spec: "JetBrains Mono / 28 / 700",
  },
  {
    name: "Metric sm",
    className: "lt:text-metric-sm",
    fontClassName: "lt:font-metric",
    spec: "JetBrains Mono / 16 / 600",
  },
]

const SAMPLE: Record<string, string> = {
  "Metric lg": "1,284.20",
  "Metric xl": "1,284.20",
  "Metric sm": "72%",
}

export const Default: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {TYPE_SCALE.map((t) => (
        <div
          key={t.name}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 24,
            borderBottom: "1px solid var(--lt-border)",
            paddingBottom: 16,
          }}
        >
          <span className={`${t.className} ${t.fontClassName}`}>{SAMPLE[t.name] ?? t.name}</span>
          <span
            className="lt:text-label-md lt:font-mono"
            style={{ color: "var(--lt-text-3)", whiteSpace: "nowrap" }}
          >
            {t.spec}
          </span>
        </div>
      ))}
    </div>
  ),
}
