DROP TABLE IF EXISTS rental;
CREATE TABLE rental (
  rental_id UUID NOT NULL,
  rental_date DATE NOT NULL, 
  return_date DATE, 
  last_updated TIMESTAMP NOT NULL,
  bookworm_id UUID NOT NULL, 
  inventory_id UUID NOT NULL, 
  staff_id UUID NOT NULL, 
  PRIMARY KEY (rental_id)
);
