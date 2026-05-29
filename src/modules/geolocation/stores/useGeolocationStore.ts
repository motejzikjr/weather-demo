import { defineStore } from 'pinia'
import { ref } from 'vue'
import { GeocodingSuggestion } from '~/modules/geolocation/types/GeocodingSuggestion'

const DEFAULT_LOCATION: GeocodingSuggestion = {
    name: 'Praha',
    country: 'Czechia',
    latitude: 50.08,
    longitude: 14.42,
}

export const useGeolocationStore = defineStore('geolocation', () => {
    const location = ref<GeocodingSuggestion>(DEFAULT_LOCATION)

    const setLocation = (loc: GeocodingSuggestion) => {
        location.value = loc
    }

    return { location, setLocation }
})
