type RGB = [number, number, number]

const colorScale: { temp: number; rgb: RGB }[] = [
    { temp: -20, rgb: [0, 71, 171] }, // cobalt blue
    { temp: -10, rgb: [30, 144, 255] }, // dodger blue
    { temp: 0, rgb: [135, 206, 250] }, // light sky blue
    { temp: 10, rgb: [144, 238, 144] }, // light green
    { temp: 20, rgb: [255, 215, 0] }, // gold
    { temp: 30, rgb: [255, 69, 0] }, // orange red
    { temp: 40, rgb: [139, 0, 0] }, // dark red
]

const lerp = (a: number, b: number, t: number): number => Math.round(a + (b - a) * t)

const toHex = (r: number, g: number, b: number): string =>
    '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')

export const temperatureToColor = (temp: number): string => {
    const clamped = Math.max(colorScale[0].temp, Math.min(colorScale[colorScale.length - 1].temp, temp))

    const upperIndex = colorScale.findIndex(({ temp: t }) => t >= clamped)
    const upper = colorScale[upperIndex]
    const lower = colorScale[Math.max(0, upperIndex - 1)]

    if (lower === upper) return toHex(...upper.rgb)

    const t = (clamped - lower.temp) / (upper.temp - lower.temp)
    return toHex(
        lerp(lower.rgb[0], upper.rgb[0], t),
        lerp(lower.rgb[1], upper.rgb[1], t),
        lerp(lower.rgb[2], upper.rgb[2], t),
    )
}
