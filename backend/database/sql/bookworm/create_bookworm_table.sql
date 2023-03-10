DROP TABLE IF EXISTS bookworm;
CREATE TABLE bookworm (
  bookworm_id INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  user_account_id INT NOT NULL,
  library_id INT NOT NULL,
  PRIMARY KEY (bookworm_id)
);
