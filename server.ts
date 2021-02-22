import { Application, Router, RouterContext } from "./deps.ts";
import { ID, sayHello, sayRandomHello } from "./src/index.ts";

const port = 8000;

const htmlBody = (content: string) =>
  `<!DOCTYPE html><html><body><pre>${content}</pre></body></html>`;

type AppOpts = { port: number };
const get_application = ({ port }: AppOpts): Application => {
  const router = new Router();

  router.get("/", (ctx: RouterContext) => {
    ctx.response.body = htmlBody(JSON.stringify(sayRandomHello(), null, 2));
  }).get("/:id", (ctx: RouterContext) => {
    try {
      const value = ctx.params.id;
      if (!!value) {
        const id = new ID(parseInt(value, 10));
        ctx.response.body = htmlBody(JSON.stringify(sayHello(id), null, 2));
      }
    } catch (error) {
      console.error(error);
      ctx.response.body = error.message;
    }
  });

  const app = new Application();

  app.use(router.routes());

  app.addEventListener("listen", ({ port }) => {
    console.log(`Server listening on http://localhost:${port}/`);
  });
  return app;
};

const app = get_application({ port });

await app.listen({ port });
console.log(`Finished`);
