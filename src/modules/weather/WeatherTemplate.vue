<template>
    <Floor
        v-if="data"
        :variant="FloorVariant.SECONDARY"
    >
        <CurrentWeatherCard :current="data.current" />
    </Floor>
    <Floor
        v-if="data"
        :variant="FloorVariant.PRIMARY"
    >
        <ForecastChart :forecast="data.forecast" />
    </Floor>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import { useGetWeather } from '~/modules/weather/services/useGetWeather'
    import Floor from '~/ui/Floor/Floor.vue'
    import CurrentWeatherCard from '~/ui/CurrentWeatherCard/CurrentWeatherCard.vue'
    import ForecastChart from '~/ui/ForecastChart/ForecastChart.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import { CurrentWeather } from '~/modules/weather/types/CurrentWeather'
    import { DailyForecast } from '~/modules/weather/types/DailyForecast'

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
