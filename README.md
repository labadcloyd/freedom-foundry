# Freedom Foundry — Landing Page

Next.js (App Router) + Tailwind + shadcn/ui + Radix, styled around a literal
forge/foundry visual identity: iron/charcoal base, an ember-to-molten-gold
heat gradient, and a stamped-metal-plate motif used for services and process
steps.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `app/layout.tsx` — root layout, loads Big Shoulders / IBM Plex Sans / IBM Plex Mono via `next/font/google`
- `app/page.tsx` — composes the page from `components/`
- `app/globals.css` — Tailwind entry + the `.heat-text` gradient utility
- `components/` — one file per section (`nav`, `hero`, `trade-ticker`, `services`, `process`, `cta`, `footer`)
- `components/ui/button.tsx` — shadcn/ui Button, wired to the custom `ember` color as its default variant
- `tailwind.config.ts` — the color tokens (`iron`, `ember`, `gold`, `steel`, `plate`) and font families
- `lib/utils.ts` — `cn()` helper shadcn components expect

## Notes

- Only the `Button` component is included. Add more shadcn/ui components as
  needed with `npx shadcn@latest add <component>` — `components.json` is
  already configured.
- `@radix-ui/react-slot` is a peer dependency of the shadcn Button
  (`asChild` prop) — install it with `npm install @radix-ui/react-slot`.
- All copy (services, process steps, trade list) is placeholder — swap in
  real pricing, portfolio links, and contact details before shipping.
- The trade ticker list in `components/trade-ticker.tsx` is the fastest place
  to reflect the actual industries you serve.
