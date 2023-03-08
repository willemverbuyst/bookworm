DROP TABLE IF EXISTS library;
CREATE TABLE library (
  library_id INT NOT NULL,
  staff_id INT NOT NULL,
  address_id INT NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (library_id)
);