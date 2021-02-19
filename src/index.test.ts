import { assertStrictEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { sayHello } from "./index.ts";

Deno.test("Hello test", () => {
  const actual = sayHello();
  const expected = "Hello, World!";
  assertStrictEquals(actual, expected);
});

Deno.test("Random Hello", () => {
  const id = 5;
  const actual = sayHello(id);
  const expected = "Bonjour le monde";

  assertStrictEquals(actual, expected);
});
