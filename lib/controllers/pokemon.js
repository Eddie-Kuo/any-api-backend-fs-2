const { Router } = require('express');
const Pokemon = require('../models/Pokemon');

module.exports = Router().get('/', async (req, res) => {
  const pokemonList = await Pokemon.getAll();
  const filtered = pokemonList.map(({ id, name, type }) => ({
    id,
    name,
    type,
  }));
  res.json(filtered);
});
