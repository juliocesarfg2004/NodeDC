import prisma from "../config/db.js";

export const getAllUsers = async () => {
  return await prisma.users.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true
    }
  })
};

export const getUser = async (id) => {
  return await prisma.users.findUnique({
    where: { id: Number(id) }
  })
};

export const getUserByEmail = async (email) => {
  return await prisma.users.findUnique({
    where: { email }
  })
}

export const updateUser = async (id, nome, email, senha, telefone) => {
  return await prisma.users.update({
    where: { id: Number(id) },
    data: {
      nome,
      email,
      senha,
      telefone
    }
  })
};

export const deleteUser = async (id) => {
  return await prisma.users.delete({
    where: { id: Number(id) }
  })
};
