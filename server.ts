import { Application, Router, RouterContext } from "./deps.ts";
import { ID, sayHello, sayRandomHello } from "./src/index.ts";
import { htmlBody } from "./view.ts";

const port = 8000;

type AppOpts = { port: number };
const getApplication = ({ port }: AppOpts): Application => {
  const router = new Router();

  router.get("/", (ctx: RouterContext) => {
    ctx.response.body = htmlBody(sayRandomHello());
  }).get("/:id", (ctx: RouterContext) => {
    try {
      const value = ctx.params.id;
      if (value) {
        const id = new ID(parseInt(value, 10));
        ctx.response.body = htmlBody(sayHello(id));
      }
    } catch (error) {
      console.error(error);
      ctx.response.body = error.message;
    }
  });

  const app = new Application();

  app.use(router.routes());

  app.addEventListener(
    "listen",
    () => console.log(`Server listening on http://localhost:${port}/`),
  );
  return app;
};

const app = getApplication({ port });

await app.listen({ port });
console.log(`Finished`);
