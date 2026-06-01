<template>
    <main>
        <Floor :variant="FloorVariant.SECONDARY">
            <Button
                :variant="ButtonVariant.PRIMARY"
                @click="router.back()"
            >
                Zpět
            </Button>
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
    import { ref, computed, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    import Floor from '~/ui/Floor/Floor.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import Button from '~/ui/Button/Button.vue'
    import { ButtonVariant } from '~/ui/Button/ButtonVariant'
    import DaySummary from '~/ui/DaySummary/DaySummary.vue'
    import TemperatureChart from '~/ui/TemperatureChart/TemperatureChart.vue'
    import PrecipitationChart from '~/ui/PrecipitationChart/PrecipitationChart.vue'
    import { useDayDetail } from '~/modules/weather/services/useDayDetail'
    import { formatDateTime } from '~/utils/formatDateTime'
    import type { MinutelySummary } from '~/modules/weather/types/MinutelySummary'
    import type { TemperatureChartPoint } from '~/modules/weather/types/TemperatureChartPoint'
    import type { PrecipitationChartPoint } from '~/modules/weather/types/PrecipitationChartPoint'

    const route = useRoute()
    const router = useRouter()
    const getDayDetail = useDayDetail()
    const date = route.params.date as string
    const summary = ref<MinutelySummary | null>(null)
    const temperatureChart = ref<TemperatureChartPoint[]>([])
    const precipitationChart = ref<PrecipitationChartPoint[]>([])
    const isLoading = ref(false)
    const error = ref<Error | null>(null)
    const formattedDate = computed(() => formatDateTime(date))

    onMounted(async () => {
        isLoading.value = true
        error.value = null

        try {
            const data = await getDayDetail(date)
            summary.value = data.summary
            temperatureChart.value = data.temperatureChart
            precipitationChart.value = data.precipitationChart
        } catch (err) {
            if (err instanceof Error) error.value = err
        } finally {
            isLoading.value = false
        }
    })
</script>
