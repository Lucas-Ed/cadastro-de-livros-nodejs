import { PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const books = await prisma.books.create({
        data: {
            title: "Alice no país das maravilhas" ,
            description: "alice no país" ,
            amount: 1     ,
            isbn:   12345678     ,
            
        }
    })

    await prisma.authors.create({
        data: {
            name:"lucas eduardo"
        }
    })

await prisma.genre.create({
    data: {
        description1:""
    }
})
}
main()