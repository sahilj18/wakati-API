import { OpenAPIHono } from '@hono/zod-openapi'
import {notFound,onError} from "stoker/middlewares"
import logger from "./lib/logger"
// import { logger } from 'hono/logger'
import { pinoLogger } from 'hono-pino'

const app = new OpenAPIHono()
app.use (logger())
app.notFound(notFound)
app.onError(onError)

app.get('/', (c) => {
  return c.text('Hello Advait. Thanks for using Hono!')
})



app.get("/error",(c)=>{
  throw new Error("error")
})

export default app
