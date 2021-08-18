import { assert, assertThrows, Random } from "../deps.ts";
import { ValidationError } from "../errors/exceptions.ts";
import { ID } from "./id.ts";

Deno.test("ID validation fails for non strictly positive values", () => {
  assertThrows(() => new ID(-1), ValidationError, "Invalid index: -1");
});

Deno.test("Hello fails for too large values", () => {
  assertThrows(() => new ID(666), ValidationError, `Invalid index: 666`);
});

Deno.test("ID is valid", () => {
  const value = new Random().int(1, 77);
  const id = new ID(value);
  assert(id);
});
