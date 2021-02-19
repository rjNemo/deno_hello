import { idIsValid, ValidationError } from "./validation.ts";
import { getLocaleById, localesSize } from "./repository/locales.ts";

/**
 * Display the iconic Hello, World in a random locale
 */
export const sayRandomHello = () => {
  const id = Math.ceil(Math.random() * localesSize);
  return sayHello(id);
};

/**
 * Display the iconic Hello, World in a locale identified by id
 * @param id Unique identifier
 */
export const sayHello = (id: number): string => {
  if (!idIsValid(id)) {
    throw new ValidationError(`Invalid index: ${id}`);
  }
  return getLocaleById(id);
};
