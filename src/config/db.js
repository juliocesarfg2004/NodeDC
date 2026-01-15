import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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