DROP TABLE IF EXISTS book;
CREATE TABLE book (
  book_id INT NOT NULL,
  title VARCHAR(250) NOT NULL,
  language VARCHAR(250) NOT NULL,
  author_id INT NOT NULL,
  year  VARCHAR(250) NOT NULL,
  read INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (book_id)
);