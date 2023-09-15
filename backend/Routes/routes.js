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


router.get('/endpoint21', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');
        const result = await collection.find({ precio : { $gte : 2, $lte : 5}}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint22', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');


        const filter = { nombre: 'Pan' };
        const update = { $set: { descripcion: 'Pan fresco y crujiente' } };

        const result = await collection.updateOne(filter, update);

        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint23', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find({ ingredientes : { $in : ['Tomate','Lechuga'] }}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint24', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Chefs');
        const result = await collection.find({ nombre : { $ne : 'ChefA' }}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint25', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');


        const filter = { categoria: 'Gourmet' };
        const update = { $inc: { precio : 2 } };

        const result = await collection.updateOne(filter, update);

        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})

router.get('/endpoint26', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Ingredientes');
        const result = await collection.find().sort({ nombre : 1}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint27', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find().sort({ precio : -1}).limit(1).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})

router.get('/endpoint28', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');


        const filter = { categoria: 'Clasica' };
        const update = { $addToSet: { ingredientes: 'Pepinillos' } };

        const result = await collection.updateMany(filter, update);

        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint29', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Chefs');
    
        const result = await collection.deleteMany({ especilaidad : 'Cocina Vegetariana'});
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint30', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.find({ ingredientes : { $size: 7 }}).toArray();
        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


router.get('/endpoint31', async (req, res) => {
    try{
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');


        const filter = { categoria : 'Gourmet' };
        const orden =  { precio: -1 } ;
      

        const result = await collection.find(filter).sort(orden).limit(1).toArray();

        res.json(result);
        client.close();
    }catch(err){
        console.log(err);
    }
})


 

router.get('/endpoint32', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.aggregate([
            { $unwind: '$ingredientes' }, 
            { $group: { _id: '$ingredientes', count: { $sum: 1 } } } 
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint33', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.aggregate([
            
            { $group: { _id: '$chef', count: { $sum: 1 } } } 
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint34', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.aggregate([
            { $group: { _id: '$categorias', count: { $sum: 1 } } },
            { $sort: {count: 1} }, 
            { $limit: 1 }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});



router.get('/endpoint35', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.aggregate([
            { $unwind: '$ingredientes' }, 
            { $lookup: { from: 'ingredientes', localField: 'ingredientes', foreignField: 'nombre', as: 'datos' } },
            { $group: {_id: '$chef', costoTotal: { $sum: { $sum: '$datos.precio' } } }   }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});



router.get('/endpoint36', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const hamburguesas = await db.collection('Hamburguesas').distinct('ingredientes');
        const result = await db.collection('ingredientes').find({ nombre: { $nin: hamburguesas } }).toArray(); //$nin singinfica que no coincide con ningun valor, en este caso devuelve los ingredientes que no esten en alguna hamburguesa
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint37', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.aggregate([
            { $lookup: { from: 'Categorias', localField: 'Categorias', foreignField: 'nombre', as: 'CategoriasData' } },
            { $project: {_id: 0, nombre: 1, 'CategoriasData.descripcion': 1 }   }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint38', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const collection = db.collection('Hamburguesas');
        const result = await collection.aggregate([
             { $unwind: '$ingredientes' },
             { $group: { _id: '$chef', ingredientesCount: { $sum: 1 } } },
            { $sort: { ingredientesCount: -1  } }, 
            { $limit: 1 }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint39', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const result = await db.collection('Hamburguesas').aggregate([
            {$group: { _id: '$categoria', precioPromedio: { $avg: '$precio'}}}
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});


router.get('/endpoint40', async (req, res) => {
    try {
        const client = new MongoClient(bases);
        await client.connect();
        const db = client.db(nombreBase);
        const result = await db.collection('Hamburguesas').aggregate([
            {$group: { _id: '$chef', hamburguesaCara: { $max: '$precio'}}},
            { $lookup: { from: 'chef', localField: '_id', foreignField: 'nombre', as: 'chefData' } },
            { $project: {_id: 0, 'chefData.nombre': 1, hamburguesaCara: 1 }   }
        ]).toArray();
        res.json(result);
        client.close();
    } catch (error) {
        console.log(error.message);
    }
});



module.exports = router;


//? $lt es un operador de comparación de mongo que significa less than (menor que).
//todo: $mul es un operador de actualización en mongo usado para multiplicar
//?primer argumento vacio del método find ({})  significa que se recuperaran todos los documentos de la colecció
//todo: $push es un operador de actualización (mongo) hecho para agregar elementos a un array en un documento existente
//?$set se utiliza para cambiar o actualizar el valor de un campo especifico en un documento sin afectar otros campos ni reemplazar el documento completo
//todo: $limit es una función de consulta que se utiliza para limitar el número de documentos que se recuperan como resultado de una consulta, en este caso solo queremos recuperar 1 documento
//?$not se usa para negar la expresion que esta en su interior
//todo:$in es para buscar coincidencias con uno de los valores proporcionados por el array
//? $regex permite buscar documentos cuyo campo cumpla con una expresión regular específica (lo que esta dentro de los slash /clasico/). la 'i' al final es para omitir mayusculas o minusculas y que estas no afecten la busqueda
//todo: $lte evalua si un valor en un campo es menor o igual al valor especificado
//? $expr se usa para evaluar una condicion
//todo: $size se utiliza para seleccionar documentos en función del tamaño de un campo de tipo array
//? el sort ordena los resultados de acuerdo al precio en orden ascendente
//todo: buscamos ingredientes que su precio sea mayor o igual a 2 y menor o igual a 5, empleando $gte(mayor o igual) y $lte(menor o igual)
//?utilizamos $set nuevamente para actualizar o cambiar un dato especifico
//todo:verifica que el nombre del chef sea diferente a ChefA, con $ne
//? $in comprueba si al menos uno de los valores dichos se encuentra en el array
//todo: $addToSet es un operador de actualización  que se utiliza para agregar un elemento a un array si ese elemento no existe ya en ese array. En este caso, se agrega pepinillos a los ingredientes de las hamburguesas clasicas
 //? aggregate() hace agregacion (es un proceso que permite realizar transformaciones y operaciones complejas en los datos antes de devolverlos) dentro de hamburguesas, la agregacion tiene 3 etapas ({})
//todo: $unwind separa los datos de un array, en este caso deja cada ingrediente individual
//? $group agrupa los ingredientes (por el id) y posteriormente count cuenta cuantos documentos hay en el grupo y suma 1 por cada uno
//todo: con $lookup se realiza una busqueda de nombres de ingredientes y las almacena en datos
//? $nin singinfica que no coincide con ningun valor, en este caso devuelve los ingredientes que no esten en alguna hamburguesa
//todo: $avg para calcular promedio




