// Require de Express
const express = require("express");

// Require de FS
const fs = require("fs");

// Ejecución de Express
const app = express();
const heroesRouter= require("./routes/heroes.js");

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const mainRouter= require("./routes/main");
app.use("/", mainRouter);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use("/heroes", heroesRouter);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?',


// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
}))