<template>
    <div class="PrecipitationChart">
        <VueApexCharts
            type="bar"
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
    import PrecipitationChartProps from '~/ui/PrecipitationChart/PrecipitationChartProps'
    import { colors } from '~/styles/settings/colors'

    const props = defineProps<PrecipitationChartProps>()

    const series = computed(() => [
        {
            name: 'Srážky',
            data: props.data.map(({ time, precipitation }) => ({
                x: time,
                y: precipitation ?? null,
            })),
        },
    ])

    const chartOptions = {
        chart: {
            type: 'bar' as const,
            toolbar: { show: false },
        },
        colors: [colors.chartPrecipitation],
        dataLabels: { enabled: false },
        xaxis: { type: 'datetime' as const },
        yaxis: { labels: { formatter: (val: number) => `${val} mm` } },
        tooltip: { y: { formatter: (val: number) => `${val} mm` } },
    }
</script>

<style lang="scss">
    @import '~/ui/PrecipitationChart/PrecipitationChart.scss';
</style>
