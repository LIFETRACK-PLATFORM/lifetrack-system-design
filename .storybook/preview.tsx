import type { Decorator, Preview } from "@storybook/react"
import * as React from "react"
import "../src/styles.storybook.css"

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) ?? "dark"

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    document.body.style.background = theme === "dark" ? "#0A0A0C" : "#F6F6F7"
  }, [theme])

  return <Story />
}

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: "Nightframe color mode",
      toolbar: {
        title: "Theme",
        icon: "mirror",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: "dark",
  },
  decorators: [withTheme],
}

export default preview
