// once models are done, the controller will handle and display the appropriate data based on the user routes
// need Router from express
// import the class from models

const { Router } = require('express');
const NeighborhoodDog = require('../models/NeighborhoodDogs');

// reminders:
// module.exports = Router()
// paths set with .get method and we're sending back JSON

module.exports = Router()
  .get('/:id', async (req, res) => {
    const dog = await NeighborhoodDog.getById(req.params.id);
    res.json(dog);
  })
  .get('/', async (req, res) => {
    const dogs = await NeighborhoodDog.getAll();
    const filtered = dogs.map(({ id, name }) => ({
      id,
      name,
    }));
    res.json(filtered);
  });
