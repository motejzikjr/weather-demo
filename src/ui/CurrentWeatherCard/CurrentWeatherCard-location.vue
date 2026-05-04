<template>
    <div class="CurrentWeatherCard-location">
        <span class="CurrentWeatherCard-label pr-2">Lokalita:</span>
        <span class="CurrentWeatherCard-value font-bold">Praha</span>
    </div>
</template>

<script setup lang="ts">
    import CurrentWeatherCardProps from '~/ui/CurrentWeatherCard/CurrentWeatherCardProps'

    defineProps<CurrentWeatherCardProps>()
</script>
