import Ingredientes from "../models/Ingredientes.js";

const obtenerIngredientes = async (req, res) => {
    const ingredientes = await Ingredientes.find();
    res.json(ingredientes);
}

export {obtenerIngredientes};