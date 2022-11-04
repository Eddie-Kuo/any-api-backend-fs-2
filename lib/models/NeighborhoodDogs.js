// set up models to get data from database
// this is were we write out the 'fetch functions' as well
// need pool from utils - pools is what is connected to postgres where our data will live?

// reminders:
// module.exports
// static functions - async and they should all return a new class

const pool = require('../utils/pool');

module.exports = class NeighborhoodDog {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.breed = row.breed;
    this.favorite_snack = row.favorite_snack;
    this.age = row.age;
    this.is_sociable = row.is_sociable;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from neighborhood_dogs');
    return rows.map((row) => new NeighborhoodDog(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from neighborhood_dogs WHERE id = $1',
      [id]
    );
    return new NeighborhoodDog(rows[0]);
  }
};
