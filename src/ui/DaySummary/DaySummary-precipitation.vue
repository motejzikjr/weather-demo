<template>
    <div class="DaySummary-precipitation">
        <span>{{ summary.totalPrecipitation != null ? summary.totalPrecipitation.toFixed(1) : '—' }} mm</span>
    </div>
</template>

<script setup lang="ts">
    import DaySummaryProps from '~/ui/DaySummary/DaySummaryProps'

    defineProps<DaySummaryProps>()
</script>
