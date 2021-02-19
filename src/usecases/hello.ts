import { getLocaleById, localesSize } from "../repositories/locales.ts";
import { ID } from "../types/id.ts";

/**
 * Display the iconic Hello, World in a random locale
 */
export const sayRandomHello = () => {
  const id = Math.ceil(Math.random() * localesSize);
  const val = new ID(id);
  return sayHello(val);
};

/**
 * Display the iconic Hello, World in a locale identified by id
 * @param id Unique identifier
 */
export const sayHello = (id: ID): string => {
  return getLocaleById(id.value);
};
