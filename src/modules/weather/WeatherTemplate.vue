<template>
    <Floor :variant="FloorVariant.SECONDARY">
        <GeolocationSearch />
        <CurrentWeatherCard
            v-if="data"
            :current="data.current"
            :location="location.name"
        />
    </Floor>

    <Floor
        v-if="data"
        :variant="FloorVariant.PRIMARY"
    >
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            <DailyWeatherCard
                v-for="day in data.forecast"
                :key="day.date"
                :day="day"
                :on-detail="() => router.push('/weather/day/' + day.date)"
            />
        </div>
        <ForecastChart :forecast="data.forecast" />
    </Floor>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { storeToRefs } from 'pinia'
    import { useRouter } from 'vue-router'
    import { useGetWeather } from '~/modules/weather/services/useGetWeather'
    import { useWeatherStore } from '~/stores/useWeatherStore'
    import { useGeolocationStore } from '~/modules/geolocation/stores/useGeolocationStore'
    import GeolocationSearch from '~/modules/geolocation/GeolocationSearch.vue'
    import Floor from '~/ui/Floor/Floor.vue'
    import CurrentWeatherCard from '~/ui/CurrentWeatherCard/CurrentWeatherCard.vue'
    import ForecastChart from '~/ui/ForecastChart/ForecastChart.vue'
    import DailyWeatherCard from '~/ui/DailyWeatherCard/DailyWeatherCard.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import { CurrentWeather } from '~/modules/weather/types/CurrentWeather'
    import { DailyForecast } from '~/modules/weather/types/DailyForecast'

    type WeatherData = {
        current: CurrentWeather
        forecast: DailyForecast[]
    }

    const router = useRouter()
    const geolocationStore = useGeolocationStore()
    const { location } = storeToRefs(geolocationStore)
    const getWeather = useGetWeather()
    const weatherStore = useWeatherStore()
    const data = ref<WeatherData | undefined>(undefined)

    const fetchWeather = async () => {
        data.value = await getWeather()
        weatherStore.setWeather(location.value.name, data.value.current.temperature)
    }

    watch(location, fetchWeather, { immediate: true })
</script>
