import { readLines } from "https://deno.land/std@0.87.0/io/bufio.ts";
import { ID } from "./types/id.ts";
import { sayHello, sayRandomHello } from "./usecases/hello.ts";

const start = async () => {
  console.log("Hello, World! (International version)\n");
  console.log(
    "🌍 Type a number (between 1 and 78), or leave blank for random language. Type 'quit' to leave.",
  );
  console.log("👉 ");

  for await (const line of readLines(Deno.stdin)) {
    switch (line.trim()) {
      case "": {
        console.log(sayRandomHello());
        break;
      }
      default: {
        const id = new ID(parseInt(line.trim(), 10));
        console.log(sayHello(id));
      }
    }
    break;
  }
};

await start();
