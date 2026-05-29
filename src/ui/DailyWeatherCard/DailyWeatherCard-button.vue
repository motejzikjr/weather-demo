<template>
    <button
        class="DailyWeatherCard-button"
        @click="onDetail"
    >
        Detail
    </button>
</template>

<script setup lang="ts">
    import DailyWeatherCardProps from '~/ui/DailyWeatherCard/DailyWeatherCardProps'

    defineProps<DailyWeatherCardProps>()
</script>
