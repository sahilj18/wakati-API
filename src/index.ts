import createApp from "@/lib/create-app"


const app = createApp()

app.get('/', (c) => {
    return c.text('Thanks for using Hono!')
})

app.get("/error", (c) => {
    throw new Error("error")
})



export default app
