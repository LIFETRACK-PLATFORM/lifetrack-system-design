# Changesets

Este directorio se usa por [Changesets](https://github.com/changesets/changesets) para gestionar versiones y changelog.

Antes de mergear un cambio que afecte al paquete publicado corré:

```bash
pnpm changeset
```

y seguí el prompt para describir el cambio. Al hacer release: `pnpm version` (bump + changelog) y `pnpm release` (publish).
