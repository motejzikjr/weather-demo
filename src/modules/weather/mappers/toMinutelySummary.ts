import { MinutelyResponse } from '~/api/openMeteo/types/MinutelyResponse'
import { MinutelySummary } from '~/modules/weather/types/MinutelySummary'

export const toMinutelySummary = (data: MinutelyResponse): MinutelySummary => {
    const { temperature_2m, precipitation, sunshine_duration, weather_code } = data?.minutely_15 ?? {}
    const temperatureMin = temperature_2m && temperature_2m.length > 0 ? Math.min(...temperature_2m) : undefined
    const temperatureMax = temperature_2m && temperature_2m.length > 0 ? Math.max(...temperature_2m) : undefined
    const totalPrecipitation =
        precipitation && precipitation.length > 0 ? precipitation.reduce((sum, v) => sum + v, 0) : undefined
    const totalSunshineDuration =
        sunshine_duration && sunshine_duration.length > 0 ? sunshine_duration.reduce((sum, v) => sum + v, 0) : undefined
    let dominantWeatherCode: number | undefined

    if (weather_code && weather_code.length > 0) {
        const counts = new Map<number, number>()
        for (const code of weather_code) {
            counts.set(code, (counts.get(code) ?? 0) + 1)
        }
        dominantWeatherCode = [...counts.entries()].reduce((a, b) => (b[1] > a[1] ? b : a))[0]
    }

    return { dominantWeatherCode, temperatureMin, temperatureMax, totalPrecipitation, totalSunshineDuration }
}
