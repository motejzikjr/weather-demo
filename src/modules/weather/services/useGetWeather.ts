import { useFetchWeather } from '~/modules/weather/repositories/useFetchWeather'
import { toCurrentWeather } from '~/modules/weather/mappers/toCurrentWeather'
import { toDailyForecast } from '~/modules/weather/mappers/toDailyForecast'

export const useGetWeather = () => {
    const fetchWeather = useFetchWeather()

    return async () => {
        const input = {
            latitude: 50.08,
            longitude: 14.42,
            current: 'temperature_2m,windspeed_10m',
            daily: 'weathercode,temperature_2m_max,temperature_2m_min',
            forecast_days: 7,
        }
        const data = await fetchWeather(input)

        const current = toCurrentWeather(data)
        const forecast = toDailyForecast(data)

        return { current, forecast }
    }
}
