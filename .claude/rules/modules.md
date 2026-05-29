---
paths:
  - "src/modules/**"
---

# Moduly

## Struktura modulu

```
module-name/
  mappers/        # Čisté funkce: API response → doménový typ
  repositories/   # Nízkoúrovňové volání API (wrappery useOpenMeteoApi)
  services/       # Composables: stavová logika, data fetching
  types/          # Rozhraní pro API response i doménové typy
  utils/          # Pomocné funkce specifické pro modul
```

## Typy

Všechna pole z API response jsou `optional`. Typ deklaruj pouze pro pole která jsou skutečně fetchována — odpovídá tomu co je v parametrech volání API.

## Mapper

Čistá funkce, arrow const export, transformuje API response na doménový typ:

```ts
export const toXxxData = (data: ApiResponse): DomainType[] => {
  const { field_a, field_b } = data?.section ?? {}
  return (field_a ?? []).map((value, i) => ({
    mappedField: value,
    otherField: field_b?.[i],
  }))
}
```

## Service

Service je **bezstavová** factory funkce — vrací async funkci, která fetchuje a mapuje data. Reaktivní stav (`ref`, `isLoading`, `error`) vlastní volající komponenta nebo view, ne service.

```ts
export const useXxx = () => {
  const api = useOpenMeteoApi()
  const store = useXxxStore()

  return async (param: string) => {
    const { field } = store.value
    const response = await api.get<ApiResponse>(endpoint, { field, param })
    return toXxxData(response)
  }
}
```

## Pinia store (pouze pokud stav sdílí více komponent)

```ts
export const useXxxStore = defineStore('xxx', () => {
  const value = ref<Type | null>(null)
  const setValue = (v: Type) => { value.value = v }
  return { value, setValue }
})
```
