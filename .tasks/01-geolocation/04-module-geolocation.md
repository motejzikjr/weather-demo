# Modul: geolocation — typy, mapper, composable

## Cíl

Datová vrstva geolocation modulu: typy pro API response a doménový typ, mapper a composable `useGeolocationSearch` volající Open-Meteo Geocoding API. API klient se rozšíří o geocoding endpoint.

## Struktura souborů

```
src/modules/geolocation/
  types/
    GeocodingResponse.ts    # API response typ (optional pole)
    GeocodingSuggestion.ts  # Doménový typ jednoho výsledku
  mappers/
    toGeocodingSuggestions.ts
  services/
    useGeolocationSearch.ts # Composable pro vyhledávání

src/api/openMeteo/
  useOpenMeteoApi.ts        # Rozšíření o geocodingApi (nová base URL)
```

## Typy / Props / Vzor

```ts
// GeocodingSuggestion.ts
export interface GeocodingSuggestion {
  name: string
  country: string
  latitude: number
  longitude: number
}

// GeocodingResponse.ts — pouze fetchovaná pole
export interface GeocodingResponse {
  results?: {
    name?: string
    country?: string
    latitude?: number
    longitude?: number
  }[]
}
```

```ts
// useOpenMeteoApi.ts — přidat vedle stávajícího weatherApi
const GEOCODING_BASE_URL = 'https://geocoding-api.open-meteo.com/v1'
export const useGeocodingApi = () => { /* stejná struktura jako useOpenMeteoApi */ }
```

## Akceptační kritéria

### Typy
- [ ] `GeocodingResponse` má pole `results` jako optional array s optional string/number poli
- [ ] `GeocodingSuggestion` má `name`, `country`, `latitude`, `longitude` (vše required)

### Mapper
- [ ] `toGeocodingSuggestions(data: GeocodingResponse): GeocodingSuggestion[]`
- [ ] Filtruje záznamy kde chybí povinná pole (name, country, latitude, longitude)

### Composable
- [ ] `useGeolocationSearch()` vrací `{ suggestions, isLoading, error, search }`
- [ ] `search(query: string)` volá geocoding API s `name`, `count: 10`, `language: 'en'`, `format: 'json'`
- [ ] Při chybě nastaví `error` a vyčistí `suggestions`

### API
- [ ] `useGeocodingApi` v `useOpenMeteoApi.ts` používá `https://geocoding-api.open-meteo.com/v1`
- [ ] TypeScript: `npm run typecheck` prochází bez chyb
