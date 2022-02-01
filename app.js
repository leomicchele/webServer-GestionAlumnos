const express = require('express');
const res = require('express/lib/response');
const app = express();
const cors = require("cors");
require('dotenv').config()

const port = process.env.PORT

const { obtenerFirebase } = require('./helpers/FirestoreCrud');

// Middleware
app.use(express.static('public'))
app.use(cors());

app.get('/app/obtenerAlumnos', async (req, res) => {
   const { filtro, valor } = req.query

   let alumnos = [];
   let todosLosAlumnos = await obtenerFirebase();

   alumnos = todosLosAlumnos.filter((alumno) => {
     const nombreLower = alumno[filtro].toLowerCase();

     if (nombreLower.includes(valor.toLowerCase())) {
       return alumno;
     }
   });

   res.json(alumnos);
   res.end();

})
app.get('*', (req, res) => {

   res.sendFile(__dirname + '/public/index.html')

})

app.listen(port, () => {
   console.log('Servidor corriendo en el puerto', port);
} )