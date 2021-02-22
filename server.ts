import { Application, Router } from "./deps.ts";
import { ID, sayHello, sayRandomHello } from "./src/index.ts";

const port = 8000;

const router = new Router();

router.get("/", (ctx: any) => {
  ctx.response.body = JSON.stringify(sayRandomHello());
}).get<{ id: string }>("/:id", (ctx: any) => {
  try {
    const value = ctx.params.id;
    const id = new ID(value);
    ctx.response.body = JSON.stringify(sayHello(id));
  } catch (error) {
    console.error(error);
    ctx.response.body = error.message;
  }
});

const app = new Application();
app.use(router.routes());

app.addEventListener("listen", ({ port }: any) => {
  console.log(`Server listening on http://localhost:${port}/`);
});

await app.listen({ port });
console.log(`Finished`);
