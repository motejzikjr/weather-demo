<template>
    <div class="DailyWeatherCard-icon">
        <component :is="icon" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import DailyWeatherCardProps from '~/ui/DailyWeatherCard/DailyWeatherCardProps'
    import { weatherCodeToIcon } from '~/modules/weather/utils/weatherCodeToIcon'

    const props = defineProps<DailyWeatherCardProps>()

    const icon = computed(() => weatherCodeToIcon(props.day.code))
</script>
