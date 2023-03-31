DROP TABLE IF EXISTS bookworm;
CREATE TABLE bookworm (
  bookworm_id UUID NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  user_account_id UUID NOT NULL,
  library_id UUID NOT NULL,
  PRIMARY KEY (bookworm_id)
);
