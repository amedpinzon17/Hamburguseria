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

## Endpoint 21
- **URL:** `/endpoint21`
- **Descripción:** Busca y devuelve ingredientes cuyo precio esté en el rango de $2 a $5.
- **Método HTTP:** GET
- **Funciones nativas utilizadas:**
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 22
- **URL:** `/endpoint22`
- **Descripción:** Actualiza la descripción del ingrediente "Pan" a "Pan fresco y crujiente".
- **Método HTTP:** GET
- **Funciones nativas utilizadas:**
  - `MongoClient`, `connect()`, `db.collection()`, `updateOne()`, `res.json()`

## Endpoint 23
- **URL:** `/endpoint23`
- **Descripción:** Busca hamburguesas que contengan los ingredientes "Tomate" y "Lechuga".
- **Método HTTP:** GET
- **Funciones nativas utilizadas:**
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 24
- **URL:** `/endpoint24`
- **Descripción:** Filtra chefs cuyo nombre no sea "ChefA".
- **Método HTTP:** GET
- **Funciones nativas utilizadas:**
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `toArray()`, `res.json()`

## Endpoint 25
- **URL:** `/endpoint25`
- **Descripción:** Incrementa el precio de las hamburguesas de la categoría "Gourmet" en $2.
- **Método HTTP:** GET
- **Funciones nativas utilizadas:**
  - `MongoClient`, `connect()`, `db.collection()`, `updateOne()`, `res.json()`

## Endpoint 26
- **URL:** `/endpoint26`
- **Descripción:** Lista todos los ingredientes ordenados alfabéticamente por nombre.
- **Método HTTP:** GET
- **Funciones nativas utilizadas:**
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `sort()`, `toArray()`, `res.json()`

## Endpoint 27
- **URL:** `/endpoint27`
- **Descripción:** Encuentra la hamburguesa más cara en la base de datos.
- **Método HTTP:** GET
- **Funciones nativas utilizadas:**
  - `MongoClient`, `connect()`, `db.collection()`, `find()`, `sort()`, `limit()`, `toArray()`, `res.json()`


## Endpoint 28
  -  **URL:** `/endpoint28`
  -  **Descripción:** Agrega el ingrediente "Pepinillos" a todas las hamburguesas de la categoría "Clásica".
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
       ` MongoClient`,
       `connect()`,
        `db.collection()`,
        `updateMany()`,
        `res.json()`

## Endpoint 29
  -  **URL:** `/endpoint29`
  -  **Descripción:** Elimina todos los chefs especializados en "Cocina Vegetariana" de la base de datos.
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
        `MongoClient`,
        `connect()`,
        `db.collection()`,
        `deleteMany()`,
        `res.json()`

## Endpoint 30
  -  **URL:** `/endpoint30`
  -  **Descripción:** Encuentra todas las hamburguesas que contienen exactamente 7 ingredientes.
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
        `MongoClient`,
        `connect()`,
        `db.collection()`,
       ` find()`,
        `toArray()`,
        `res.json()`

## Endpoint 31
  -  **URL:** `/endpoint31`
  -  **Descripción:** Encuentra la hamburguesa gourmet más cara en la base de datos.
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
        `MongoClient`,
        `connect()`,
        `db.collection()`,
        `find()`,
        `sort()`,
        `limit()`,
        `toArray()`,
        `res.json()`


## Endpoint 32
  -  **URL:** `/endpoint32`
  -  **Descripción:** Realiza una agregación para contar cuántas veces se usa cada ingrediente en las hamburguesas y devuelve el resultado.
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
        `MongoClient`,
        `connect()`,
        `db.collection()`,
        `aggregate()`,
        `$unwind`,
        `$group`,
        `toArray()`,
        `res.json()`

## Endpoint 33
  -  **URL:** `/endpoint33`
  -  **Descripción:** Realiza una agregación para contar cuántas hamburguesas ha preparado cada chef y devuelve el resultado.
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
        `MongoClient`,
        `connect()`,
        `db.collection()`,
        `aggregate()`,
        `$group`,
        `toArray()`,
        `res.json()`

## Endpoint 34
  -  **URL:** `/endpoint34`
  -  **Descripción:** Encuentra la categoría con la menor cantidad de hamburguesas y la devuelve.
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
        `MongoClient`,
        `connect()`,
        `db.collection()`,
        `aggregate()`,
        `$group`,
        `$sort`,
        `$limit`,
        `toArray()`,
        `res.json()`

