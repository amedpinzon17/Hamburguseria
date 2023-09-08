import Chefs from "../models/Chefs.js";

const obtenerChefs = async (req, res) => {
    const cocinero = await Chefs.find();
    res.json(cocinero);
}

export {obtenerChefs};