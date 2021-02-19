import { listenAndServe, ServerRequest } from "./deps.ts";
import { ID, sayHello, sayRandomHello } from "./src/index.ts";

const port = 8000;

const parseURL = (url: string) => {
  const parts = url.slice(1).split("/");
  return parts[0];
};

const serve = async (port: number) => {
  console.log(`Server listening on http://localhost:${port}/`);

  await listenAndServe({ port }, (req: ServerRequest) => {
    console.log(`Request on address '${req.url}'`);

    if (parseURL(req.url) === "") {
      return req.respond({ body: sayRandomHello() });
    }

    try {
      const value = parseInt(parseURL(req.url), 10);
      const id = new ID(value);
      return req.respond({ body: sayHello(id) });
    } catch (error) {
      console.error(error);
      return req.respond({ body: error.message });
    }
  });
};

await serve(port);
