export interface MinutelyResponse {
    minutely_15?: {
        time?: string[]
        temperature_2m?: number[]
        apparent_temperature?: number[]
        precipitation?: number[]
        sunshine_duration?: number[]
        weather_code?: number[]
        is_day?: number[]
    }
}
