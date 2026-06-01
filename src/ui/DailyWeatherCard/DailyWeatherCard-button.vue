<template>
    <Button
        :variant="ButtonVariant.PRIMARY"
        @click="onDetail"
    >
        Detail
    </Button>
</template>

<script setup lang="ts">
    import DailyWeatherCardProps from '~/ui/DailyWeatherCard/DailyWeatherCardProps'
    import Button from '~/ui/Button/Button.vue'
    import { ButtonVariant } from '~/ui/Button/ButtonVariant'

    defineProps<DailyWeatherCardProps>()
</script>
