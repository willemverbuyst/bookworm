DROP TABLE IF EXISTS staff;
CREATE TABLE staff (
  staff_id INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  user_account_id INT NOT NULL,
  library_id INT NOT NULL,
  PRIMARY KEY (staff_id)
);