import type { Component } from 'vue'
import {
    MdAcUnit,
    MdBeachAccess,
    MdFoggy,
    MdGrain,
    MdThunderstorm,
    MdUmbrella,
    MdWbCloudy,
    MdWbSunny,
} from 'vue3-icons/md'

export const weatherCodeToIcon = (code?: number): Component => {
    if (code === undefined) return MdWbCloudy
    if (code === 0) return MdWbSunny
    if (code <= 3) return MdWbCloudy
    if (code === 45 || code === 48) return MdFoggy
    if (code >= 51 && code <= 57) return MdGrain
    if (code >= 61 && code <= 67) return MdBeachAccess
    if (code >= 71 && code <= 77) return MdAcUnit
    if (code >= 80 && code <= 82) return MdUmbrella
    if (code === 85 || code === 86) return MdAcUnit
    if (code === 95 || code === 96 || code === 99) return MdThunderstorm

    return MdWbCloudy
}
