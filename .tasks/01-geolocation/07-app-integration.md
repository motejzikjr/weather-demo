# App integrace: geolocation

## Cíl

Zapojení geolocation do aplikace: odstranění hardcoded city tlačítek z `WeatherTemplate.vue`, přidání `GeolocationSearch` a napojení weather fetchování na koordináty z `useGeolocationStore`. Stávající `useWeatherStore` zůstane pro teplotu v headeru.

## Struktura souborů

```
src/modules/weather/WeatherTemplate.vue   # Refactor
src/modules/weather/repositories/
  useFetchWeather.ts                      # Aktualizace — koordináty ze store
```

## Akceptační kritéria

### WeatherTemplate
- [x] Tlačítka s hardcoded městy jsou odstraněna
- [x] `GeolocationSearch` je přidán do horního `<Floor>`
- [x] Weather se automaticky refetchuje když se změní `location` v geolocationStore
  - Implementace: `watch(location, fetchWeather, { immediate: true })`

### Weather fetching
- [x] `useGetWeather` nebo `useFetchWeather` čte koordináty z `useGeolocationStore` místo přijímání parametru
- [x] Stávající chování (Praha jako default) je zachováno díky default hodnotě ve store

### Chování aplikace
- [x] Při otevření aplikace se zobrazí počasí pro Prahu
- [x] Vyhledání a výběr jiného města aktualizuje počasí
- [x] `useWeatherStore` stále dostává aktuální teplotu a název města

### Konvence
- [x] TypeScript: `npm run typecheck` prochází bez chyb
- [x] `npm run lint` prochází bez chyb
