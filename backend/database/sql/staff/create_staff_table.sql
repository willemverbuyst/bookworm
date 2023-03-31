DROP TABLE IF EXISTS staff;
CREATE TABLE staff (
  staff_id UUID NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  user_account_id UUID NOT NULL,
  library_id UUID NOT NULL,
  PRIMARY KEY (staff_id)
);
