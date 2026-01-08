import prisma from "../config/db.js";

const getAllProducts = async () => {
  return await prisma.products.findMany({
    select: {
      id: true,
      nome: true,
      codigo: true,
      valor_unitario: true,
      categoria_id: true
    }
  })
};

const getProduct = async (id) => {
  return await prisma.products.findUnique({
    where: { id: Number(id) }
  })
};

const createProduct = async (nome, codigo, valor_unitario, categoria_id) => {
  return await prisma.products.create({
    data: { nome, codigo, valor_unitario: Number(valor_unitario), categoria_id: Number(categoria_id)},
    select: {
      id: true,
      nome: true,
      codigo: true,
      valor_unitario: true,
      categoria_id: true
    }
  })
};

const getProductByCodigo = async (codigo) => {
  return await prisma.products.findUnique({
    where: { codigo }
  })
}

const updateProduct = async (id, nome, codigo, valor_unitario, categoria_id) => {
  return await prisma.products.update({
    where: { id: Number(id) },
    data: {
      nome,
      codigo,
      valor_unitario: Number(valor_unitario),
      categoria_id: Number(categoria_id)
    }
  });
};

const deleteProduct = async (id) => {
  return await prisma.products.delete({
    where: { id: Number(id) }
  })
};

export {
    getAllProducts,
    getProduct,
    createProduct,
    getProductByCodigo,
    updateProduct,
    deleteProduct
}