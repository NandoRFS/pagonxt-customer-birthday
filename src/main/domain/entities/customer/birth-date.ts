import { InvalidArgumentError } from "../../../shared/errors/invalid-arguments-error"

export class BirthDate {
  private readonly birthDate: Date

  private constructor(birthDate: Date) {
    this.birthDate = birthDate
    Object.freeze(this)
  }

  static create(birthDate: Date): BirthDate {
    if (!BirthDate.validate(birthDate)) {
      throw new InvalidArgumentError(`invalid birthDate: ${birthDate}`)
    }

    return new BirthDate(new Date(birthDate))
  }

  get value(): Date {
    return this.birthDate
  }

  get formatDateValue(): Date {
    return new Date(this.birthDate)
  }

  static validate(birthDate: Date): boolean {
    if (isNaN(new Date(birthDate).getMilliseconds()) || new Date(birthDate).valueOf() > new Date().valueOf()) {
      return false
    }

    return true
  }

  toJSON() {
    return this.birthDate
  }
}
