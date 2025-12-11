import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

async function testConnection() {
    try {
        await prisma.$connect();
        console.log("Conexão com o banco estabelecido");
    } catch (error) {
        console.error("Erro ao conectar o banco", error);
    } finally {
        await prisma.$disconnect();
    }
}

testConnection();

export default prisma;
