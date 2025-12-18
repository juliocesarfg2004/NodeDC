// Camada responsável pela lógica - integridade das regras de negocio
import * as produtosRepository from '../repositories/produtosRepository.js'

export const getAllProducts = async () => {
    return await produtosRepository.getAllProducts();
};

export const getProduct = async (id) => {
    return await produtosRepository.getProduct(id);
};

export const createProduct = async (nome, codigo, valor_unitario, categoria_id) => {
    const produto = await produtosRepository.getProductByCodigo(codigo);
    if (produto) {
        const error = new Error("Código já cadastrado");
        error.status = 409; // Conflict
        throw error;
    };
    return await produtosRepository.createProduct(nome, codigo, valor_unitario, categoria_id);
};

export const updateProduct = async (id, nome, codigo, valor_unitario) => {
    const produto = await produtosRepository.getProduct(id);
    if (!produto) {
        const error = new Error("Produto não encontrado");
        error.status = 404;
        throw error;
    };
    return await produtosRepository.updateProduct(id, nome, codigo, valor_unitario);
};

export const deleteProduct = async (id) => {
    const produto = await produtosRepository.getProduct(id);
    if (!produto) {
        const error = new Error("Produto não encontrado");
        error.status = 404;
        throw error;
    }
    return await produtosRepository.deleteProduct(id);
}