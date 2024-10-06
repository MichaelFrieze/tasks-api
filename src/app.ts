import { OpenAPIHono } from "@hono/zod-openapi";

import { notFound } from "../stoker/middlewares";

const app = new OpenAPIHono({});

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// I am using notFound handler from stoker
// I added a stoker directory and copied the stoker code to my project
// https://github.com/w3cj/stoker/blob/main/src/middlewares/not-found.ts
// You can also: npm install stoker
app.notFound(notFound);

export default app;
