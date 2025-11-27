// Camada responsável pela lógica - integridade das regras de negocio
import * as usuariosRepository from '../repositories/usuariosRepository.js'


export const getAllUsers = async () => {
    return await usuariosRepository.getAllUsers()
}

export const getUser = async (id) => {
    return await usuariosRepository.getUser(id)
}

export const createUser = async (nome, email, senha, telefone) => {
    const usuario = await usuariosRepository.getUserByEmail(email)
    if(usuario) {
        throw new Error("Email já cdastrado")
    }
    return await usuariosRepository.createUser(nome, email, senha, telefone)
}

export const updateUser = async (id, nome, email, senha, telefone) => {
    const usuario = await usuariosRepository.getUser(id)
    if(!usuario) {
        throw new Error("Usuário não encontrado");
    }
    return await usuariosRepository.updateUser(id, nome, email, senha, telefone)
}

export const deleteUser = async (id) => {
    const usuario = await usuariosRepository.getUser(id)
    if(!usuario) {
        throw new Error("Usuário não encontrado");
    }
    return await usuariosRepository.deleteUser(id)
}
