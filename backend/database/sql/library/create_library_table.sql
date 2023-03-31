DROP TABLE IF EXISTS library;
CREATE TABLE library (
  library_id UUID NOT NULL,
  library_name VARCHAR (250) NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  address_id UUID NOT NULL, 
  PRIMARY KEY (library_id)
);
