<template>
    <main>
        <Floor :variant="FloorVariant.PRIMARY">
            <PageHeader />
        </Floor>
        <Floor :variant="FloorVariant.SECONDARY">
            <div class="flex gap-4">
                <Button
                    :variant="ButtonVariant.PRIMARY"
                    @click="router.push('/')"
                >
                    Týdenní přehled
                </Button>
                <Button
                    :variant="ButtonVariant.SECONDARY"
                    :disabled="isPrevDisabled"
                    @click="router.push('/weather/day/' + prevDate)"
                >
                    Předchozí den ({{ formatDateShort(prevDate) }})
                </Button>
                <Button
                    :variant="ButtonVariant.SECONDARY"
                    :disabled="isNextDisabled"
                    @click="router.push('/weather/day/' + nextDate)"
                >
                    Následující den ({{ formatDateShort(nextDate) }})
                </Button>
            </div>
            <h1 class="DayDetailView-title">{{ formattedDate }}</h1>
            <div
                v-if="isLoading"
                class="DayDetailView-loading"
            >
                Načítám...
            </div>
            <div
                v-else-if="error"
                class="DayDetailView-error"
            >
                {{ error.message }}
            </div>
            <DaySummary
                v-else-if="summary"
                :summary="summary"
            />
        </Floor>
        <Floor
            v-if="!isLoading && !error"
            :variant="FloorVariant.PRIMARY"
        >
            <TemperatureChart :data="temperatureChart" />
            <PrecipitationChart :data="precipitationChart" />
        </Floor>
    </main>
</template>

<script setup lang="ts">
    import { ref, computed, watch } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Floor from '~/ui/Floor/Floor.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import Button from '~/ui/Button/Button.vue'
    import { ButtonVariant } from '~/ui/Button/ButtonVariant'
    import DaySummary from '~/ui/DaySummary/DaySummary.vue'
    import TemperatureChart from '~/ui/TemperatureChart/TemperatureChart.vue'
    import PrecipitationChart from '~/ui/PrecipitationChart/PrecipitationChart.vue'
    import PageHeader from '~/ui/PageHeader/PageHeader.vue'
    import { useDayDetail } from '~/modules/weather/services/useDayDetail'
    import { formatDateTime } from '~/utils/formatDateTime'
    import type { MinutelySummary } from '~/modules/weather/types/MinutelySummary'
    import type { TemperatureChartPoint } from '~/modules/weather/types/TemperatureChartPoint'
    import type { PrecipitationChartPoint } from '~/modules/weather/types/PrecipitationChartPoint'

    const route = useRoute()
    const router = useRouter()
    const getDayDetail = useDayDetail()

    const shiftDate = (dateStr: string, days: number): string => {
        const d = new Date(dateStr)
        d.setUTCDate(d.getUTCDate() + days)
        return d.toISOString().slice(0, 10)
    }

    const formatDateShort = (dateStr: string): string =>
        new Intl.DateTimeFormat('cs-CZ', { day: 'numeric', month: 'long', timeZone: 'UTC' }).format(new Date(dateStr))

    const summary = ref<MinutelySummary | null>(null)
    const temperatureChart = ref<TemperatureChartPoint[]>([])
    const precipitationChart = ref<PrecipitationChartPoint[]>([])
    const isLoading = ref(false)
    const error = ref<Error | null>(null)
    const date = computed(() => route.params.date as string)
    const prevDate = computed(() => shiftDate(date.value, -1))
    const nextDate = computed(() => shiftDate(date.value, 1))
    const today = new Date().toISOString().slice(0, 10)
    const isPrevDisabled = computed(() => prevDate.value < today)
    const isNextDisabled = computed(() => nextDate.value > shiftDate(today, 15))
    const formattedDate = computed(() => formatDateTime(date.value))

    watch(
        () => route.params.date,
        async (newDate) => {
            isLoading.value = true
            error.value = null
            summary.value = null
            try {
                const data = await getDayDetail(newDate as string)
                summary.value = data.summary
                temperatureChart.value = data.temperatureChart
                precipitationChart.value = data.precipitationChart
            } catch (err) {
                if (err instanceof Error) error.value = err
            } finally {
                isLoading.value = false
            }
        },
        { immediate: true },
    )
</script>
