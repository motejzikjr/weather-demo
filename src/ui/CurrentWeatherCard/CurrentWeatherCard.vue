<template>
    <div class="CurrentWeatherCard flex flex-col gap-2 spacing-inset-primary border-2 rounded-lg w-max">
        <CurrentWeatherCardLocation v-bind="$props" />
        <CurrentWeatherCardTemperature v-bind="$props" />
        <CurrentWeatherCardWindSpeed v-bind="$props" />
        <CurrentWeatherCardTime v-bind="$props" />
    </div>
</template>

<script setup lang="ts">
    import CurrentWeatherCardProps from '~/ui/CurrentWeatherCard/CurrentWeatherCardProps'
    import CurrentWeatherCardTemperature from '~/ui/CurrentWeatherCard/CurrentWeatherCard-temperature.vue'
    import CurrentWeatherCardWindSpeed from '~/ui/CurrentWeatherCard/CurrentWeatherCard-windSpeed.vue'
    import CurrentWeatherCardTime from '~/ui/CurrentWeatherCard/CurrentWeatherCard-time.vue'
    import CurrentWeatherCardLocation from '~/ui/CurrentWeatherCard/CurrentWeatherCard-location.vue'

    defineProps<CurrentWeatherCardProps>()
</script>

<style lang="scss">
    @import '~/ui/CurrentWeatherCard/CurrentWeatherCard.scss';
</style>
