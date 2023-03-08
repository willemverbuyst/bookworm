DROP TABLE IF EXISTS user_account;
CREATE TABLE user_account (
  user_account_id INT NOT NULL,
  library_id INT NOT NULL,
  first_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  email VARCHAR(250) NOT NULL,
  address_id INT NOT NULL,
  create_date DATE NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  password VARCHAR(250) NOT NULL,
  activebool BOOLEAN NOT NULL,
  activeint INT NOT NULL,
  PRIMARY KEY (user_account_id)
);