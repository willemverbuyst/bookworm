DROP TABLE IF EXISTS book;
CREATE TABLE book (
  book_id UUID NOT NULL,
  title VARCHAR(250) NOT NULL,
  year_published  VARCHAR(250) NOT NULL,
  replacement_cost NUMERIC NOT NULL, 
  pages INT NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  language_id UUID NOT NULL,
  genre_id UUID NOT NULL,
  rental_rate_id UUID NOT NULL, 
  PRIMARY KEY (book_id)
);
