import { assertStrictEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import main from "./index.ts";

Deno.test("Hello test", () => {
  const actual = main();
  const expected = "hello";
  assertStrictEquals(actual, expected);
});
