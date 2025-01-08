import { OpenAPIHono } from '@hono/zod-openapi'
import {notFound,onError} from "stoker/middlewares"
// import { logger } from 'hono/logger'
import { pinoLogger } from 'hono-pino'

const app = new OpenAPIHono()
app.use(pinoLogger(
  {http:{
    reqId: () => crypto.randomUUID()
  }}
))
app.notFound(notFound)
app.onError(onError)

app.get('/', (c) => {
  c.var.logger.warn("Hello there")
  return c.text('Hello Advait. Thanks for using Hono!')
})



app.get("/error",(c)=>{
  throw new Error("error")
})

export default app
