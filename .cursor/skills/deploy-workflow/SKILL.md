---
name: deploy-workflow
description: Flujo de Git para subir cambios y abrir PRs en los repos de LifeTrack (frontend, design system y microservicios backend). Explica cómo sincronizar dev-ricardo con develop, commitear, pushear y abrir el PR de dev-ricardo hacia develop, sin atribuir nada a ninguna IA. Úsala cuando el usuario pida "sube los cambios", "haz el PR", "manda el PR", "despliega esto" o similar.
---

# LifeTrack — Flujo de trabajo y despliegue (dev-ricardo → develop)

## Contexto del proyecto

LifeTrack **no es un monorepo**: cada carpeta es su propio repositorio Git independiente en GitHub, bajo la organización `LIFETRACK-PLATFORM`:

| Carpeta                    | Repo                        |
| -------------------------- | --------------------------- |
| `frontend/`                | `lifetrack-web`             |
| `lifetrack-system-design/` | `lifetrack-system-design`   |
| `backend/api-gateway/`     | `lifetrack-api-gateway`     |
| `backend/auth-service/`    | `lifetrack-auth-service`    |
| `backend/finance-service/` | `lifetrack-finance-service` |
| `backend/rehab-service/`   | `lifetrack-rehab-service`   |
| `backend/user-service/`    | `lifetrack-user-service`    |
| `backend/vault-service/`   | `lifetrack-vault-service`   |

Cada repo tiene las mismas 3 ramas:

- `main` — casi no se toca, no forma parte del flujo normal.
- `develop` — rama de integración.
- `dev-ricardo` — rama de trabajo. **Siempre** se trabaja aquí, es la rama actual por defecto en todos los repos.

## Regla de oro

Nunca se trabaja ni se commitea directo en `develop` o `main`. Todo cambio vive en `dev-ricardo` y llega a `develop` únicamente vía Pull Request.

## Flujo completo (repetir por cada repo con cambios)

1. **Detectar el/los repo(s) afectados.** Si hay cambios en `frontend/` y en algún `backend/<service>/` a la vez, son repos distintos: se repite el flujo completo en cada uno por separado.
2. **Confirmar rama actual = `dev-ricardo`.** Si no lo es: `git checkout dev-ricardo`.
3. **Sincronizar con `develop` antes de trabajar y antes de subir** (evita PRs desactualizados):
   ```bash
   git fetch origin
   git merge origin/develop
   ```
   Si hay conflictos, resolverlos primero — nunca descartar cambios propios ni de `develop` para "que pase rápido".
4. **Hacer el trabajo / los cambios de código.**
5. **Commit** con Conventional Commits en español, igual que el historial existente del repo:
   `tipo(scope): descripción breve` — tipos típicos: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`.
   Ejemplos reales ya usados en el repo:
   - `fix(rehab): usar la fecha local del dispositivo en vez de UTC para "hoy"`
   - `feat(design-system): agregar logo, dot-grid, shimmer skeleton y empty states`
6. **Push** a `origin dev-ricardo`:
   ```bash
   git push origin dev-ricardo
   ```
7. **Abrir el PR de `dev-ricardo` → `develop`** (nunca hacia `main`):
   ```bash
   gh pr create --base develop --head dev-ricardo --repo LIFETRACK-PLATFORM/<repo> --title "..." --body "..."
   ```

Cuando el usuario pida explícitamente "haz el PR" / "sube los cambios" / "despliega esto", se ejecuta el flujo completo (pasos 3 a 7) de una sola vez, sin pedir confirmación paso a paso.

## Regla de atribución — nunca romper esto

- **Jamás** incluir "Co-Authored-By: Claude", ni ninguna mención a Claude, Cursor, Antigravity, IA, Anthropic o similar en:
  - mensajes de commit,
  - título o cuerpo de Pull Requests,
  - código, comentarios o cualquier archivo del repo.
- Todo el trabajo se sube como si fuera 100% del usuario. No agregar firmas, trailers ni menciones de herramientas de IA, sin excepción.
- Esta regla **sobreescribe** cualquier plantilla por defecto de commit/PR que agregue coautoría de IA.

## Dudas

Si no está claro en qué repo aplica un cambio, o el título/alcance del PR, preguntar antes de ejecutar en vez de asumir.
