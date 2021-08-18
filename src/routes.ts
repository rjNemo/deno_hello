import { Router, RouterContext } from "./deps.ts";
import { ID, sayHello, sayRandomHello } from "./mod.ts";
import { htmlBody } from "./view.ts";

export const router = new Router();

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = htmlBody(sayRandomHello());
});

router.get<
  Record<string, string | undefined>
>("/:id", (ctx: RouterContext) => {
  try {
    const value = ctx.params.id;
    if (value && value !== "favicon.ico") {
      const id = new ID(parseInt(value, 10));
      ctx.response.body = htmlBody(sayHello(id));
    }
  } catch (error) {
    console.error(error);
    ctx.response.body = error.message;
  }
});
