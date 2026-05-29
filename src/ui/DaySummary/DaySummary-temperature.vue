<template>
    <div class="DaySummary-temperature">
        <span>{{ summary.temperatureMin ?? '—' }}</span>
        <span> / </span>
        <span>{{ summary.temperatureMax ?? '—' }} °C</span>
    </div>
</template>

<script setup lang="ts">
    import DaySummaryProps from '~/ui/DaySummary/DaySummaryProps'

    defineProps<DaySummaryProps>()
</script>
