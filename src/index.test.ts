import {
  assertStrictEquals,
  assertThrows,
} from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { sayHello } from "./index.ts";
import { ValidationError } from "./validation.ts";
import { localesSize } from "./data.ts";

Deno.test("Hello test", () => {
  const actual = sayHello();
  const expected = "Hello, World!";
  assertStrictEquals(actual, expected);
});

Deno.test("Specific Hello", () => {
  const id = 5;
  const actual = sayHello(id);
  const expected = "Bonjour le monde";

  assertStrictEquals(actual, expected);
});

Deno.test("Hello fails for non strictly positive values", () => {
  const id = -1;
  assertThrows(() => sayHello(id), ValidationError, "Invalid index: -1");
});

Deno.test("Hello fails for too large values", () => {
  const id = localesSize;
  assertThrows(
    () => sayHello(id),
    ValidationError,
    `Invalid index: ${localesSize}`,
  );
});
