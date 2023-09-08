import Hamburguesas from "../models/Hamburguesas.js";

const obtenerHamburguesas = async (req, res) => {
    const burguer = await Hamburguesas.find();
    res.json(burguer);
}

export {obtenerHamburguesas};