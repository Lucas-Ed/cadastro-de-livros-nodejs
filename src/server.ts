import Fastify from "fastify";
import {PrismaClient} from '@prisma/client'

const fastify = Fastify({
    logger:true,
})
const prisma = new PrismaClient({
    log:['query'],
})

 fastify.listen({port:3333})