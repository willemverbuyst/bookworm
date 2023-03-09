DROP TABLE IF EXISTS language;
CREATE TABLE language (
  language_id INT NOT NULL,
  language NUMERIC NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (language_id)
);