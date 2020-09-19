const express = require('express')
const app = express()
const pokemonsRoute = require('./routes/pokemonsRoute')

app.use('/pokemons', pokemonsRoute)

module.exports = app