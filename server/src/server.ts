import Fastify from "fastify";
import { booksRoutes } from "./routes/books";
import { PrismaClient } from '@prisma/client'//Conexão com .db
import { booksCreate } from "./routes/createbook";


//Conexão com .db
const prisma = new PrismaClient()

async function bootstrap() {
    


const fastify = Fastify({
    logger:true,
})


//Chamar as rotas
await fastify.register(booksRoutes)
await fastify.register(booksCreate)


fastify.listen({port:3333})
}
bootstrap()
