---
scope: project
alwaysApply: true
description: conventions
---

# Project Conventions

- Follow existing code style and patterns
- Write clear, descriptive commit messages
- Keep functions focused and small
- Add comments only where the logic isn't self-evident
- Always use named exports (no default exports)
- Do not add new packages without express permission; suggest them when relevant

## Condition SVGs

- New icons in `src/assets/conditions/`: run `npm run normalize-condition-svgs` (see `scripts/normalize-condition-svgs.mjs`) so inline size styles are removed and fills use `currentColor`. Avoid gradient `id` strings that look like file basenames (e.g. `broken-heart-zone`), which can confuse the SVG/Vite pipeline into resolving a missing `.svg` file.
