import Fastify from "fastify";
import { booksRoutes } from "./routes/books";

async function bootstrap() {
    


const fastify = Fastify({
    logger:true,
})

await fastify.register(booksRoutes)

fastify.listen({port:3333})
}
bootstrap()
