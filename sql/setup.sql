-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS neighborhood_dogs;

CREATE TABLE neighborhood_dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  breed VARCHAR NOT NULL,
  favorite_snack VARCHAR NOT NULL,
  age INT NOT NULL,
  is_sociable BOOLEAN NOT NULL
);

INSERT INTO neighborhood_dogs (name, breed, favorite_snack, age, is_sociable)
VALUES 
('Brodie', 'Corgi', 'freeze-dried chicken', 3, TRUE),
('Lexi', 'Shiba Inu', 'Costco chicken jerky', 3, FALSE),
('Harris', 'Pitbull', 'fresh fruit', 8, TRUE),
('Gandalf', 'Great Dane', 'Beef jerky', 2, TRUE),
('Savanna', 'Great Dane/ Labrador', 'Beef jerky', 9, FALSE),
('Howie', 'Golden Retriever', 'ANYTHING', 1, TRUE);

DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    pokedex_number INT NOT NULL,
    region VARCHAR NOT NULL
);

INSERT INTO pokemon (name, type, pokedex_number, region)
VALUES
('Charmander', 'fire', 4, 'Kanto'),
('Gyarados', 'water', 130, 'Kanto'),
('Dragonite', 'dragon', 149, 'Kanto'),
('Snorunt', 'ice', 361, 'Hoenn'), 
('Dusclops', 'ghost', 356, 'Hoenn'),
('Totodile', 'water', 158, 'Johto'),
('Bayleef', 'grass', 153, 'Johto');