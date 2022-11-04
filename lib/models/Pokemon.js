const pool = require('../utils/pool');

module.exports = class Pokemon {
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.pokedex_number = row.pokedex_number;
    this.region = row.region;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from pokemon');
    return rows.map((row) => new Pokemon(row));
  }
};
