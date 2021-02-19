import { assertStrictEquals } from "../../deps.ts";
import { getLocaleById } from "./locales.ts";

Deno.test("Get locale by id", () => {
  const id = 25;
  const actual = getLocaleById(id);
  const expected = "Salut le Monde!";

  assertStrictEquals(actual, expected, `Expected ${expected}; got ${actual}`);
});
