<template>
    <div class="DaySummary-sunshine">
        <span>{{ hours != null ? hours.toFixed(1) : '—' }} h</span>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import DaySummaryProps from '~/ui/DaySummary/DaySummaryProps'

    const props = defineProps<DaySummaryProps>()

    const hours = computed(() =>
        props.summary.totalSunshineDuration != null ? props.summary.totalSunshineDuration / 3600 : null,
    )
</script>
