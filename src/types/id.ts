import { localesSize } from "../repository/locales.ts";
import { ValidationError } from "../errors/exceptions.ts";

/**
 * ID is the input type.
 * It validates input value at creation
 */
export class ID {
  constructor(public value: number) {
    this.#validate(value);
  }

  #idIsValid = (id: number) => id > 0 && id < localesSize;

  #validate = (id: number) => {
    if (!this.#idIsValid(id)) {
      throw new ValidationError(`Invalid index: ${id}`);
    }
  };
}
