const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const { request } = require('express');
const app = require('../lib/app');
// const request = require('supertest');
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
  afterAll(() => {
    pool.end();
  });
});

// describe('backend-express-template routes', () => {
//   it('example test - delete me!', () => {
//     expect(1).toEqual(1);
//   });
// });
