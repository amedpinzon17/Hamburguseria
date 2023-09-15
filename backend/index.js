const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const routerBase = require('./Routes/routes.js');
app.use('/Hamburgueseria', routerBase);


require('dotenv').config;
const port = process.env.PORT;
app.use(express.json());
app.listen(port, () => {
    console.log(`server corriendose en ${port}`);
});


