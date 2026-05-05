<template>
    <main>
        <Floor :variant="FloorVariant.PRIMARY">
            <h1 class="text-2xl font-bold">
                Weather Demo
                <span class="typo-link-large">({{ weatherStore.city }}: {{ weatherStore.temperature }}°C)</span>
            </h1>
        </Floor>
        <WeatherTemplate />
    </main>
</template>

<script setup lang="ts">
    import Floor from '~/ui/Floor/Floor.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import WeatherTemplate from '~/modules/weather/WeatherTemplate.vue'
    import { useWeatherStore } from '~/stores/useWeatherStore'

    const weatherStore = useWeatherStore()
</script>
