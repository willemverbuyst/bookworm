DROP TABLE IF EXISTS city;
CREATE TABLE city (
  city_id INT NOT NULL,
  city_name VARCHAR(250) NOT NULL,
  country_id INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (city_id)
);