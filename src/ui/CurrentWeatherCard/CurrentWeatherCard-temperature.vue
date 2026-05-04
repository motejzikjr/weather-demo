<template>
    <div class="CurrentWeatherCard-temperature">
        <span class="CurrentWeatherCard-label pr-2">Aktuální teplota:</span>
        <span class="CurrentWeatherCard-value font-bold">{{ current.temperature }} °C</span>
    </div>
</template>

<script setup lang="ts">
    import CurrentWeatherCardProps from '~/ui/CurrentWeatherCard/CurrentWeatherCardProps'

    defineProps<CurrentWeatherCardProps>()
</script>
