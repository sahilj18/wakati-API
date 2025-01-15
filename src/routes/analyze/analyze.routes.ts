import { createRoute, z } from '@hono/zod-openapi'
import * as HttpStatusCodes from "stoker/http-status-codes"

export const analyze = createRoute({
    path: "/analyze",
    method: "post",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.object({
                        text: z.string()
                    })
                }
            }
        }
    },
    responses: {
        [HttpStatusCodes.OK]: {
            content: {
                "application/json": {
                    schema: z.object({
                    }),
                },
            }, description: " Analyze text based on different algorithmic rules"
        },
    },
})

export type AnalyzeRoute = typeof analyze