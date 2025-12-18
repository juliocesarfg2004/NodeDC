import prisma from "../config/db.js";

export const getAllcategories = async () => {
  return await prisma.categories.findMany({
    select: {
      id: true,
      nome: true
    }
  })
};

export const getCategory = async (id) => {
  return await prisma.categories.findUnique({
    where: { id: Number(id) }
  })
};

export const createCategory = async (nome) => {
  return await prisma.categories.create({
    data: { nome },
    select: {
      id: true,
      nome: true
    }
  })
};

export const updateCategory = async (id, nome) => {
  return await prisma.categories.update({
    where: { id: Number(id) },
    data: {
      nome
    }
  });
};

export const deleteCategory = async (id) => {
  return await prisma.categories.delete({
    where: { id: Number(id) }
  })
};
