import { FastifyInstance } from 'fastify';
import {prisma} from "../lib/prisma"
// import fastify from 'fastify'




// método de busca do livro pelo título do livro
export function booksRoutes(fastify:FastifyInstance){

fastify.get('/books/:id', async(request, response) => {
  const booksGet = await prisma.books.findMany({
    include:{
      authors:true,
    }
  })
  })

  
}