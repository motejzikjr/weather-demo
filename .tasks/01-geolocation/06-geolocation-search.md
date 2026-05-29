# Komponenta: GeolocationSearch

## Cíl

Kompozitní komponenta napojená na `useGeolocationSearch` a `useGeolocationStore`. Zobrazuje autocomplete pro vyhledávání místa a název aktuálně vybraného místa. Vstup je debounced (300ms) aby se omezily zbytečné API volání.

## Struktura souborů

```
src/modules/geolocation/
  GeolocationSearch.vue
```

## Akceptační kritéria

### Struktura
- [x] Používá `Autocomplete` z `src/ui/Autocomplete/`
- [x] Importuje `useGeolocationSearch` a `useGeolocationStore`
- [x] Je v `src/modules/geolocation/` (ne v `src/ui/` — je napojená na store)

### Chování
- [x] Psaní do inputu spustí `search(query)` po 300ms debounce
- [x] Výběr položky zavolá `setLocation` a vyčistí input
- [x] Zobrazuje aktuálně vybrané místo: `location.name, location.country`
- [x] Suggestions jsou namapovány na `{ name: 'Praha, Czechia', value: JSON.stringify(suggestion) }`

### Konvence
- [x] `<script setup lang="ts">` 
- [x] Debounce implementován přes `setTimeout` + `onUnmounted` cleanup
- [x] TypeScript: `npm run typecheck` prochází bez chyb
