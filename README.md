# Descripción de Endpoints

A continuación, se describen los endpoints disponibles en la aplicación junto con detalles sobre los parámetros y funciones nativas utilizadas:

## Endpoint 1
- URL: `/endpoint1`
- Descripción: Busca y devuelve los ingredientes con un stock inferior a 400.
- Método HTTP: GET
- Parámetros:
  - `stock`: Menor a 400
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 2
- URL: `/endpoint2`
- Descripción: Busca y devuelve las hamburguesas de la categoría 'Vegetariana'.
- Método HTTP: GET
- Parámetros:
  - `Categorias`: 'Vegetariana'
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 3
- URL: `/endpoint3`
- Descripción: Busca y devuelve los chefs con especialidad en 'Carnes'.
- Método HTTP: GET
- Parámetros:
  - `especialidad`: 'Carnes'
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 4
- URL: `/endpoint4`
- Descripción: Incrementa en 1.5 el precio de todos los ingredientes.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `updateMany()`, `toArray()`, `res.json()`

## Endpoint 5
- URL: `/endpoint5`
- Descripción: Busca y devuelve las hamburguesas creadas por el chef 'ChefB'.
- Método HTTP: GET
- Parámetros:
  - `chef`: 'ChefB'
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 6
- URL: `/endpoint6`
- Descripción: Busca y devuelve las categorías con los campos 'nombre' y 'descripcion'.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 7
- URL: `/endpoint7`
- Descripción: Elimina todos los ingredientes con un stock de 0 y devuelve un mensaje.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `deleteMany()`, `res.json()`

## Endpoint 8
- URL: `/endpoint8`
- Descripción: Inserta un nuevo ingrediente en la colección 'Ingredientes'.
- Método HTTP: GET
- Parámetros:
  - Datos del nuevo ingrediente (nombre, descripción, precio, stock)
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `insertOne()`, `res.json()`

## Endpoint 9
- URL: `/endpoint9`
- Descripción: Busca y devuelve las hamburguesas que contienen el ingrediente 'Pan integral'.
- Método HTTP: GET
- Parámetros:
  - `ingredientes`: 'Pan integral'
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 10
- URL: `/endpoint10`
- Descripción: Actualiza la especialidad del chef 'ChefC' a 'Cocina internacional'.
- Método HTTP: GET
- Parámetros:
  - `nombre`: 'ChefC'
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `updateOne()`, `res.json()`

## Endpoint 11
- URL: `/endpoint11`
- Descripción: Busca y devuelve el ingrediente con el precio más alto.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `sort()`, `limit()`, `toArray()`, `res.json()`

## Endpoint 12
- URL: `/endpoint12`
- Descripción: Busca y devuelve las hamburguesas que no contienen el ingrediente 'queso cheddar'.
- Método HTTP: GET
- Parámetros:
  - `ingredientes`: { $not: { $in: ['queso cheddar'] } }
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 13
- URL: `/endpoint13`
- Descripción: Incrementa el stock del ingrediente 'Pan' en 100 unidades.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `updateOne()`, `res.json()`

## Endpoint 14
- URL: `/endpoint14`
- Descripción: Busca y devuelve los ingredientes cuya descripción contiene la palabra 'clasico'.
- Método HTTP: GET
- Parámetros:
  - `descripcion`: { $regex: /clasico/i }
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 15
- URL: `/endpoint15`
- Descripción: Busca y devuelve las hamburguesas con un precio igual o menor a 9.
- Método HTTP: GET
- Parámetros:
  - `precio`: { $lte: 9 }
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 16
- URL: `/endpoint16`
- Descripción: Cuenta el número de documentos en la colección 'Chefs'.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `countDocuments()`, `res.json()`

## Endpoint 17
- URL: `/endpoint17`
- Descripción: Busca y devuelve las categorías cuya descripción contiene la palabra 'gourmet'.
- Método HTTP: GET
- Parámetros:
  - `descripcion`: { $regex: /gourmet/i }
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 18
- URL: `/endpoint18`
- Descripción: Elimina las hamburguesas que tienen menos de 5 ingredientes.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `deleteMany()`, `$expr`, `$lt`, `$size`, `res.json()`

## Endpoint 19
- URL: `/endpoint19`
- Descripción: Inserta un nuevo chef en la colección 'Chefs'.
- Método HTTP: GET
- Parámetros:
  - Datos del nuevo chef (nombre, especialidad)
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `insertOne()`, `res.json()`

## Endpoint 20
- URL: `/endpoint20`
- Descripción: Busca y devuelve todas las hamburguesas ordenadas por precio ascendente.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `sort()`, `toArray()`, `res.json()`

