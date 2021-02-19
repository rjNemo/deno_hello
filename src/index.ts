import { idIsValid, ValidationError } from "./validation.ts";
import { getLocaleById } from "./repository/locales.ts";

/**
 * Display the iconic Hello, World
 */
export const sayHello = (id?: number) => {
  if (!id) {
    return;
  }
  if (!idIsValid(id)) {
    throw new ValidationError(`Invalid index: ${id}`);
  }
  return getLocaleById(id);
};
