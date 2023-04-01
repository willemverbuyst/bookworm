DROP TABLE IF EXISTS book_author;
CREATE TABLE book_author (
  book_author_id UUID NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  book_id UUID NOT NULL, 
  author_id UUID NOT NULL, 
  PRIMARY KEY (book_author_id)
);
