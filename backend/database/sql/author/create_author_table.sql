CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS author;
CREATE TABLE author (
  author_id INT NOT NULL,
  author_name VARCHAR(250) NOT NULL,
  PRIMARY KEY (author_id)
);