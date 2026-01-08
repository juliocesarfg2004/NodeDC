import * as produtosService from '../services/produtosService.js'

 const getAllProducts = async (_req, res) => {
    try {
        const products = await produtosService.getAllProducts();
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "Erro ao buscar produtos", error});
    };
};

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = produtosService.getProduct(id);
        return res.status(200).json(product);
    } catch (error) {
        return res.status(500).json({message: "Erro ao encontrar o produto", error});
    };
};

const createProduct = async (req, res) => {
    const {nome, codigo, valor_unitario, categoria_id} = req.body;
    try {
        if(!nome || !codigo || !valor_unitario ) {
            return res.status(400).json({message: "Esses campos são obrigatórios"});
        };
        const produtoCriado = await produtosService.createProduct(nome, codigo, valor_unitario, categoria_id);
        return res.status(201).json(produtoCriado);
    } catch (error) {
        if(error.status === 409) {
            return res.status(404).json({message: error.message})
        };
        return res.status(500).json({ message: "Erro ao criar o produto", error });
    };
};

 const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { nome, codigo, valor_unitario, categoria_id } = req.body
    // try {
        if (!nome || !codigo || !valor_unitario || !categoria_id) {
            return res.status(400).json({ message: "Esses campos são obrigatórios" })
        }
        const produtoAlterado = await produtosService.updateProduct(id, nome, codigo, valor_unitario, categoria_id)
        return res.status(200).json(produtoAlterado)
    // } catch (error) {
    //     if(error.status === 404) {
    //         return res.status(404).json({message: error.message})
    //     }
    //     return res.status(500).json({ message: "Erro ao alterar produto", error })
    // };
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const produtoDeletado = await produtosService.deleteProduct(id);
        return res.status(204).json({produtoDeletado, message: "Produto deletado"});
    } catch (error) {
        if(error.status === 404) {
            return res.status(404).json({message: error.message});
        };
        return res.status(500).json({message: 'Erro ao excluir produto', error})
    };
};



export {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};