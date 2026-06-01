---
description: Zpracuje task soubor — implementuje feature podle akceptačních kritérií, spustí typecheck a odškrtne splněná kritéria. Použij když uživatel chce implementovat konkrétní task.
argument-hint: <cesta k task souboru>
disable-model-invocation: true
---

# Process task: $ARGUMENTS

## Instrukce

Postupuj v tomto pořadí:

### 1. Přečti task soubor

Pomocí nástroje Read přečti task soubor na cestě `$ARGUMENTS` (odstraň úvodní `@` pokud je přítomno). Pak projdi `## Cíl` a `## Akceptační kritéria`. Pokud zadání odkazuje na jiné tasky jako závislosti, ověř že existují (`find src/`).

### 2. Implementuj

Implementuj feature podle akceptačních kritérií. Dodržuj konvence projektu z pravidel (`<script setup lang="ts">`, arrow funkce, BEM naming, atd.). Props UI komponent definuj v separátním souboru `ComponentNameProps.ts` a importuj přes `defineProps<ComponentNameProps>()`.

### 3. Zkontroluj TypeScript a lint

Spusť `npm run typecheck` a `npm run lint`. Oprav všechny chyby před pokračováním.

### 4. Odškrtni kritéria

V task souboru nahraď `- [ ]` za `- [x]` u každého splněného kritéria.

### 5. Shrnutí

Stručně reportuj: co vzniklo, které soubory byly vytvořeny nebo upraveny, zda typecheck a lint prošly.
