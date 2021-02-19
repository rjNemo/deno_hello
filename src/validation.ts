/**
 * Custom error used to express input validation.
 * The message must describe to the external user how to correct its input.
 *
 @example * `throw new ValidationError("Bad id")`
 */
export class ValidationError extends Error {}
