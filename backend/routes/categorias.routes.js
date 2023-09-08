import express from 'express';

const router = express.Router();

import { obtenerCategorias } from '../controllers/categoria.controllers.js';

router.get("/all", obtenerCategorias);

export default router;