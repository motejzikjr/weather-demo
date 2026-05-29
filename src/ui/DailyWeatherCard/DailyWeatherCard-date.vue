<template>
    <div class="DailyWeatherCard-date">
        {{ day.date ? formatDateTime(day.date) : '—' }}
    </div>
</template>

<script setup lang="ts">
    import DailyWeatherCardProps from '~/ui/DailyWeatherCard/DailyWeatherCardProps'
    import { formatDateTime } from '~/utils/formatDateTime'

    defineProps<DailyWeatherCardProps>()
</script>
