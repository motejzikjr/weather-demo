<template>
    <div class="ForecastChart">
        <VueApexCharts
            type="area"
            width="100%"
            height="400"
            :options="chartOptions"
            :series="series"
        />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import VueApexCharts from 'vue3-apexcharts'
    import ForecastChartProps from '~/ui/ForecastChart/ForecastChartProps'

    const props = defineProps<ForecastChartProps>()

    const categories = computed(() => props.forecast.map(({ date }) => date ?? ''))

    const series = computed(() => [
        {
            name: 'Min teplota',
            data: props.forecast.map(({ temperatureFrom }) => temperatureFrom ?? 0),
        },
        {
            name: 'Max teplota',
            data: props.forecast.map(({ temperatureTo }) => temperatureTo ?? 0),
        },
    ])

    const chartOptions = computed(() => ({
        chart: {
            type: 'area' as const,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: { curve: 'smooth' as const },
        xaxis: { categories: categories.value },
        yaxis: { labels: { formatter: (val: number) => `${val} °C` } },
        tooltip: { y: { formatter: (val: number) => `${val} °C` } },
    }))
</script>

<style lang="scss">
    @import '~/ui/ForecastChart/ForecastChart.scss';
</style>
