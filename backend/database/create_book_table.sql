CREATE TABLE IF NOT EXISTS book (
  book_id INT NOT NULL,
  book_title VARCHAR(250) NOT NULL,
  book_language VARCHAR(250) NOT NULL,
  book_author VARCHAR(250) NOT NULL,
  book_year INT NOT NULL,
  book_read BOOL NOT NULL,
  PRIMARY KEY (book_id)
);