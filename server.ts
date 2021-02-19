import { listenAndServe } from "https://deno.land/std@0.87.0/http/server.ts";

const port = 8000;

console.log(`Server listening on http://localhost:${port}/`);
await listenAndServe({ port }, (req) => req.respond({ body: "Hello" }));
