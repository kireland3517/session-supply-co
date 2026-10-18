# Session Supply Co.

Marketing and storefront site for a peer-support workforce company: organizational consulting, CEU-approved training, and downloadable tools (guides, templates, toolkits) that help behavioral health organizations integrate, supervise, and retain peer specialists.

**Who it's for:** community mental health centers, substance use treatment programs, FQHCs, and other organizations (VA and MD focus) that employ or plan to hire peer specialists.

**Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, Radix UI, wouter, Framer Motion; a small Express server serves the built static site. Package manager: pnpm.

## Run it

```bash
pnpm install
pnpm dev        # Vite dev server
```

Production build and serve:

```bash
pnpm build      # builds client and bundles server into dist/
pnpm start      # serves dist/public on PORT (default 3000)
```

Other scripts: `pnpm check` (type-check), `pnpm format` (Prettier).

## Pages

Home, Services, Shop, Product Detail, Resources, About, Contact. Design direction ("Editorial Calm") is documented in [ideas.md](ideas.md).

## License

MIT
