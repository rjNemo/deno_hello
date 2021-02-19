export class ValidationError extends Error {}
/**
 * Display the iconic Hello, World
 */
export const sayHello = (id?: number) => {
  if (id && id < 1) {
    throw new ValidationError(`Invalid index: ${id}`);
  }
  return (id === 5) ? "Bonjour le monde" : "Hello, World!";
};
