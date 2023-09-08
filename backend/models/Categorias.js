import mongoose from 'mongoose';

const categoriasSchema = mongoose.Schema({

    nombre:{
        type: String,
        require: true,
        trim: true
    },

    descripcion:{
        type: String,
        require: true,
        trim: true
    }
},


    {
        timestamps: true,
    }

);

const Categorias = mongoose.model('Categorias', categoriasSchema);

export default Categorias;