import { ref } from 'vue'
import { useGeocodingApi } from '~/api/openMeteo/useOpenMeteoApi'
import { GeocodingResponse } from '~/modules/geolocation/types/GeocodingResponse'
import { GeocodingSuggestion } from '~/modules/geolocation/types/GeocodingSuggestion'
import { toGeocodingSuggestions } from '~/modules/geolocation/mappers/toGeocodingSuggestions'

export const useGeolocationSearch = () => {
    const suggestions = ref<GeocodingSuggestion[]>([])
    const isLoading = ref(false)
    const error = ref<Error | null>(null)

    const search = async (query: string) => {
        isLoading.value = true
        error.value = null
        try {
            const api = useGeocodingApi()
            const response = await api.get<GeocodingResponse>('/search', {
                name: query,
                count: 10,
                language: 'en',
                format: 'json',
            })
            suggestions.value = toGeocodingSuggestions(response)
        } catch (err) {
            if (err instanceof Error) error.value = err
            suggestions.value = []
        } finally {
            isLoading.value = false
        }
    }

    return { suggestions, isLoading, error, search }
}
