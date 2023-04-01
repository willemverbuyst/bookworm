DROP TABLE IF EXISTS review;
CREATE TABLE review (
  review_id UUID NOT NULL, 
  description TEXT NOT NULL, 
  rating INT NOT NULL, 
  startdate DATE NOT NULL, 
  enddate DATE NOT NULL, 
  duration INT NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  book_id UUID NOT NULL, 
  bookworm_id UUID NOT NULL, 
  PRIMARY KEY (review_id)
);
