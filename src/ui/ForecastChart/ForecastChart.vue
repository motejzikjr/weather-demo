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

    const filteredForecast = computed(() =>
        props.forecast.filter(({ date }) => date !== undefined),
    )

    const series = computed(() => [
        {
            name: 'Rozsah teplot',
            type: 'rangeArea',
            data: filteredForecast.value.map(({ date, temperatureFrom, temperatureTo }) => ({
                x: date as string,
                y: [temperatureFrom ?? 0, temperatureTo ?? 0],
            })),
        },
        {
            name: 'Max teplota',
            type: 'line',
            data: filteredForecast.value.map(({ date, temperatureTo }) => ({
                x: date as string,
                y: temperatureTo ?? 0,
            })),
        },
        {
            name: 'Min teplota',
            type: 'line',
            data: filteredForecast.value.map(({ date, temperatureFrom }) => ({
                x: date as string,
                y: temperatureFrom ?? 0,
            })),
        },
    ])

    const chartOptions = computed(() => ({
        chart: {
            type: 'rangeArea' as const,
            toolbar: { show: false },
            zoom: { enabled: false },
        },
        dataLabels: { enabled: false },
        stroke: {
            curve: 'smooth' as const,
            width: [0, 2, 2],
        },
        fill: { opacity: [0.3, 0, 0] },
        yaxis: { labels: { formatter: (val: number) => `${val} °C` } },
        tooltip: { y: { formatter: (val: number) => `${val} °C` } },
    }))
</script>

<style lang="scss">
    @import '~/ui/ForecastChart/ForecastChart.scss';
</style>
