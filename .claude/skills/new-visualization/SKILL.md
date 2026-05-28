---
description: Přidá novou vizualizaci (graf nebo karty) do libovolného screenu. Použij když uživatel chce přidat nový graf, chart nebo datovou sekci do existující nebo nové stránky.
argument-hint: <název vizualizace> <typ: line|bar|area|cards>
---

# New visualization: $ARGUMENTS

## Existující views

!`find src/views -name "*.vue" | sort`

## Existující composables

!`find src/modules -name "use*.ts" | sort`

## Instrukce

Zjisti od uživatele (nebo odvoď z kontextu): do které view vizualizace patří a který composable ji bude poskytovat. Pak postupuj v tomto pořadí:

### 1. Type (`src/modules/<modul>/types/`)

Vytvoř typ pro jeden datový bod. Pole `time` je povinné, ostatní optional.

### 2. Mapper (`src/modules/<modul>/mappers/`)

Čistá funkce dle vzoru v pravidlech modulu. Extrahuj pouze pole která jsou skutečně fetchována.

### 3. Composable

Rozšíř existující composable cílové view: nový `ref`, volání mapperu v try bloku, přidání do return. Pokud composable ještě neexistuje, vytvoř ho dle vzoru v pravidlech modulu.

### 4. UI komponenta (`src/ui/<Název>/`)

Použij `vue3-apexcharts` komponentu `<apexchart>`:
- `width="100%"`, výška 200–300px dle hustoty dat
- `xaxis.type: 'datetime'` pro časové řady
- Barvy konzistentní s existujícími grafy: červená `#ef4444`, modrá `#3b82f6`, fialová `#a78bfa`, oranžová `#f97316`
- Tooltip s jednotkami přes `tooltip.y.formatter`

### 5. View

Přidej do cílové view uvnitř `<Floor :variant="FloorVariant.PRIMARY">` s nadpisem `<h2>`.

### Finální kontrola

Spusť `npm run typecheck` a oprav případné chyby.
