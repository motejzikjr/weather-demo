import { MinutelyResponse } from '~/modules/weather/types/MinutelyResponse'
import { PrecipitationChartPoint } from '~/modules/weather/types/PrecipitationChartPoint'

export const toPrecipitationChart = (data: MinutelyResponse): PrecipitationChartPoint[] => {
    const { time, precipitation } = data?.minutely_15 ?? {}

    return (time ?? []).map((t, i) => ({
        time: t,
        precipitation: precipitation?.[i],
    }))
}
