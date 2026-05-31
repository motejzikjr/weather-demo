import { useGeocodingApi } from '~/api/openMeteo/useOpenMeteoApi'
import { GeocodingResponse } from '~/api/openMeteo/types/GeocodingResponse'
import { toGeocodingSuggestions } from '~/modules/geolocation/mappers/toGeocodingSuggestions'

export const useGeolocationSearch = () => {
    const api = useGeocodingApi()

    return async (query: string) => {
        const response = await api.get<GeocodingResponse>('/search', {
            name: query,
            count: 10,
            language: 'en',
            format: 'json',
        })
        return toGeocodingSuggestions(response)
    }
}
