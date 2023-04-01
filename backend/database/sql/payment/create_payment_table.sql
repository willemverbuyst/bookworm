DROP TABLE IF EXISTS payment;
CREATE TABLE payment (
  payment_id UUID NOT NULL,
  amount NUMERIC NOT NULL, 
  payment_date DATE NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  bookworm_id UUID NOT NULL, 
  staff_id UUID NOT NULL, 
  rental_id UUID NOT NULL, 
  PRIMARY KEY (payment_id)
);
