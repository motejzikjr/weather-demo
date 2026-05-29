<template>
    <div class="DailyWeatherCard">
        <DailyWeatherCardDate v-bind="$props" />
        <DailyWeatherCardIcon v-bind="$props" />
        <DailyWeatherCardTemperature v-bind="$props" />
        <DailyWeatherCardButton v-bind="$props" />
    </div>
</template>

<script setup lang="ts">
    import DailyWeatherCardProps from '~/ui/DailyWeatherCard/DailyWeatherCardProps'
    import DailyWeatherCardDate from '~/ui/DailyWeatherCard/DailyWeatherCard-date.vue'
    import DailyWeatherCardIcon from '~/ui/DailyWeatherCard/DailyWeatherCard-icon.vue'
    import DailyWeatherCardTemperature from '~/ui/DailyWeatherCard/DailyWeatherCard-temperature.vue'
    import DailyWeatherCardButton from '~/ui/DailyWeatherCard/DailyWeatherCard-button.vue'

    defineProps<DailyWeatherCardProps>()
</script>

<style lang="scss">
    @import '~/ui/DailyWeatherCard/DailyWeatherCard.scss';
</style>
