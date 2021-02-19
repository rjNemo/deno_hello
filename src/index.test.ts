import { assertStrictEquals } from "https://deno.land/std@0.87.0/testing/asserts.ts";
import { sayHello, sayRandomHello } from "./index.ts";
import { ID } from "./types/id.ts";

Deno.test("Random Hello", () => {
  const result = sayRandomHello();
  const actual = typeof result;
  const expected = "string";
  assertStrictEquals(actual, expected);
});

Deno.test("Specific Hello", () => {
  type TestCase = { in: ID; want: string };

  const testCases: TestCase[] = [
    { in: new ID(25), want: "Salut le Monde!" },
    { in: new ID(21), want: "Hello World!" },
  ];

  for (const test of testCases) {
    const actual = sayHello(test.in);
    const expected = test.want;

    assertStrictEquals(actual, expected);
  }
});
