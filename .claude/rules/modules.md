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

## Composable (service)

```ts
export const useXxx = (param: Ref<string> | string) => {
  const data = ref<Type | null>(null)
  const isLoading = ref(true)
  const error = ref<Error | null>(null)

  const fetchData = async () => {
    isLoading.value = true
    error.value = null
    try {
      const api = useOpenMeteoApi()
      const response = await api.get<ApiResponse>(endpoint, params)
      data.value = toXxxData(response)
    } catch (err) {
      if (err instanceof Error) error.value = err
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => fetchData())

  return { data, isLoading, error, fetchData }
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
