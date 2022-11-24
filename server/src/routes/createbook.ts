import { fastify } from 'fastify';
import {prisma} from "../lib/prisma"
import { PrismaClient } from '@prisma/client';



const bookcreate = new PrismaClient()/*create*/

// método de adicionar livro.
 export async function booksCreate(fastify:any){

    fastify.post(`/book`, async (req: { body: { name: any; title: any; isbn: any; description1: any; }; }, res: any) => {
        const { name,
            title,
            isbn,
            description1
                            } = req.body;

        const bookcreate = await prisma.books.create({
            data: {
                title,
                isbn,
                name,
                description1,
                

                include: {
                    Authors: true,
                    Genre: true,
                }
            },
          
           
          
        });
        return res.json(bookcreate)
        })
    }