## Endpoint 35
  -  **URL:** `/endpoint35`
  -  **Descripción:** Calcula el costo total de las hamburguesas preparadas por cada chef y lo devuelve.
  -  **Método HTTP:** GET
  -  **Funciones nativas utilizadas:**
        `MongoClient`,
        `connect()`,
        `db.collection()`,
        `distinct()`,
        `find()`,
        `toArray()`,
        `$nin`,
        `res.json()`,

# Endpoints de MongoDB

En este archivo se documentan varios endpoints que interactúan con una base de datos MongoDB.

## Endpoint 36

- URL: `/endpoint36`
- Descripción: Encuentra los ingredientes que no están presentes en ninguna hamburguesa y los devuelve.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`
  - `connect()`
  - `db.collection()`
  - `distinct()`
  - `find()`
  - `$nin`
  - `toArray()`
  - `res.json()`

## Endpoint 37

- URL: `/endpoint37`
- Descripción: Realiza una agregación para obtener el nombre de cada hamburguesa y su descripción de categoría correspondiente.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`
  - `connect()`
  - `db.collection()`
  - `aggregate()`
  - `$lookup`
  - `$project`
  - `toArray()`
  - `res.json()`

## Endpoint 38

- URL: `/endpoint38`
- Descripción: Encuentra el chef que ha utilizado la mayoría de ingredientes en sus hamburguesas.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`
  - `connect()`
  - `db.collection()`
  - `aggregate()`
  - `$unwind`
  - `$group`
  - `$sort`
  - `$limit`
  - `toArray()`
  - `res.json()`

## Endpoint 39

- URL: `/endpoint39`
- Descripción: Calcula el precio promedio de las hamburguesas agrupadas por categoría y lo devuelve.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`
  - `connect()`
  - `db.collection()`
  - `aggregate()`
  - `$group`
  - `toArray()`
  - `res.json()`

## Endpoint 40

- URL: `/endpoint40`
- Descripción: Encuentra el chef que ha creado la hamburguesa más cara y muestra su nombre junto con el precio de la hamburguesa.
- Método HTTP: GET
- Funciones nativas utilizadas:
  - `MongoClient`
  - `connect()`
  - `db.collection()`
  - `aggregate()`
  - `$group`
  - `$max`
  - `$lookup`
  - `$project`
  - `toArray()`
  - `res.json()`





# Operadores y Conceptos MongoDB

En MongoDB, se utilizan varios operadores y conceptos para realizar consultas y actualizaciones en la base de datos. Aquí se describen algunos de los operadores y conceptos más comunes:

## Operadores de Comparación

- `$lt`: Significa "menor que" y se utiliza para comparar valores en consultas.
- `$lte`: Significa "menor o igual que" y se utiliza para comparar valores en consultas.

## Operadores de Actualización

- `$mul`: Se utiliza para multiplicar valores en un documento.
- `$push`: Agrega elementos a un array en un documento existente.
- `$set`: Cambia o actualiza el valor de un campo específico en un documento sin afectar otros campos ni reemplazar el documento completo.

## Funciones de Consulta

- `$limit`: Limita el número de documentos recuperados como resultado de una consulta. Útil cuando se desea recuperar un número específico de documentos.
- `$not`: Se utiliza para negar una expresión en una consulta.
- `$in`: Busca coincidencias con uno de los valores proporcionados en un array.
- `$regex`: Permite buscar documentos cuyo campo cumpla con una expresión regular específica. La opción `i` al final ignora mayúsculas y minúsculas.

## Operadores de Agregación

- `$expr`: Se utiliza para evaluar una condición en una agregación.
- `$size`: Se utiliza para seleccionar documentos en función del tamaño de un campo de tipo array.
- `$avg`: Calcula el promedio de un conjunto de valores numéricos.

## Conceptos de Agregación

- `$unwind`: Separa los datos de un array en documentos individuales.
- `$group`: Agrupa documentos en función de un campo y realiza cálculos en los grupos.
- `$lookup`: Realiza búsquedas en otra colección y agrega los resultados al documento actual.

## Otros Operadores

- `$ne`: Comprueba que un valor no sea igual a otro valor.
- `$nin`: Comprueba que un valor no coincida con ninguno de los valores proporcionados en un array.
- `$addToSet`: Agrega un elemento a un array si ese elemento no existe en el array.

Estos operadores y conceptos son esenciales para realizar consultas y actualizaciones avanzadas en MongoDB. Puedes combinarlos y utilizarlos de diversas formas para obtener los resultados deseados en tu base de datos.
