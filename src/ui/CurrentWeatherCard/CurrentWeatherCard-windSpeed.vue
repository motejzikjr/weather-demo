<template>
    <div class="CurrentWeatherCard-windSpeed">
        <span class="CurrentWeatherCard-label pr-2">Rychlost větru:</span>
        <span class="CurrentWeatherCard-value font-bold">{{ current.windSpeed }} km/h</span>
    </div>
</template>

<script setup lang="ts">
    import CurrentWeatherCardProps from '~/ui/CurrentWeatherCard/CurrentWeatherCardProps'

    defineProps<CurrentWeatherCardProps>()
</script>
