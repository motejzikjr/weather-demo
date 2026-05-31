export interface GeocodingResponse {
    results?: {
        name?: string
        country?: string
        latitude?: number
        longitude?: number
    }[]
}
