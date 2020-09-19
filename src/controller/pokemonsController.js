const pokemons = require('../model/pokemons.json')

const getAll = (request, response) => {
    console.log(request.url)
    response.status(200).send(pokemons)
}

module.exports = {
    getAll
}