import express from 'express'
import * as usuariosController from '../controllers/usuariosController.js'

const router = express.Router()

router.get('/', usuariosController.getAllUsers)
// rota para buscar um usuario: '/users/1'
router.get('/:id', usuariosController.getUser)
router.post('/', usuariosController.createUser)
router.put('/', usuariosController.updateUser)
router.delete('/', usuariosController.deleteUser)

export default router