import { ID } from "./types.ts";
import { ValidationError } from "./validation.ts";
import { assertThrows } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { localesSize } from "./repository/locales.ts";

Deno.test("ID validation fails for non strictly positive values", () => {
  assertThrows(() => new ID(-1), ValidationError, "Invalid index: -1");
});

Deno.test("Hello fails for too large values", () => {
  assertThrows(
    () => new ID(localesSize),
    ValidationError,
    `Invalid index: ${localesSize}`,
  );
});
