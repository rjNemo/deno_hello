import { Application, Router } from "./deps.ts";

type AppOpts = { port: number; router: Router };

export const getApplication = ({ port, router }: AppOpts): Application => {
  const app = new Application();

  app.use(router.routes());

  app.addEventListener(
    "listen",
    () => console.log(`Server listening on http://localhost:${port}/`),
  );
  return app;
};
