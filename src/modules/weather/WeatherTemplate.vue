<template>
    <Floor
        v-if="data"
        :variant="FloorVariant.SECONDARY"
    >
        <div class="flex gap-2">
            <Button
                v-for="(city, index) in cities"
                :key="index"
                :variant="city.name === currentCity?.name ? ButtonVariant.PRIMARY : ButtonVariant.SECONDARY"
                @click="onClick(city)"
            >
                {{ city.name }}
            </Button>
        </div>

        <CurrentWeatherCard
            v-if="currentCity && data"
            :current="data.current"
            :location="currentCity?.name"
        />
    </Floor>

    <Floor
        v-if="data"
        :variant="FloorVariant.PRIMARY"
    >
        <ForecastChart :forecast="data.forecast" />
    </Floor>
</template>

<script setup lang="ts">
    import { onMounted, ref, watch } from 'vue'
    import { useGetWeather } from '~/modules/weather/services/useGetWeather'
    import { useWeatherStore } from '~/stores/useWeatherStore'
    import Floor from '~/ui/Floor/Floor.vue'
    import CurrentWeatherCard from '~/ui/CurrentWeatherCard/CurrentWeatherCard.vue'
    import ForecastChart from '~/ui/ForecastChart/ForecastChart.vue'
    import Button from '~/ui/Button/Button.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import { CurrentWeather } from '~/modules/weather/types/CurrentWeather'
    import { DailyForecast } from '~/modules/weather/types/DailyForecast'
    import { ButtonVariant } from '~/ui/Button/ButtonVariant'
    import { City } from '~/modules/weather/types/City'

    type WeatherData = {
        current: CurrentWeather
        forecast: DailyForecast[]
    }

    const cities: City[] = [
        { name: 'Praha', coordinates: { lat: 50.08, lon: 14.42 } },
        { name: 'Sidney', coordinates: { lat: 33.86, lon: 151.2 } },
        { name: 'New York', coordinates: { lat: 40.71, lon: 74.0 } },
        { name: 'Longyearbyen', coordinates: { lat: 78.22, lon: 15.64 } },
        { name: 'Jakarta', coordinates: { lat: 6.17, lon: 106.82 } },
    ]

    const getWeather = useGetWeather()
    const weatherStore = useWeatherStore()
    const data = ref<WeatherData | undefined>(undefined)
    const currentCity = ref<City | undefined>(undefined)

    const onClick = (value: City) => {
        currentCity.value = value
    }

    onMounted(async () => {
        currentCity.value = cities[0]
    })

    watch(currentCity, async (newCurrentCity) => {
        if (!newCurrentCity) return
        data.value = await getWeather(newCurrentCity.coordinates)
        weatherStore.setWeather(newCurrentCity.name, data.value.current.temperature)
    })
</script>
