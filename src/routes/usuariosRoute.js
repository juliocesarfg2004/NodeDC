import express from 'express'
import * as usuariosController from '../controllers/usuariosController.js'

const router = express.Router()

router.post('/', usuariosController.createUser)
router.get('/', usuariosController.getAllUsers)
router.get('/:id', usuariosController.getUser)
router.put('/', usuariosController.updateUser)
router.delete('/', usuariosController.deleteUser)

export default router