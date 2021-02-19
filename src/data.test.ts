import { assertStrictEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { getLocaleById } from "./data.ts";

Deno.test("Get locale by id", () => {
  const id = 25;
  const actual = getLocaleById(id);
  const expected = "Salut le Monde!";

  assertStrictEquals(actual, expected, `Expected ${expected}; got ${actual}`);
});
