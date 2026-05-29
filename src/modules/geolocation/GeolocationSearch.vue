<template>
    <div class="GeolocationSearch">
        <span class="GeolocationSearch-location">{{ store.location.name }}, {{ store.location.country }}</span>
        <Autocomplete
            :value="query"
            placeholder="Search location..."
            :items="items"
            @change="onInputChange"
            @select="onSelect"
        />
    </div>
</template>

<script setup lang="ts">
    import { computed, ref, onUnmounted } from 'vue'
    import Autocomplete from '~/ui/Autocomplete/Autocomplete.vue'
    import { useGeolocationSearch } from '~/modules/geolocation/services/useGeolocationSearch'
    import { useGeolocationStore } from '~/modules/geolocation/stores/useGeolocationStore'
    import { GeocodingSuggestion } from '~/modules/geolocation/types/GeocodingSuggestion'

    const store = useGeolocationStore()
    const search = useGeolocationSearch()

    const query = ref('')
    const suggestions = ref<GeocodingSuggestion[]>([])
    let debounceTimer: ReturnType<typeof setTimeout> | null = null

    const items = computed(() =>
        suggestions.value.map((s) => ({
            name: `${s.name}, ${s.country}`,
            value: JSON.stringify(s),
        })),
    )

    const onInputChange = async (value: string) => {
        query.value = value
        if (debounceTimer) clearTimeout(debounceTimer)
        debounceTimer = setTimeout(async () => {
            suggestions.value = await search(value)
        }, 300)
    }

    const onSelect = (value: string) => {
        const suggestion = JSON.parse(value) as GeocodingSuggestion
        store.setLocation(suggestion)
        query.value = ''
        suggestions.value = []
    }

    onUnmounted(() => {
        if (debounceTimer) clearTimeout(debounceTimer)
    })
</script>
