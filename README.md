# Heaven Effects

Website voor sierfontijnen en luxe effecten bij bruiloften en events.

| | |
|---|---|
| Soort | Klantsite |
| Gebouwd met | Lovable, daarna afgewerkt in code |
| Stack | TanStack Start (React 19, Vite), Tailwind CSS, shadcn/ui |
| Hosting | Vercel (`nitro: { preset: "vercel" }` in `vite.config.ts`). Wordt verhuisd naar Cloudflare, zie taak 01 in `systeem-team-taken`. |
| Package manager | bun |

## Lokaal draaien

```bash
bun install
bun run dev
```

Bouwen: `bun run build`.

## Waar staat wat

- `src/routes/`: de pagina's, één bestand per route
- `src/components/`: eigen componenten (`src/components/ui/` zijn standaard shadcn-componenten)
- `public/`: afbeeldingen en andere statische bestanden

Handboek voor het hele bouwproces: repo `Studio-Velora/systeem-website-bouw-proces`. Openstaande teamtaken: `Studio-Velora/systeem-team-taken`.
