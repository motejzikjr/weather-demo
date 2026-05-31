import { MinutelyResponse } from '~/api/openMeteo/types/MinutelyResponse'
import { TemperatureChartPoint } from '~/modules/weather/types/TemperatureChartPoint'

export const toTemperatureChart = (data: MinutelyResponse): TemperatureChartPoint[] => {
    const { time, temperature_2m, apparent_temperature } = data?.minutely_15 ?? {}

    return (time ?? []).map((t, i) => ({
        time: t,
        temperature: temperature_2m?.[i],
        apparentTemperature: apparent_temperature?.[i],
    }))
}
