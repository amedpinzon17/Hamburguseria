import express from 'express';

const router = express.Router();

import { obtenerChefs } from '../controllers/chefs.controllers.js';

router.get("/all", obtenerChefs);

export default router;