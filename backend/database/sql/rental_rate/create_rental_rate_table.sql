DROP TABLE IF EXISTS rental_rate;
CREATE TABLE rental_rate (
  rental_rate_id UUID NOT NULL,
  rate NUMERIC NOT NULL, 
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (rental_rate_id)
);
