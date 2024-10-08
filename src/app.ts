import { OpenAPIHono } from "@hono/zod-openapi";

import { notFound, onError } from "../stoker/middlewares";
import { pinoLogger } from "./middlewares/pino-logger";

const app = new OpenAPIHono({});
app.use(pinoLogger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/error", (c) => {
  c.status(422);
  throw new Error("Test error");
});

// I added a stoker directory and copied the stoker code to my project
// https://github.com/w3cj/stoker
// You can also: npm install stoker
app.notFound(notFound);
app.onError(onError);

export default app;
