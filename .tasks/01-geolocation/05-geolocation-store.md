# Geolocation store

## Cíl

Pinia store uchovávající vybrané místo (`GeocodingSuggestion`). Store slouží jako sdílený stav mezi `GeolocationSearch` a weather composablem — oba ho čtou/píší nezávisle na sobě.

## Struktura souborů

```
src/modules/geolocation/stores/
  useGeolocationStore.ts
```

## Typy / Props / Vzor

```ts
const DEFAULT_LOCATION: GeocodingSuggestion = {
  name: 'Praha',
  country: 'Czechia',
  latitude: 50.08,
  longitude: 14.42,
}
```

## Akceptační kritéria

### Struktura
- [ ] `useGeolocationStore` je Pinia store (defineStore composition API)
- [ ] Exportuje `location` (ref) a `setLocation(loc: GeocodingSuggestion)` 
- [ ] Default hodnota je Praha (lat: 50.08, lon: 14.42)

### Chování
- [ ] `setLocation` aktualizuje `location.value`
- [ ] Store je reaktivní — změna v jedné komponentě se propaguje do všech odběratelů

### Konvence
- [ ] Žádné default exporty (použít pojmenovaný export)
- [ ] TypeScript: `npm run typecheck` prochází bez chyb
