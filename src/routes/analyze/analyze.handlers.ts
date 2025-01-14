import { AnalyzeRoute } from "./analyze.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"

export const analyze: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()
    return c.json({
        message: body.text
    })
}