const express= require ("express");
const router= express.Router();
const mainController= require("../controllers/maincontroller")

// Ruta Raíz / ➝ Home
router.get('/', mainController.index);

module.exports = router