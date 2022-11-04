// once models are done, the controller will handle and display the appropriate data based on the user routes
// need Router from express
// import the class from models

const { Router } = require('express');
const NeighborhoodDog = require('../models/NeighborhoodDogs');

// reminders:
// module.exports = Router()
// paths set with .get method and we're sending back JSON

module.exports = Router().get('/', async (req, res) => {
  const dog = await NeighborhoodDog.getAll();
  //   const filtered = dog.map((dog) => ({
  //     ...dog,
  //   }));
  const filtered = dog.map(({ id, name }) => ({
    id,
    name,
  }));
  res.json(filtered);
});
