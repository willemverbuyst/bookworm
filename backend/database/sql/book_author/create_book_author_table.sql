DROP TABLE IF EXISTS book_author;
CREATE TABLE book_author (
  book_author_id INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  book_id INT NOT NULL, 
  author_id INT NOT NULL, 
  PRIMARY KEY (book_author_id)
);