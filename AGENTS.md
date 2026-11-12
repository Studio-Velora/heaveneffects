<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

<!-- STUDIO-VELORA:BEGIN -->
## Project (Studio Velora)

Website voor sierfontijnen en luxe effecten bij bruiloften en events. Stack: TanStack Start (React 19, Vite), Tailwind CSS, shadcn/ui; gebouwd met Lovable. Hosting: Vercel (`nitro: { preset: "vercel" }` in `vite.config.ts`). Wordt verhuisd naar Cloudflare, zie taak 01 in `systeem-team-taken`.

### Commando's
- `bun install`, `bun run dev`, `bun run build`, `bun run lint`

### Waar staat wat
- Pagina's: `src/routes/` (één bestand per route). Begin daar.
- Eigen componenten: `src/components/`.

### Niet lezen tenzij echt nodig (bespaart tokens)
- `src/components/ui/`: ± 46 standaard shadcn-componenten, niet aanpassen
- `src/routeTree.gen.ts`: wordt automatisch gegenereerd
- `bun.lock`, `bun.lockb`, `package-lock.json`: lockfiles
- `public/` en andere afbeeldingen; `node_modules/`, `dist/`, `.output/`

### Regels
- Gekoppeld aan Lovable: geen force push, geen gepushte commits herschrijven, repo nooit hernoemen.
- Grotere wijzigingen in een branch met een PR, niet direct op `main`.
- Geen API-sleutels, wachtwoorden of tokens in de code; die horen in omgevingsvariabelen.
- Teksten op de site zijn Nederlands.
<!-- STUDIO-VELORA:END -->
