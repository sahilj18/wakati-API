import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from "stoker/middlewares"
import logger from "./logger"
// import { logger } from 'hono/logger'
// import { pinoLogger } from 'hono-pino'
import { serveEmojiFavicon } from 'stoker/middlewares'

export function createRouter(){
    return new OpenAPIHono({ strict: false })
}

export default function createApp() {
    const app = createRouter()
    app.use(logger())
    app.use(serveEmojiFavicon("👻"))
    app.notFound(notFound)
    app.onError(onError)

    return app

}