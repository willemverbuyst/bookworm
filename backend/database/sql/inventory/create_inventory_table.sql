DROP TABLE IF EXISTS inventory;
CREATE TABLE inventory (
  inventory_id INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  book_id INT NOT NULL, 
  library_id INT NOT NULL, 
  PRIMARY KEY (inventory_id)
);
