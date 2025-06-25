CREATE DATABASE petshop;

USE petshop;

CREATE TABLE pets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  tipo VARCHAR(50) NOT NULL,
  idade INT NOT NULL
);

USE petshop;
SELECT * FROM pets;

DELETE FROM pets WHERE nome IS NULL OR tipo IS NULL OR idade IS NULL;

INSERT INTO pets (nome, tipo, idade) VALUES ('Rex', 'Cachorro', 3);