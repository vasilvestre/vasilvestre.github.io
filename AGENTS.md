<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# Agent Guidelines

## Commands

- **Dev**: `npm run dev` (starts TinaCMS + Next.js locally)
- **Build**: `npm run build` (tinacms build → next build → image optimizer)
- **Lint**: `npm run lint` | **Fix**: `npm run lint:fix` (prettier)
- **No test suite** configured

## Stack

Next.js 15 (App Router, static export) + TinaCMS + Tailwind CSS v4 + TypeScript (strict)

## Code Style

- **Formatting**: Prettier enforced via ESLint (`prettier/prettier: error`)
- **Imports**: Use `@/*` path alias for project imports
- **Types**: Strict mode enabled; avoid `any`, use proper typing
- **Components**: React functional components with TypeScript props
- **Naming**: PascalCase components, camelCase functions/variables

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `content/posts/` - Markdown content managed by TinaCMS
- `tina/config.ts` - TinaCMS schema and configuration
- `public/` - Static assets (images, admin build output)

## Notes

- TinaCMS admin at `/admin` (requires `npm run dev` to generate)
- React 18 required (TinaCMS incompatible with React 19)
