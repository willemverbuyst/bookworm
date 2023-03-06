DROP TABLE IF EXISTS genre;
CREATE TABLE genre (
  genre_id INT NOT NULL,
  name VARCHAR(250) NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (genre_id)
);