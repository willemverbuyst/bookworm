DROP TABLE IF EXISTS book;
CREATE TABLE book (
  book_id INT NOT NULL,
  title VARCHAR(250) NOT NULL,
  year_published  VARCHAR(250) NOT NULL,
  replacement_cost NUMERIC NOT NULL, 
  pages INT NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  language_id INT NOT NULL,
  genre_id INT NOT NULL,
  rental_rate_id INT NOT NULL, 
  PRIMARY KEY (book_id)
);
