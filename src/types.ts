import { ValidationError } from "./validation.ts";
import { localesSize } from "./repository/locales.ts";

export class ID {
  constructor(public id: number) {
    this.#isValid(id);
  }

  #idIsValid = (id: number) => id > 0 && id < localesSize;

  #isValid = (id: number) => {
    if (!this.#idIsValid(id)) {
      throw new ValidationError(`Invalid index: ${id}`);
    }
  };
}
