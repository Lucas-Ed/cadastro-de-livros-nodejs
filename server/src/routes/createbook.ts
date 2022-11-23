import { fastify } from 'fastify';
import {prisma} from "../lib/prisma"


// método de adicionar livro.
    export async function booksCreate(fastify:any){
        fastify.push('./books/create', async (request: any, reply: any) => {
            const { title , 
                    isbn,
                    name,
                    description1
                   } = request.body;
            const books = await prisma.
        })
        
        
           
            

    }