const express = require('express');

const {MongoClient} = require('mongodb');
require('dotenv').config();
const router = express.Router();
const bases = process.env.MONGO_URL;
const nombreBase = 'Hamburgueseria'


  router.get('/holi', async (req, res) => {
    try{
        console.log("Hello friends");
        
    }catch(err){
        console.log(err.message);
    }
});  

router.get('/endpoint1',  async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');
        const result = await collection.find({stock : {$lt:400}}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
});


router.get('/endpoint2', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find({Categorias : 'Vegetariana'}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
});

router.get('/endpoint3', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Chefs');
        const result = await collection.find({especialidad : 'Carnes'}).toArray();
        res.json(result);
        client.close();

    }catch(err){
        console.log(err);
    }
});


router.get('/endpoint4', async(req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');
        const result = await collection.updateMany({}, { $inc: { precio: 1.5 } });
        const updatedCount = result.modifiedCount;     
        res.json({ message: `${updatedCount} documentos actualizados` });
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint5', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find({ chef : 'ChefB'}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
});


router.get('/endpoint6', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase)
        const collection = db.collection('Categorias');
        const result = await collection.find({}, { nombre: 1, descripcion: 1 }).toArray() 
        res.json(result);
        client.close
        } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint7', async(req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');
        const result = await collection.deleteMany({stock : 0});

        if( result.deletedCount === 0){
            res.json({message: 'No hay Stock para eliminar'})
        }else{
            res.json({message: `${result.deletedCount} documentos eliminados`, result})
        }
        
        client.close();
    }catch(err){
        console.log(err);
    }
});


router.get('/endpoint8', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const nuevoIngred = {
            nombre : 'Name',
            descripcion : 'Pan y carne',
            precio : 2.0,
            stock : 100
        };
        const collection = db.collection('Ingredientes');
        const result = await collection.insertOne(nuevoIngred);
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
});


router.get('/endpoint9', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find({ingredientes : 'Pan integral'}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint10', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Chefs');


        const filter = { nombre: 'ChefC' };
        const update = { $set: { especialidad: 'Cocina internacional' } };

        const result = await collection.updateOne(filter, update);

        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
});

router.get('/endpoint11', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');
        const result = await collection.find().sort({ precio : -1}).limit(1).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint12', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find({ ingredientes : { $not : { $in : ['queso cheddar'] }}}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint13', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');


        const filter = { nombre: 'Pan' };
        const update = { $inc: { stock: 100 } };

        const result = await collection.updateOne(filter, update);

        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})

router.get('/endpoint14', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');
        const result = await collection.find({ descripcion : { $regex : /clasico/i }}).toArray();
        res.json({message: 'no se encontro ningun ingrediente con la plabra clasico', result});
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint15', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find({ precio : { $lte : 9 }}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint16', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Chefs');
        const result = await collection.countDocuments();
        res.json({count : result});
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint17', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Categorias');
        const result = await collection.find({ descripcion : { $regex : /gourmet/i }}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint18', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
    
        const result = await collection.deleteMany({ $expr: { $lt: [{ $size: "$ingredientes" }, 5] } });
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint19', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const nuevoChef = {
            nombre : 'ChefD',
            especialidad : 'Cosina Asiatica'
        };
        const collection = db.collection('Chefs');
        const result = await collection.insertOne(nuevoChef);
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
});


router.get('/endpoint20', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find().sort({ precio : 1}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})
















module.exports = router;