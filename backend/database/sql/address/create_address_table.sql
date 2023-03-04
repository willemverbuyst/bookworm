DROP TABLE IF EXISTS address;
CREATE TABLE address (
  address_id INT NOT NULL,
  address VARCHAR(250) NOT NULL,
  city_id INT NOT NULL,
  postal_code VARCHAR(250) NOT NULL,
  phone VARCHAR(250) NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (address_id)
);