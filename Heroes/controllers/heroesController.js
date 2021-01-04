const fs = require('fs');

let heroesCont = {
    leerJSON: () => {
        return JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'))
    },

    index: (req, res) => {
        res.send(heroesCont.leerJSON());
    },
    detalle: (req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let id = req.params.id

        let heroe = heroesCont.leerJSON().filter((heroe) => {
            return heroe.id == id
        });

        heroe = heroe[0]

        if (heroe == undefined) {
            res.send('Este heroe no fue encontrado :( prueve con otra id')
        } else {
            res.send(`Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`)
        }
    },
    bio: (req, res) => {
        // Acá lo primero será encontrar al héroe que corresponda
        let id = req.params.id
        let ok = req.params.ok

        let heroe = heroesCont.leerJSON().filter((heroe) => {
            return heroe.id == id
        });

        heroe = heroe[0]

        if (heroe == undefined) {
            return res.send('No tenemos un héroe para mostrar su biografia')
        }

        if (ok == 'ok') {
            return res.send(`${heroe.nombre}: ${heroe.resenia}`)
        } else {
            return res.send(`${heroe.nombre}. Lamento que no desees saber más de mi :(`)
        }
    }
}
module.exports = heroesCont