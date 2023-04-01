DROP TABLE IF EXISTS user_account;
CREATE TABLE user_account (
  user_account_id UUID NOT NULL,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  create_date DATE NOT NULL,
  password VARCHAR(250) NOT NULL,
  activebool BOOLEAN NOT NULL,
  activeint INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  address_id UUID NOT NULL,
  birth_date DATE NOT NULL, 
  place_of_birth UUID NOT NULL, 
  PRIMARY KEY (user_account_id)
);
