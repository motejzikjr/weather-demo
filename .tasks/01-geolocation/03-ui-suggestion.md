# UI: Autocomplete

## Cíl

Autocomplete komponenta skládající se z textového inputu a rozbalovacího seznamu návrhů. Routing-agnostic — komunikuje výhradně přes props a emity.

## Struktura souborů

```
src/ui/Autocomplete/
  Autocomplete.vue        # Hlavní komponenta — skládá Input + List
  Autocomplete.scss
  AutocompleteList.vue    # Rozbalovací seznam položek
  AutocompleteItem.vue    # Jedna položka seznamu
```

## Typy / Props / Vzor

```ts
// Autocomplete.vue
defineProps<{
  value: string
  placeholder?: string
  items: { name: string; value: string }[]
}>()
defineEmits<{
  (e: 'change', value: string): void
  (e: 'select', value: string): void
}>()
```

## Akceptační kritéria

### Struktura
- [x] Všechny 3 soubory (`Autocomplete.vue`, `AutocompleteList.vue`, `AutocompleteItem.vue`) existují
- [x] `Autocomplete.vue` skládá pouze sub-komponenty, neobsahuje přímou HTML logiku listu
- [x] `AutocompleteList.vue` renderuje `AutocompleteItem` pro každou položku
- [x] `AutocompleteItem.vue` emituje `select` při kliknutí

### Chování
- [x] List se zobrazí pouze pokud `items.length > 0`
- [x] Výběr položky emituje `select` s hodnotou `item.value`
- [x] Psaní do inputu emituje `change` s aktuální hodnotou

### Konvence
- [x] Žádný `useRouter` ani routing logika
- [x] BEM CSS třídy (`.Autocomplete`, `.Autocomplete-list`, `.Autocomplete-item`)
