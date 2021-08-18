import { assertEquals, assertStrictEquals } from "../deps.ts";
import { ID } from "../types/id.ts";
import { HelloResponse, sayHello, sayRandomHello } from "./hello.ts";

Deno.test("Random Hello", () => {
  const result = sayRandomHello();
  const actual = typeof result;
  const expected = "object";
  assertStrictEquals(actual, expected);
});

Deno.test("Specific Hello", () => {
  type TestCase = { in: ID; want: HelloResponse };

  const testCases: TestCase[] = [
    {
      in: new ID(25),
      want: { id: 25, locale: "French", message: "Salut le Monde!" },
    },
    {
      in: new ID(21),
      want: { id: 21, locale: "English", message: "Hello World!" },
    },
  ];

  for (const test of testCases) {
    const actual = sayHello(test.in);
    const expected = test.want;

    assertEquals(actual, expected);
  }
});
