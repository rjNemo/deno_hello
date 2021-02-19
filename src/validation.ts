/**
 * Custom error used to express input validation.
 * The message must describe to the external user how to correct its input.
 *
 @example * `throw new ValidationError("Bad id")`
 */
import { localesSize } from "./repository/locales.ts";

export class ValidationError extends Error {}

export const idIsValid = (id: number) => id > 0 && id < localesSize;
