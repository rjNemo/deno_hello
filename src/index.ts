import { ValidationError } from "./validation.ts";
import { localesSize } from "./data.ts";

/**
 * Display the iconic Hello, World
 */
export const sayHello = (id?: number) => {
  if (id && idInValidRange(id)) {
    throw new ValidationError(`Invalid index: ${id}`);
  }
  return (id === 5) ? "Bonjour le monde" : "Hello, World!";
};

const idInValidRange = (id: number) => id < 1 || id >= localesSize;
