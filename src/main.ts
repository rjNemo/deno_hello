import { router } from "./routes.ts";
import { getApplication } from "./server.ts";

const port = 8000;

const app = getApplication({ port, router });

await app.listen({ port });
console.log(`Finished`);
