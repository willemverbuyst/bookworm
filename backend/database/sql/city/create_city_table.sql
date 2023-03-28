DROP TABLE IF EXISTS city;
CREATE TABLE city (
  city_id UUID NOT NULL,
  city VARCHAR(250) NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  country_id UUID NOT NULL,
  PRIMARY KEY (city_id)
);
