<template>
    <div class="DailyWeatherCard-temperature">
        <span>{{ day.temperatureFrom ?? '—' }}</span>
        <span> – </span>
        <span>{{ day.temperatureTo ?? '—' }} °C</span>
    </div>
</template>

<script setup lang="ts">
    import DailyWeatherCardProps from '~/ui/DailyWeatherCard/DailyWeatherCardProps'

    defineProps<DailyWeatherCardProps>()
</script>
