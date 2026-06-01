<template>
    <main>
        <Floor :variant="FloorVariant.PRIMARY">
            <PageHeader />
        </Floor>
        <WeatherTemplate />
    </main>
</template>

<script setup lang="ts">
    import Floor from '~/ui/Floor/Floor.vue'
    import { FloorVariant } from '~/ui/Floor/FloorVariant'
    import WeatherTemplate from '~/modules/weather/WeatherTemplate.vue'
    import PageHeader from '~/ui/PageHeader/PageHeader.vue'
</script>
