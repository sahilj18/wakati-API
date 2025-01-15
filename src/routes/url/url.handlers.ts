import * as HttpStatusCodes from "stoker/http-status-codes"
import { AnalyzeRoute } from "./url.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"

export const url: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()

    if (!body.url) {
        return c.json({ error: "valid url is required" },
            HttpStatusCodes.BAD_REQUEST);
    }



    return c.json({ message: body.url })

}

