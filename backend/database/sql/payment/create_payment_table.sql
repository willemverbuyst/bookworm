DROP TABLE IF EXISTS payment;
CREATE TABLE payment (
  payment_id INT NOT NULL,
  amount NUMERIC NOT NULL, 
  payment_date DATE NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  bookworm_id INT NOT NULL, 
  staff_id INT NOT NULL, 
  rental_id INT NOT NULL, 
  PRIMARY KEY (payment_id)
);