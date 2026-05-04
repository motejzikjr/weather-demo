import { OpenMeteoApiError } from '~/api/openMeteo/OpenMeteoApiError'

const BASE_URL = 'https://api.open-meteo.com/v1'

type Params = Record<string, string | number | boolean | string[]>

function buildUrl(endpoint: string, params?: Params): string {
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

async function get<T>(endpoint: string, params?: Params): Promise<T> {
    const response = await fetch(buildUrl(endpoint, params))

    if (!response.ok) {
        let message = response.statusText

        try {
            const body = await response.json()
            if (body?.reason) message = body.reason
        } catch {
            // response body is not JSON, keep statusText
        }

        throw new OpenMeteoApiError(response.status, message)
    }

    return response.json() as Promise<T>
}

export const openMeteoApi = { get }
