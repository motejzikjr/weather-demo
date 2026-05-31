import { useOpenMeteoApi } from '~/api/openMeteo/useOpenMeteoApi'
import { WeatherResponse } from '~/api/openMeteo/types/WeatherResponse'

type Input = {
    latitude: number
    longitude: number
    current: string
    daily: string
    forecast_days: number
}

export const useFetchWeather = () => {
    const openMeteoApi = useOpenMeteoApi()

    return async ({ latitude, longitude, current, daily, forecast_days }: Input) => {
        return await openMeteoApi.get<WeatherResponse>('/forecast', {
            latitude,
            longitude,
            current,
            daily,
            forecast_days,
        })
    }
}
