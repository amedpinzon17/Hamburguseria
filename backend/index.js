import Express from 'express';
import dotenv from 'dotenv';
import ConectarDB from './config/config.js';
import CategoriasRouter from './routes/categorias.routes.js';
import ChefsRouter from './routes/chefs.routes.js';
import HamburguesasRouter from './routes/hamburguesas.routes.js';
import IngredientesRouter from './routes/ingredientes.routes.js';

const app = Express()

app.use(Express.json());

dotenv.config();

app.use('/categorias', CategoriasRouter);
app.use('/chef', ChefsRouter);
app.use('/hamburguesas', HamburguesasRouter);
app.use('/ingredientes', IngredientesRouter);


const PORT = process.env.PORT;

ConectarDB();

app.listen(PORT, () => {
    console.log(`el servidor wed esta inatalado en el servidor ${PORT}`);
});