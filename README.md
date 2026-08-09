# @lifetrack/system-design

Nightframe — the reusable design system UI library for LifeTrack. React 19 + TypeScript + Tailwind CSS v4, built with tsup and documented in Storybook.

## Install

Published to npm as `@lifetrack/system-design` (tag `dev` en develop; `latest` en releases estables).

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
pnpm release         # build + publish (local; CI does this on develop)
```

Bump `version` in `package.json` (or run `pnpm version`) before pushing to `develop`. Jenkins publishes only if that exact version is not already on npm.

## CI/CD (Jenkins)

Mismo patrón que el **backend** (CI + CD separados) y `lifetrack-contracts` (publish npm).  
**No uses Multibranch** — siempre trabajás en `develop`, así que dos **Pipeline clásicos** apuntando a esa rama.

### Credentials (Jenkins → Manage Credentials)

| ID                      | Type              | Uso                                               |
| ----------------------- | ----------------- | ------------------------------------------------- |
| `npm-publish-token`     | Secret text       | Token npm con permiso **publish** en `@lifetrack` |
| `netlify-auth-token`    | Secret text       | Personal access token de Netlify                  |
| `netlify-site-id`       | Secret text       | Site ID del sitio Storybook en Netlify            |
| `github-token-userpass` | Username/password | GitHub PAT (ya usado en backend)                  |

### Job 1 — CI (`lifetrack-system-design`)

1. **New Item** → **Pipeline** (no Multibranch)
2. **Pipeline** → Definition: _Pipeline script from SCM_
3. SCM: Git → `git@github.com:LIFETRACK-PLATFORM/lifetrack-system-design.git`
4. **Branches to build**: `*/develop`
5. **Script Path**: `Jenkinsfile`
6. **Build Triggers**: GitHub hook trigger (push a `develop`)

```
push develop → Install → Validate (lint + types + test + build)
```

### Job 2 — CD (`lifetrack-system-design-cd`)

1. **New Item** → **Pipeline**
2. Mismo repo y rama `develop`
3. **Script Path**: `Jenkinsfile.cd`
4. **Build Triggers** → ☑ _Build after other projects are built_ → `lifetrack-system-design`

```
CI OK → Publish npm (si versión nueva) → Deploy Storybook (Netlify)
```

Así queda igual que `auth-service` + `auth-service-cd`: primero valida, y solo si pasa publica y despliega.

### npm token

En [npmjs.com](https://www.npmjs.com/) → Access Tokens → **Automation** (CI) con publish en el scope `@lifetrack`.

### Netlify

1. Crear sitio en [Netlify](https://app.netlify.com) (vacío, sin conectar repo).
2. Copiar **Site ID** (Site configuration → General → Site ID).
3. Crear **Personal access token** (User settings → Applications).
4. **Local:** copiar `.env.example` → `.env` y pegar los valores.
5. **Jenkins:** mismos valores como Credentials `netlify-site-id` y `netlify-auth-token`.

Deploy local:

```bash
cp .env.example .env   # completar NETLIFY_SITE_ID y NETLIFY_AUTH_TOKEN
pnpm deploy-storybook
```

O vincular una vez: `pnpm exec netlify link` (guarda site id en `.netlify/state.json`).

### Crear jobs en Jenkins (automático)

1. Jenkins → **Manage Jenkins** → **Script Console**
2. Pegar el contenido de `jenkins/setup-jobs.groovy` → **Run**
3. Crear las 4 Credentials de la tabla de arriba

Manual (si preferís UI): ver Job 1 y Job 2 más arriba.

### Flujo diario

```bash
# 1. Cambios + changeset (opcional)
pnpm changeset

# 2. Subir versión en package.json cuando quieras publicar
#    ej. 0.1.0-dev.0 → 0.1.0-dev.1

# 3. Push a develop
git push origin develop
# → CI valida → CD publica npm + despliega Storybook
```
