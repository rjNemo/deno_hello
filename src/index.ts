import { ValidationError } from "./validation.ts";
import { getLocaleById, localesSize } from "./repository/locales.ts";

/**
 * Display the iconic Hello, World
 */
export const sayHello = (id?: number) => {
  if (!id) {
    return;
  }
  if (idInValidRange(id)) {
    throw new ValidationError(`Invalid index: ${id}`);
  }
  return getLocaleById(id);
};

const idInValidRange = (id: number) => id < 1 || id >= localesSize;
