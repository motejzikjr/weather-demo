<template>
    <div class="DaySummary spacing-inset-primary">
        <DaySummaryWeatherIcon v-bind="$props" />
        <DaySummaryTemperature v-bind="$props" />
        <DaySummaryPrecipitation v-bind="$props" />
        <DaySummarySunshine v-bind="$props" />
    </div>
</template>

<script setup lang="ts">
    import DaySummaryProps from '~/ui/DaySummary/DaySummaryProps'
    import DaySummaryWeatherIcon from '~/ui/DaySummary/DaySummary-weatherIcon.vue'
    import DaySummaryTemperature from '~/ui/DaySummary/DaySummary-temperature.vue'
    import DaySummaryPrecipitation from '~/ui/DaySummary/DaySummary-precipitation.vue'
    import DaySummarySunshine from '~/ui/DaySummary/DaySummary-sunshine.vue'

    defineProps<DaySummaryProps>()
</script>

<style lang="scss">
    @import '~/ui/DaySummary/DaySummary.scss';
</style>
