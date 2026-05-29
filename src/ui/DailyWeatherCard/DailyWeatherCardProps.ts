import type { DailyForecast } from '~/modules/weather/types/DailyForecast'

interface DailyWeatherCardProps {
    day: DailyForecast
    onDetail: () => void
}

export default DailyWeatherCardProps
