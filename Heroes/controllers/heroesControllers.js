const fs = require("fs");
let heroeS = {
	leerJSON: () => {
		return JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));
	},
	index: (req, res) => {
		res.send(heroeS.leerJSON())
	},
	bio: (req, res) => {
		let id = req.params.idHeroe
		let ok = req.params.ok
		let heroe = heroeS.leerJSON().filter((heroe) => {
			return heroe.id == id
		})
		heroe = heroe[0]

		if (heroe == undefined) {
			return res.send('No encontramos un heroe para mostrarte la biografia')
		}
		if (ok == 'ok') {
			return res.send(`${heroe.nombre}: \n\n${heroe.resenia}`)
		} else {
			return res.send(`${heroe.nombre}: Lamento que no desees saber mas de mi`)

		}
	

	}




}


app.get('/heroes/bio/:id/:ok?', (req, res) => {


});