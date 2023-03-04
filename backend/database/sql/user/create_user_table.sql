DROP TABLE IF EXISTS user_account;
CREATE TABLE user_account (
  user_account_id,
  user_account_username VARCHAR(250) NOT NULL,
  user_account_email VARCHAR(250) NOT NULL,
  user_account_password VARCHAR(250) NOT NULL,
  PRIMARY KEY (user_account_id)
);