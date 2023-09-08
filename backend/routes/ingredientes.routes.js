import express from 'express';

const router = express.Router();

import { obtenerIngredientes } from '../controllers/ingredientes.controllers.js';

router.get("/all", obtenerIngredientes );

export default router;