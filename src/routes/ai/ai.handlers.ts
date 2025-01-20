import * as HttpStatusCodes from "stoker/http-status-codes";
import { AiRoute } from "./ai.routes";
import { Context } from "hono";
import { RouteHandler } from "@hono/zod-openapi";

export const ai: RouteHandler<AiRoute> = async (c: Context) => {
  const body = await c.req.json();
  const { prompt } = body;

  const response = await c.env.AI.run("@cf/meta/llama-3.1-8b-instruct-fast", {
    messages: [
      {
        role: "system",

        content:
          "Youer name is lana del ray if anyone ask you for your age,you always say you are 18.also u know u are very smart.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return c.json(response);
};
