import { useOpenMeteoApi } from '~/api/openMeteo/useOpenMeteoApi'
import { useGeolocationStore } from '~/modules/geolocation/stores/useGeolocationStore'
import { toMinutelySummary } from '~/modules/weather/mappers/toMinutelySummary'
import { toTemperatureChart } from '~/modules/weather/mappers/toTemperatureChart'
import { toPrecipitationChart } from '~/modules/weather/mappers/toPrecipitationChart'
import type { MinutelyResponse } from '~/api/openMeteo/types/MinutelyResponse'

export const useDayDetail = () => {
    const api = useOpenMeteoApi()
    const geolocationStore = useGeolocationStore()

    return async (date: string) => {
        const { latitude, longitude } = geolocationStore.location
        const response = await api.get<MinutelyResponse>('/forecast', {
            latitude,
            longitude,
            minutely_15: 'temperature_2m,apparent_temperature,precipitation,sunshine_duration,weather_code,is_day',
            start_minutely_15: `${date}T00:00`,
            end_minutely_15: `${date}T23:45`,
        })

        return {
            summary: toMinutelySummary(response),
            temperatureChart: toTemperatureChart(response),
            precipitationChart: toPrecipitationChart(response),
        }
    }
}
