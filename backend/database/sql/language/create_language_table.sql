DROP TABLE IF EXISTS language;
CREATE TABLE language (
  language_id UUID NOT NULL,
  name_of_language VARCHAR(250) NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (language_id)
);
