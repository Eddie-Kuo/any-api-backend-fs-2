const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const { pokemonList } = require('../lib/pokemon-data');

describe('pokemon routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/pokemon route returns list', async () => {
    const res = await request(app).get('/pokemon');
    const expected = pokemonList.map((pokemon) => {
      return { id: pokemon.id, name: pokemon.name, type: pokemon.type };
    });
    expect(res.body).toEqual(expected);
  });
  test('/pokemon/:id detail route', async () => {
    const res = await request(app).get('/pokemon/1');
    const expected = {
      id: '1',
      name: 'Charmander',
      type: 'fire',
      pokedex_number: 4,
      region: 'Kanto',
    };
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
