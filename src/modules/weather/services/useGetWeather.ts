import { useFetchWeather } from '~/modules/weather/repositories/useFetchWeather'
import { toCurrentWeather } from '~/modules/weather/mappers/toCurrentWeather'
import { toDailyForecast } from '~/modules/weather/mappers/toDailyForecast'
import { useGeolocationStore } from '~/modules/geolocation/stores/useGeolocationStore'

export const useGetWeather = () => {
    const fetchWeather = useFetchWeather()
    const geolocationStore = useGeolocationStore()

    return async () => {
        const { latitude, longitude } = geolocationStore.location
        const data = await fetchWeather({
            latitude,
            longitude,
            current: 'temperature_2m,windspeed_10m',
            daily: 'weathercode,temperature_2m_max,temperature_2m_min',
            forecast_days: 7,
        })

        return {
            current: toCurrentWeather(data),
            forecast: toDailyForecast(data),
        }
    }
}
