<template>
    <div class="TemperatureChart">
        <VueApexCharts
            type="line"
            width="100%"
            height="250"
            :options="chartOptions"
            :series="series"
        />
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import VueApexCharts from 'vue3-apexcharts'
    import TemperatureChartProps from '~/ui/TemperatureChart/TemperatureChartProps'
    import { colors } from '~/styles/settings/colors'

    const props = defineProps<TemperatureChartProps>()

    const series = computed(() => [
        {
            name: 'Teplota',
            data: props.data.map(({ time, temperature }) => ({ x: time, y: temperature ?? null })),
        },
        {
            name: 'Pocitová teplota',
            data: props.data.map(({ time, apparentTemperature }) => ({
                x: time,
                y: apparentTemperature ?? null,
            })),
        },
    ])

    const chartOptions = {
        chart: {
            type: 'line' as const,
            toolbar: { show: false },
        },
        colors: [colors.chartTemperature, colors.chartApparent],
        stroke: { curve: 'smooth' as const, width: 2 },
        dataLabels: { enabled: false },
        xaxis: {
            type: 'datetime' as const,
            tickAmount: 8,
        },
        yaxis: { labels: { formatter: (val: number) => `${val} °C` } },
        tooltip: { y: { formatter: (val: number) => `${val} °C` } },
    }
</script>

<style lang="scss">
    @import '~/ui/TemperatureChart/TemperatureChart.scss';
</style>
