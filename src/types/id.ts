import { localesSize } from "../repositories/locales.ts";
import { ValidationError } from "../errors/exceptions.ts";

export class ID {
  /**
   * ID is the input type.
   * It validates input value at creation
   * @throws ValidationError if value is not in the accepted range
   */
  constructor(public value: number) {
    this.#validate(value);
  }

  #idIsValid = (id: number) => id > 0 && id <= localesSize;

  #validate = (id: number) => {
    if (!this.#idIsValid(id)) {
      throw new ValidationError(`Invalid index: ${id}`);
    }
  };
}
