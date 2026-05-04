import { UseOpenMeteoApiError } from '~/api/openMeteo/useOpenMeteoApiError'

const BASE_URL = 'https://api.open-meteo.com/v1'

type Params = Record<string, string | number | boolean | string[]>

const buildUrl = (endpoint: string, params?: Params): string => {
    const url = new URL(`${BASE_URL}${endpoint}`)

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

export const useOpenMeteoApi = () => {
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
        return _fetch<Res>(buildUrl(endpoint, params))
    }

    return { get }
}
