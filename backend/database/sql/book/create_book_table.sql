DROP TABLE IF EXISTS book;
CREATE TABLE book (
  book_id INT NOT NULL,
  book_title VARCHAR(250) NOT NULL,
  book_language VARCHAR(250) NOT NULL,
  book_author_id INT NOT NULL,
  book_year  VARCHAR(250) NOT NULL,
  book_read INT NOT NULL,
  PRIMARY KEY (book_id)
);