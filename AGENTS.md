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

## Static Asset Imports

**IMPORTANT**: When importing images and other static assets from `public/`:

- **Use relative paths**: `import img from "../public/assets/images/file.webp"`
- **NOT absolute paths**: ~~`import img from "/assets/images/file.webp"`~~ ❌
- **NOT with /public prefix**: ~~`import img from "/public/assets/images/file.webp"`~~ ❌

Files in `app/` directory should use `../public/` to reference static assets.

## TinaCMS Configuration

### CI/CD Requirements

TinaCMS requires cloud credentials to generate types (`tina/__generated__/`):

1. **Environment Secrets** (in `github-pages` environment):
   - `NEXT_PUBLIC_TINA_CLIENT_ID` - TinaCMS client ID
   - `TINA_TOKEN` - TinaCMS authentication token

2. **Workflow Configuration**:
   - CI workflows must specify `environment: github-pages` to access secrets
   - Run `npx tinacms build` before `npm run lint` or `npm run build`
   - Set environment variables in the build step

3. **Generated Files**:
   - `tina/__generated__/` is gitignored and generated during build
   - TypeScript compilation requires these generated types
   - Local dev uses `TINA_PUBLIC_IS_LOCAL=true` for offline mode

### Example CI Step

```yaml
- name: Generate TinaCMS types
  env:
    NEXT_PUBLIC_TINA_CLIENT_ID: ${{ secrets.NEXT_PUBLIC_TINA_CLIENT_ID }}
    TINA_TOKEN: ${{ secrets.TINA_TOKEN }}
  run: npx tinacms build
```

## Notes

- TinaCMS admin at `/admin` (requires `npm run dev` to generate)
- React 18 required (TinaCMS incompatible with React 19)
- Always run TinaCMS type generation before linting in CI
