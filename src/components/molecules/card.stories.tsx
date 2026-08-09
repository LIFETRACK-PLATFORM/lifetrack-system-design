import type { Meta, StoryObj } from "@storybook/react"

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <div style={{ width: 320 }}>
      <Card>
        <CardHeader>
          <CardTitle>Project settings</CardTitle>
          <CardDescription>Manage your project preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content goes here, describing the project in more detail.</p>
        </CardContent>
        <CardFooter>
          <p>Last updated 2 days ago.</p>
        </CardFooter>
      </Card>
    </div>
  ),
}
