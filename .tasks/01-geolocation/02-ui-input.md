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
- [ ] Soubor `src/ui/InputText/InputText.vue` existuje
- [ ] `<script setup lang="ts">` s inline `defineProps<{ ... }>()`
- [ ] Props: `value: string`, `placeholder?: string`
- [ ] Emit: `update:modelValue` (nebo `change`) při každém vstupu

### Styl
- [ ] Třída `InputText` na root elementu
- [ ] `InputText.scss` importován v komponentě
- [ ] Vizuálně rozlišitelný input (border, padding, focus stav)

### Konvence
- [ ] Arrow funkce, žádný `function` keyword
- [ ] Žádný `useRouter` ani jiná routing logika
