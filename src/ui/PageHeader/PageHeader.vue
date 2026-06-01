<template>
    <h1 class="text-2xl font-bold">
        Weather Demo
        <span class="typo-link-large">({{ weatherStore.city }}: {{ weatherStore.temperature }}°C)</span>
    </h1>
</template>

<script setup lang="ts">
    import { useWeatherStore } from '~/modules/weather/stores/useWeatherStore'

    const weatherStore = useWeatherStore()
</script>

<style lang="scss">
    @import '~/ui/PageHeader/PageHeader.scss';
</style>
