import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'

const connectionString = `${process.env.DATABASE_URL}`

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function testConnection() {
    try {
        await prisma.$connect()
        console.log("Banco de dados conectado");
    } catch (error) {
        console.log("Erro no banco de dados",error);
    } finally {
        await prisma.$disconnect()
    }
}

testConnection();

export default prisma