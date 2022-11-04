const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const { dogs } = require('../lib/dogs-data');
// const app = require('../lib/app');

describe('dog routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/dogs should return list of dog names + id', async () => {
    const res = await request(app).get('/dogs');
    const expected = dogs.map((dog) => {
      return { id: dog.id, name: dog.name };
    });
    expect(res.body).toEqual(expected);
  });
  test('/dogs/:id detail route', async () => {
    const res = await request(app).get('/dogs/1');
    const expected = {
      id: '1',
      name: 'Brodie',
      breed: 'Corgi',
      favorite_snack: 'freeze-dried chicken',
      age: 3,
      is_sociable: true,
    };
    expect(res.body).toEqual(expected);
  });
  afterAll(() => {
    pool.end();
  });
});
