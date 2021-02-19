import { listenAndServe } from "./deps.ts";

const port = 8000;

console.log(`Server listening on http://localhost:${port}/`);
await listenAndServe({ port }, (req) => req.respond({ body: "Hello" }));

// write handler using req.url
