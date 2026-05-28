---
paths:
  - "src/ui/**"
---

# UI komponenty

Komponenty v `src/ui/` jsou izolované, znovupoužitelné a routing-agnostic.

## Struktura adresáře

```
ComponentName/
  ComponentName.vue          # Hlavní komponenta — skládá sub-komponenty
  ComponentName.scss         # Styly (pokud potřeba)
  ComponentNameLabel.vue     # Sub-komponenta — jeden logický HTML uzel
  ComponentNameButton.vue    # Sub-komponenta — jeden logický HTML uzel
```

## Sub-komponenty

Každý logický celek (řádek, tlačítko, ikona, hodnota) extrahuj do vlastní sub-komponenty. Hlavní komponenta pak jen skládá sub-komponenty dohromady a předává jim props — neobsahuje žádnou vlastní HTML logiku.

Vzor podle `src/ui/CurrentWeatherCard/`:
- `CurrentWeatherCard.vue` — pouze skládá Temperature, WindSpeed, Time
- `CurrentWeatherCard-temperature.vue` — jeden `<div>` s labelem a hodnotou
- `CurrentWeatherCard-time.vue` — jeden `<div>` s časem

Výsledkem jsou malé, dobře čitelné soubory — každý řeší jednu věc.

## Definice komponenty

```vue
<template>
  <div class="ComponentName">{{ value }}</div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  onAction?: () => void
}>()
</script>
```

- `<script setup lang="ts">` vždy
- Props interface inline přes `defineProps<{ ... }>()`
- Nikdy `useRouter` — přijmi `onClick` / `onDetail` callback z rodiče
- Emity: `defineEmits<{ (e: 'action'): void }>()`

## CSS pojmenování (BEM-like)

```scss
.ComponentName {}           // root
.ComponentName-element {}   // potomek
.ComponentName--modifier {} // varianta
```

## SCSS

```scss
@use '~/styles/settings/spacing' as *;
@use '~/styles/settings/typography' as *;
```

Tailwind pro layout (flex, grid, gap, padding). SCSS pro vizuální styly (barva, font, border, shadow).
