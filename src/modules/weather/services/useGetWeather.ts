import { useFetchWeather } from '~/modules/weather/repositories/useFetchWeather'
import { toCurrentWeather } from '~/modules/weather/mappers/toCurrentWeather'
import { toDailyForecast } from '~/modules/weather/mappers/toDailyForecast'
import { Coordinates } from '~/modules/weather/types/Coordinates'

export const useGetWeather = () => {
    const fetchWeather = useFetchWeather()

    return async (coord: Coordinates) => {
        const input = {
            latitude: coord.lat,
            longitude: coord.lon,
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
