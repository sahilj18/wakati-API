import createApp from "@/lib/create-app"
import configureOpenAPI from "./lib/configure-openapi"


const app = createApp()
configureOpenAPI(app)
app.get('/', (c) => {
    return c.text('Thanks for using Hono!')
})

app.get("/error", (c) => {
    throw new Error("error")
})



export default app
