<template>
    <div class="DaySummary-weatherIcon">
        <component :is="icon" />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import DaySummaryProps from '~/ui/DaySummary/DaySummaryProps'
    import { weatherCodeToIcon } from '~/modules/weather/utils/weatherCodeToIcon'

    const props = defineProps<DaySummaryProps>()

    const icon = computed(() => weatherCodeToIcon(props.summary.dominantWeatherCode))
</script>
