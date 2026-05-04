<template>
    <Floor
        v-if="data"
        :variant="FloorVariant.PRIMARY"
    >
        {{ data.current.temperature }}
    </Floor>
</template>

<script setup lang="ts">
    import Floor from '~/ui/Floor/Floor.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import { useGetWeather } from '~/modules/weather/services/useGetWeather'
    import { CurrentWeather } from '~/modules/weather/types/CurrentWeather'
    import { DailyForecast } from '~/modules/weather/types/DailyForecast'
    import { onMounted, ref } from 'vue'

    type WeatherData = {
        current: CurrentWeather
        forecast: DailyForecast[]
    }

    const getWeather = useGetWeather()
    const data = ref<WeatherData | undefined>(undefined)

    onMounted(async () => {
        data.value = await getWeather()
    })
</script>
