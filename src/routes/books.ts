import { prisma } from "@prisma/client"
import { FastifyInstance } from "fastify"

export async function booksRoutes(fastify: FastifyInstance){
    fastify.get('/books', async () => {
      
    })
}