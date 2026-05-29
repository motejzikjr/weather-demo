# UI: InputText

## Cíl

Základní textový input jako izolovaná UI komponenta. Bude sloužit jako vstupní pole v Autocomplete komponente.

## Struktura souborů

```
src/ui/InputText/
  InputText.vue
  InputText.scss
```

## Akceptační kritéria

### Struktura
- [x] Soubor `src/ui/InputText/InputText.vue` existuje
- [x] `<script setup lang="ts">` s inline `defineProps<{ ... }>()`
- [x] Props: `value: string`, `placeholder?: string`
- [x] Emit: `update:modelValue` (nebo `change`) při každém vstupu

### Styl
- [x] Třída `InputText` na root elementu
- [x] `InputText.scss` importován v komponentě
- [x] Vizuálně rozlišitelný input (border, padding, focus stav)

### Konvence
- [x] Arrow funkce, žádný `function` keyword
- [x] Žádný `useRouter` ani jiná routing logika
