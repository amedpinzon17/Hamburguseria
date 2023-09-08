import Categorias from "../models/Categorias.js";

const obtenerCategorias = async (req, res) => {
    const category = await Categorias.find();
    res.json(category);
}

export {obtenerCategorias};