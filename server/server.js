const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Define app
const app = express();
app.use(cors());
app.use(express.json());

//Database Connection
//pgpromise can normally receive an options object. We are not going to pass it any options
//but we are still going to pass the parameters
const pgp = require("pg-promise")();
const cn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    allowExitOnIdle: true
}
const db = pgp(cn);

/*Endpoints */
//Define a first test end point, request and respond

//Get data from the database
app.get("/blog",(req, res) => {
    // res.json({message:"hello"})
    db.any('SELECT * FROM post')
    .then((data)=>res.json(data))
    .catch((error)=> console.log('ERROR: ', error))
})

/* app.get("/autor/:id_author",(req, res) => {
    db.any('SELECT * FROM autor')
    .then((data)=>res.json(data))
    .catch((error)=> console.log('ERROR: ', error))
}) */

app.get('/autor/:id_author',(req, res) => {
    db.one('SELECT * FROM autor WHERE id_author=$1',[req.params.id_author])
    .then((data)=>res.json(data))
    .catch((error)=> console.log('ERROR: ', error))
})

//Ge an individual post
app.get('/posts/:id_post',(req, res) => {
    //"one" instead of "any" because we only want 1 id
    //parameters received in brackets
    db.one('SELECT * FROM post WHERE id_post=$1',[req.params.id_post])
    .then((data)=>res.json(data))
    //Catch error
    .catch((error)=> console.log('ERROR: ', error))
})

//Start server
app.listen(8000, () => {
    console.log("Servidor corriendo en el puerto 8000");
})
