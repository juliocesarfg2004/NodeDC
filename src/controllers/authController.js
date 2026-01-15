import * as authService from '../services/authService.js'

export const register = async (req, res) => {
    const { nome, email, senha, telefone } = req.body
    try {
        if (!nome || !email || !senha) {
            return res.status(400).json({ message: "Esses campos são obrigatórios" });
        }
        const usuarioCriado = await authService.createUser(nome, email, senha, telefone)
        return res.status(201).json(usuarioCriado)
    } catch (error) {
        if (error.status === 409) {
            return res.status(404).json({ message: error.message })
        }
        return res.status(500).json({ message: "Erro ao criar o usuário", error })
    }
}
export const login = async (req, res) => {
    const {email, senha} = req.body
    try {
        const response = await authService.loginUsuario(email, senha)
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({message: "Erro no servidor", error})
    }
}