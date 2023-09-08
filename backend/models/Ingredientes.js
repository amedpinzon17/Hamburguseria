import mongoose from 'mongoose';

const ingredientesSchema = mongoose.Schema({

    nombre:{
        type: String,
        require: true,
        trim: true
    },

    descripcion:{
        type: String,
        require: true,
        trim: true
    },

    precio:{
        type: Number,
        require: true,
        trim: true
    },

    stock:{
        type: Number,
        require: true,
        trim: true
    },

        

},


    {
        timestamps: true,
    }

);

const Ingredientes = mongoose.model('Ingredientes', ingredientesSchema);

export default Ingredientes;