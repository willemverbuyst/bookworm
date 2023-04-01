DROP TABLE IF EXISTS inventory;
CREATE TABLE inventory (
  inventory_id UUID NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  book_id UUID NOT NULL, 
  library_id UUID NOT NULL, 
  PRIMARY KEY (inventory_id)
);
