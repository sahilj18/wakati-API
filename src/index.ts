import createApp from "@/lib/create-app"
import configureOpenAPI from "./lib/configure-openapi"
import index from "@/routes/index.routes"
import router from "@/routes/index.routes"


const app = createApp()
configureOpenAPI(app)
// app.get('/', (c) => {
//     return c.text('Thanks for using Hono!')
// })

// app.get("/error", (c) => {
//     throw new Error("error")
// })

const routes = [index]

routes.forEach((route) => app.route("/", route))


export default app
