# weather-demo

Vue demo aplikace vizualizující počasí přes Open-Meteo API.

## Stack

- Vue 3 + Composition API (`<script setup>`) + Pinia 2
- Vue Router 4, Vite 6, TypeScript 5.8.3 strict mode
- Tailwind CSS 4 (`@theme` v `src/assets/main.css`) + Sass
- ApexCharts / vue3-apexcharts, vue3-icons
- `~` alias → `src/`

## Příkazy

```bash
npm run dev        # dev server
npm run build      # vue-tsc + vite build
npm run typecheck  # vue-tsc --noEmit
npm run lint       # eslint
npm run lint:fix   # eslint --fix
npm run format     # prettier --write .
```

## Struktura

```
src/
  App.vue                         # Root komponenta (RouterView)
  main.ts                         # App bootstrap
  router/index.ts                 # Routes: /, /weather/day/:date (HashRouter)
  stores/                         # Globální Pinia stores
  modules/
    weather/
      mappers/                    # Čisté funkce: API response → doménový typ
      repositories/               # Volání API (useOpenMeteoApi wrapper)
      services/                   # Composables: stavová logika, data fetching
      types/                      # Rozhraní pro API i doménové typy
      utils/                      # Pomocné funkce (weatherCodeToIcon)
    geolocation/
      mappers/
      services/
      types/
  api/openMeteo/                  # Nízkoúrovňový fetch wrapper
  ui/                             # Izolované znovupoužitelné UI komponenty
  views/                          # Stránky napojené na router
  styles/settings/                # SCSS proměnné (spacing, typography)
  utils/                          # Globální utility (formatDateTime)
```

## API

- Weather: `https://api.open-meteo.com/v1/forecast` — denní + aktuální + 15min data
- Geocoding: `https://geocoding-api.open-meteo.com/v1/search` — vyhledávání míst

## Konvence

- **Arrow funkce vždy**: `export const foo = () => {}` — nikdy `function foo()`
- **`<script setup lang="ts">`** ve všech SFC
- **Props UI komponent v separátním souboru**: `ComponentNameProps.ts` s `export default`, importuj přes `defineProps<ComponentNameProps>()`
- **Žádné default exporty** kromě `router/index.ts` a `main.ts`
- **Žádné komentáře** pokud WHY není zřejmé z kódu
- UI komponenty jsou **routing-agnostic**: přijímají callbacky, nikdy nepoužívají `useRouter` uvnitř `src/ui/`
- Tailwind pro layout a spacing, SCSS pro vizuální styly specifické pro komponentu
- SCSS proměnné importovat přes `@use '~/styles/settings/...' as *`
