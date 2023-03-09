DROP TABLE IF EXISTS rental;
CREATE TABLE rental (
  rental_id INT NOT NULL,
  rental_date DATE NOT NULL, 
  return_date DATE NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  bookworm_id INT NOT NULL, 
  inventory_id INT NOT NULL, 
  staff_id INT NOT NULL, 
  PRIMARY KEY (rental_id)
);