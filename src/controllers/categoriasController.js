import * as categoriasService from '../services/categoriasService.js'

export const getAllcategories = async (_req, res) => {
    try {
        const categories = await categoriasService.getAllcategories();
        return res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Erro ao buscar categorias", error});
    };
};

export const getCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const category = categoriasService.getCategory(id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({message: "Erro ao encontrar a categoria", error});
    };
};

export const createCategory = async (req, res) => {
    const {nome} = req.body;
    try {
        if(!nome) {
            return res.status(400).json({message: "Esse campo é obrigatório"});
        };
        const categoriaCriada = await categoriasService.createCategory(nome);
        return res.status(201).json(categoriaCriada);
    } catch (error) {
        if(error.status === 409) {
            return res.status(404).json({message: error.message})
        };
        return res.status(500).json({ message: "Erro ao criar a categoria", error });
    };
};

export const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body
    try {
        if (!nome) {
            return res.status(400).json({ message: "Esse campo é obrigatório" })
        }
        const categoriaAlterada = await categoriasService.updateCategory(id, nome,)
        return res.status(200).json(categoriaAlterada)
    } catch (error) {
        if(error.status === 404) {
            return res.status(404).json({message: error.message})
        }
        return res.status(500).json({ message: "Erro ao alterar categoria", error })
    };
};

export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        const categoriaDeletado = await categoriasService.deleteCategory(id);
        return res.status(204).json(categoriaDeletado);
    } catch (error) {
        if(error.status === 404) {
            return res.status(404).json({message: error.message});
        };
        return res.status(500).json({message: 'Erro ao excluir categoria', error})
    };
};