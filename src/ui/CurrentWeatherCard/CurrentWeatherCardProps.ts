import { CurrentWeather } from '~/modules/weather/types/CurrentWeather'

interface CurrentWeatherCardProps {
    current: CurrentWeather
    location: string
}

export default CurrentWeatherCardProps
