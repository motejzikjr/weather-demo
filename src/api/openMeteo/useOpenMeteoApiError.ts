export class UseOpenMeteoApiError extends Error {
    constructor(
        public readonly status: number,
        message: string,
    ) {
        super(message)
        this.name = 'OpenMeteoApiError'
    }
}
