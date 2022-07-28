export class ValidatorError extends Error {
	public readonly errors: string[]

	constructor(errors: string[]) {
		super()
		this.errors = errors
	}
}
