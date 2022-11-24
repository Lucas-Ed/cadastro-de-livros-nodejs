import { fastify } from 'fastify';
import {prisma} from "../lib/prisma"


// método de adicionar livro.
 export async function booksCreate(fastify:any){

    fastify.post(`/book`, async (req: { body: { name: any; title: any; isbn: any; description1: any; }; }, res: any) => {
        const { name,
            title,
            isbn,
            description1
                            } = req.body;

        const bookcreate = await prisma.books.create({
            data:{
                title, 
                isbn,
                name,
                description1,

                include:{
                    Authors:true,
                    Genre: true,
                }
            }
            // res.json(bookcreate)
        })
      
        })
    }
        // app.post(`/signup`, async (req, res) => {
        //     const { name, email } = req.body;
          
        //     const result = await prisma.user.create({
        //       data: {
        //         name,
        //         email,
        //       },
        //     });
          
        //     ;
        //   });


         