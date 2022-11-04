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
  // test('/dogs', async () => {
  //   console.log(dogs);
  //   const expected = await request(app).post('/dogs').send(dogs);
  //   console.log(expected);
  //   const res = await request(app).get('/dogs');
  //   expect(res.body).toEqual(expected);
  // });
  afterAll(() => {
    pool.end();
  });
});

// describe('backend-express-template routes', () => {
//   it('example test - delete me!', () => {
//     expect(1).toEqual(1);
//   });
// });

// it('gets a cat by id', async () => {
//   const cat = {
//     name: 'Tilly',
//     age: 2,
//     favoriteTreat: 'canned food',
//   };
//   const returnedCat = await request(app).post('/cat/:id').send(cat);
//* .post and .send to send the created object to your database to then compare what is shown in app
//* const expected = await Cat.findById(returnedCat.id);
//   const res = await request(app).get(`/cat/${returnedCat.body.id}`);

//   expect(res.body).toEqual({ ...returnedCat.body });
// });

//! hard code data for the get all functions
