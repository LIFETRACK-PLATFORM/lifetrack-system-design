# @lifetrack/system-design

Nightframe — the reusable design system UI library for LifeTrack. React 19 + TypeScript + Tailwind CSS v4, built with tsup and documented in Storybook.

## Install

This is a private workspace package (not published to a public registry). Add it as a dependency from the monorepo/workspace as usual for your package manager.

```bash
pnpm add @lifetrack/system-design
```

Peer dependencies: `react` and `react-dom`, both `>=19.0.0 <20`.

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@lifetrack/system-design"
import "@lifetrack/system-design/styles.css"

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```

Import `@lifetrack/system-design/styles.css` once, near the root of your app (it includes Tailwind's base layer plus every Nightframe token).

### Client components

Every component in this package is interactive (hooks, Radix primitives, event handlers). The published bundle is banner-marked with `"use client"`, so it's safe to import directly into a Next.js App Router server component tree.

### Dark mode

Nightframe is light-by-default; toggle dark mode by setting `class="dark"` on a root element (e.g. `<html>`), the same convention used by `next-themes`.

### Tailwind class prefix

This package's Tailwind build uses the `lt:` prefix (`@import "tailwindcss" prefix(lt);`) to avoid colliding with a consuming app's own Tailwind setup. This only matters if you reach into a component's `className` override — any Tailwind utility you pass in needs the `lt:` prefix too, e.g. `className="lt:mt-4"`.

## Components

**Atoms** — `avatar`, `badge`, `button`, `checkbox`, `input`, `label`, `progress`, `progress-ring`, `radio-group`, `separator`, `skeleton`, `spinner`, `switch`, `textarea`

**Molecules** — `alert`, `breadcrumb`, `calendar`, `card`, `empty-state`, `pagination`, `popover`, `sonner` (Toaster), `table`, `tabs`, `tooltip`

**Organisms** — `alert-dialog`, `combobox`, `command`, `dialog`, `dropdown-menu`, `select`, `sheet`

## Development

```bash
pnpm storybook     # dev server with live component docs
pnpm build         # build the library (dist/) + compiled styles.css
pnpm typecheck
pnpm lint
pnpm test
pnpm validate      # lint + typecheck + test + build:lib
```

## Releasing

Versioning and changelogs are managed with [Changesets](https://github.com/changesets/changesets):

```bash
pnpm changeset       # describe a change
pnpm version         # bump versions from pending changesets
pnpm release         # build + publish
```
