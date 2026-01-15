import express from 'express';
import * as usuariosController from "../controllers/usuariosController.js";

const router = express.Router();

router.get("/", usuariosController.getAllUsers);
// rota para buscar um usuario: '/users/1'
router.get("/:id", usuariosController.getUser);
router.put("/:id", usuariosController.updateUser);
router.delete("/:id", usuariosController.deleteUser);

export default router;
