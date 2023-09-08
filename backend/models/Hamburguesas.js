import mongoose from 'mongoose';

const hamburguesasSchema = mongoose.Schema({

    nombre:{
        type: String,
        require: true,
        trim: true
    },

    categoria:{
        type: String,
        require: true,
        trim: true
    },

    ingredientes:{
        type: Array,
        require: true,
        trim: true
    },

    precio:{
        type: Number,
        require: true,
        trim: true
    },

    chef:{
        type: String,
        require: true,
        trim: true
    }
},


    {
        timestamps: true,
    }

);

const Hamburguesas = mongoose.model('Hamburguesas', hamburguesasSchema);

export default Hamburguesas;