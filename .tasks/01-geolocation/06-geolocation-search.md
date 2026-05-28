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
- [ ] Používá `Autocomplete` z `src/ui/Autocomplete/`
- [ ] Importuje `useGeolocationSearch` a `useGeolocationStore`
- [ ] Je v `src/modules/geolocation/` (ne v `src/ui/` — je napojená na store)

### Chování
- [ ] Psaní do inputu spustí `search(query)` po 300ms debounce
- [ ] Výběr položky zavolá `setLocation` a vyčistí input
- [ ] Zobrazuje aktuálně vybrané místo: `location.name, location.country`
- [ ] Suggestions jsou namapovány na `{ name: 'Praha, Czechia', value: JSON.stringify(suggestion) }`

### Konvence
- [ ] `<script setup lang="ts">` 
- [ ] Debounce implementován přes `setTimeout` + `onUnmounted` cleanup
- [ ] TypeScript: `npm run typecheck` prochází bez chyb
