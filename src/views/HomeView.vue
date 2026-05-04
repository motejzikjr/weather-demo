<template>
    <main class="p-8">
        <h1 class="text-2xl font-bold">Weather Demo</h1>
        <Floor :variant="FloorVariant.PRIMARY"> PRIMARY </Floor>
        <Floor :variant="FloorVariant.SECONDARY"> SECONDARY </Floor>
    </main>
</template>

<script setup lang="ts">
    import Floor from '~/ui/Floor/Floor.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
</script>
