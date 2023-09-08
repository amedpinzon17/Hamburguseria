import mongoose from 'mongoose';

const ChefsSchema = mongoose.Schema({

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

const Chefs = mongoose.model('Chefs', ChefsSchema);

export default Chefs;