import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWeatherStore = defineStore('weather', () => {
    const temperature = ref<number | null>(null)
    const city = ref<string | null>(null)

    const setWeather = (newCity: string, newTemperature: number | undefined) => {
        city.value = newCity
        temperature.value = newTemperature ?? null
    }

    return { temperature, city, setWeather }
})
