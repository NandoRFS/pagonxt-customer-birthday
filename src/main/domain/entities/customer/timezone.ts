import timezones from 'timezones-list'
import { InvalidArgumentError } from "../../../shared/errors/invalid-arguments-error"

export class TimeZone {
  private readonly timeZone: string

  private constructor(timeZone: string) {
    this.timeZone = timeZone
    Object.freeze(this)
  }

  static create(timeZone: string): TimeZone {
    if (!TimeZone.validate(timeZone)) {
      throw new InvalidArgumentError(`invalid timeZone: ${timeZone}`)
    }

    return new TimeZone(timeZone)
  }

  get value(): string {
    return this.timeZone
  }

  static validate(timeZone: string): boolean {
    const exists = timezones.filter((tz) => tz.tzCode === timeZone)
    if (exists.length > 0) {
      return true
    }

    return false
  }

  toJSON() {
    return this.timeZone
  }
}
