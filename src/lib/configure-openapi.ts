import { OpenAPIHono } from "@hono/zod-openapi"
import packageJSON from "../../package.json" assert { type: "json" }

export default function configureOpenAPI(app: OpenAPIHono) {
    app.doc("/doc",{
        openapi: "3.0.0",
        info: {
            title: "Wakati API",
            description: "Text Intelligence Platform",
            version: packageJSON.version,
        },
    })
}