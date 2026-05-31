import { GeocodingResponse } from '~/api/openMeteo/types/GeocodingResponse'
import { GeocodingSuggestion } from '~/modules/geolocation/types/GeocodingSuggestion'

export const toGeocodingSuggestions = (data: GeocodingResponse): GeocodingSuggestion[] => {
    return (data.results ?? [])
        .filter((r) => r.name && r.country && r.latitude !== undefined && r.longitude !== undefined)
        .map((r) => ({
            name: r.name!,
            country: r.country!,
            latitude: r.latitude!,
            longitude: r.longitude!,
        }))
}
