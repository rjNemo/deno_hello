import { readLines } from "./deps.ts";
import { ID, sayHello, sayRandomHello, ValidationError } from "./mod.ts";

const start = async () => {
  console.log("Hello, World! (International version)\n");
  console.log(
    "🌍 Type a number (between 1 and 78), or leave blank for random language. Type 'quit' to leave.",
  );
  console.log("👉 ");

  for await (const line of readLines(Deno.stdin)) {
    const value = line.trim();

    if (value === "") {
      console.log(sayRandomHello());
    } else if (value === "quit") {
      return;
    } else {
      try {
        const id = new ID(parseInt(value, 10));
        console.log(sayHello(id));
      } catch (error) {
        if (error instanceof ValidationError) {
          console.error(error.message);
        } else {
          throw error;
        }
      }
    }
  }
};

await start();
