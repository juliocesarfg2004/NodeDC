import express from 'express';
import * as categoriasController from "../controllers/categoriasController.js";
const router = express.Router()

router.get('/', categoriasController.getAllcategories);
router.get('/:id', categoriasController.getCategory);
router.post('/', categoriasController.createCategory);
router.put('/:id', categoriasController.updateCategory);
router.delete('/:id', categoriasController.deleteCategory);

export default router;
