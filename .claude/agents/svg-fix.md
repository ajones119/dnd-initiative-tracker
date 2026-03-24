---
name: svg-fix
---

# Project Instructions

## conventions

# Project Conventions

- Follow existing code style and patterns
- Write clear, descriptive commit messages
- Keep functions focused and small
- Add comments only where the logic isn't self-evident
- Always use named exports (no default exports)
- Do not add new packages without express permission; suggest them when relevant

## assets

- Condition icons live under `src/assets/conditions/`. After adding or replacing SVGs from icon sets, run `npm run normalize-condition-svgs` so root `<svg>` pixel dimensions are stripped and path fills use `currentColor` (see `scripts/normalize-condition-svgs.mjs`).
