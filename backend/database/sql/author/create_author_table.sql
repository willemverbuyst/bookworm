DROP TABLE IF EXISTS author;
CREATE TABLE author (
  author_id UUID NOT NULL,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (author_id)
);
