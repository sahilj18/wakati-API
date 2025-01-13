import { createRouter } from "@/lib/create-app"
import { createRoute, z } from '@hono/zod-openapi'

const router = createRouter().openapi(createRoute({
    path: "/get",
    method: "get",
    responses: {
        200: {
            content: {
                "application/json": {
                    schema: z.object({
                        message: z.string()
                    }),
                },
            }, description: "Re"
        },
    },
}), (c) => {
    return c.json({ message: "" })
})

export default router