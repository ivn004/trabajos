const express= require ("express");
const router= express.Router();
const heroesController= require("../controllers/heroescontroller")

// Ruta Raíz / ➝ Home
router.get('/', heroesController.index);


// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id',heroesController.detalle) 
module.exports = router