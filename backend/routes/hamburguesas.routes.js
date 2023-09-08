import express from 'express';

const router = express.Router();

import {obtenerHamburguesas} from '../controllers/hamburguesas.controllers.js';

router.get("/all", obtenerHamburguesas);

export default router;