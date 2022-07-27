import { InvalidArgumentError } from "../../../shared/errors/invalid-arguments-error"

export class CustomerId {
  private readonly customerId: string

  private constructor(customerId: string) {
    this.customerId = customerId
    Object.freeze(this)
  }

  static create(customerId: string): CustomerId {
    if (!CustomerId.validate(customerId)) {
      throw new InvalidArgumentError(`invalid customerId: ${customerId}`)
    }

    return new CustomerId(customerId)
  }

  get value(): string {
    return this.customerId
  }

  static validate(customerId: string): boolean {
    if (!customerId) {
      return false
    }

    return true
  }

  // parser para nao duplicar
  toJSON() {
    return this.customerId
  }
}
