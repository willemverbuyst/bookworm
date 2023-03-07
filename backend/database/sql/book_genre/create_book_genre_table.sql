DROP TABLE IF EXISTS book_genre;
CREATE TABLE book_genre (
  book_id INT NOT NULL,
  genre_id INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (book_id)
);