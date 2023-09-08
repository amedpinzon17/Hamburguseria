import mongoose from "mongoose";

const ConectarDB = async () => {
    try{
        const connectionDB = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        const url = `EL PUESTO ESTA CORRIENDO EN ${connectionDB.connection.host} - EN EL PUERTO ${connectionDB.connection.port}`;
        console.log(url);
    }catch(err){
        console.log(`${err.message}`);
        process.exit(1);
    }
}

export default ConectarDB;