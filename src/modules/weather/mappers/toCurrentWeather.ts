import { WeatherResponse } from '~/api/openMeteo/types/WeatherResponse'
import { CurrentWeather } from '~/modules/weather/types/CurrentWeather'

export const toCurrentWeather = (data: WeatherResponse): CurrentWeather => {
    return {
        temperature: data?.current?.temperature_2m ?? undefined,
        windSpeed: data?.current?.windspeed_10m ?? undefined,
        time: data?.current?.time ?? undefined,
    }
}
