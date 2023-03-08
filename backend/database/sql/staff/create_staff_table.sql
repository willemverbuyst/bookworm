DROP TABLE IF EXISTS staff;
CREATE TABLE staff (
  staff_id INT NOT NULL,
  user_id INT NOT NULL,
  last_updated TIMESTAMP NOT NULL,
  PRIMARY KEY (staff_id)
);