import { assertEquals } from "../../deps.ts";
import { getLocaleById, Locale } from "./locales.ts";

Deno.test("Get locale by id", () => {
  const id = 25;
  const actual = getLocaleById(id);
  const expected: Locale = {
    locale: "French",
    message: "Salut le Monde!",
  };

  assertEquals(actual, expected, `Expected ${expected}; got ${actual}`);
});
