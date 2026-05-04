<template>
    <div
        v-if="formattedTime"
        class="CurrentWeatherCard-time"
    >
        <span class="CurrentWeatherCard-label pr-2">Čas:</span>
        <span class="CurrentWeatherCard-value font-bold">{{ formattedTime }}</span>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import CurrentWeatherCardProps from '~/ui/CurrentWeatherCard/CurrentWeatherCardProps'
    import { formatDateTime } from '~/utils/formatDateTime'

    const props = defineProps<CurrentWeatherCardProps>()

    const formattedTime = computed(() => {
        if (!props.current.time) return undefined
        return formatDateTime(props.current.time)
    })
</script>
