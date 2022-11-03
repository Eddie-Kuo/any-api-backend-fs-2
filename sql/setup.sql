-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS neighborhood_dogs;

CREATE TABLE neighborhood_dogs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  breed VARCHAR NOT NULL,
  favorite_snack VARCHAR NOT NULL,
  age INT NOT NULL
  sociable BOOLEAN NOT NULL
);

INSERT INTO cartoon_cats (name, breed, favorite_snack, age, sociable)
VALUES 
('Brodie', 'Corgi', 'freeze-dried chicken', 3, TRUE),
('Lexi', 'Shiba Inu', 'Costco chicken jerky', 3, FALSE),
('Harris', 'Pitbull', 'fresh fruit', 8, TRUE),
('Gandalf', 'Great Dane', 'Beef jerky', 2, TRUE),
('Savanna', 'Great Dane/ Labrador', 'Beef jerky', 9, FALSE),
('Howie', 'Golden Retriever', 'ANYTHING', 1, TRUE),