// Camada responsável pela lógica - integridade das regras de negocio
import * as categoriasRepository from '../repositories/categoriasRepository.js'

export const getAllcategories = async () => {
    return await categoriasRepository.getAllcategories();
};

export const getCategory = async (id) => {
    return await categoriasRepository.getCategory(id);
};

export const createCategory = async (nome) => {
    return await categoriasRepository.createProduct(nome);
};

export const updateCategory = async (id, nome) => {
    const categoria = await categoriasRepository.getCategory(id);
    if (!categoria) {
        const error = new Error("Categoria não encontrado");
        error.status = 404;
        throw error;
    };
    return await categoriasRepository.updateCategory(id, nome);
};

export const deleteProduct = async (id) => {
    const categoria = await categoriasRepository.getCategory(id);
    if (!categoria) {
        const error = new Error("Categoria não encontrado");
        error.status = 404;
        throw error;
    }
    return await categoriasRepository.deleteCategory(id);
}