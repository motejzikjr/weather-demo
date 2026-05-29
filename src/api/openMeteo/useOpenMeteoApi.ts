import { UseOpenMeteoApiError } from '~/api/openMeteo/useOpenMeteoApiError'

const WEATHER_BASE_URL = 'https://api.open-meteo.com/v1'
const GEOCODING_BASE_URL = 'https://geocoding-api.open-meteo.com/v1'

type Params = Record<string, string | number | boolean | string[]>

const buildUrl = (baseUrl: string, endpoint: string, params?: Params): string => {
    const url = new URL(`${baseUrl}${endpoint}`)

    if (params) {
        for (const [key, value] of Object.entries(params)) {
            if (Array.isArray(value)) {
                url.searchParams.set(key, value.join(','))
            } else {
                url.searchParams.set(key, String(value))
            }
        }
    }

    return url.toString()
}

const createApi = (baseUrl: string) => {
    const _fetch = async <T = unknown>(url: string): Promise<T> => {
        const response = await fetch(url)

        if (!response.ok) {
            let message = response.statusText

            try {
                const body = await response.json()
                if (body?.reason) message = body.reason
            } catch {
                // response body is not JSON, keep statusText
            }

            throw new UseOpenMeteoApiError(response.status, message)
        }

        return response.json() as Promise<T>
    }

    const get = async <Res = unknown>(endpoint: string, params?: Params) => {
        return _fetch<Res>(buildUrl(baseUrl, endpoint, params))
    }

    return { get }
}

export const useOpenMeteoApi = () => createApi(WEATHER_BASE_URL)

export const useGeocodingApi = () => createApi(GEOCODING_BASE_URL)
