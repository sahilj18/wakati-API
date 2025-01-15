import * as HttpStatusCodes from "stoker/http-status-codes"
import { AnalyzeRoute } from "./url.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"

export const url: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()

   const res = await fetch(body.url)
   const data = await res.text()



    return c.json({  data })

}

