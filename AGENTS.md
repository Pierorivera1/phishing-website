# Project Instructions: Phishing UNFV

## Project Structure
- Source code is strictly located within `src/`.
- All routes, components, and utilities are under `src/app/`, `src/components/`, and `src/lib/`.

## Framework & Tooling
- **Next.js 15 (App Router):** Expect breaking changes compared to older versions. Refer to `node_modules/next/dist/docs/` if unsure.
- **Tailwind CSS 4.x:** Managed natively; there is no `tailwind.config.ts` file.
- **No database:** the platform is fully static/client-side; no persistence layer is used.

## Development
- **Start:** `npm run dev`
- **Lint:** `npm run lint`
- **Build:** `npm run build`

## Conventions
- Enforce strict TypeScript typing.
- Use `shadcn/ui` components (see `components.json`).
- Verify documentation (`README.md`, `docs/PLAN_TECNICO.md`) against actual file locations, as the documentation may occasionally be out of sync.
