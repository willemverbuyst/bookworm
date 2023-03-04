INSERT INTO user_account (
  user_account_id,
  bookstore_id,
  first_name,
  last_name,
  username,
  email,
  address_id,
  create_date,
  last_upated,
  password,
  active
) 
VALUES (
  1,
  1,
  'Ping',
  'Pong',
  'Batman',
  'ping@pong.io',
  1,
  '2023-02-04',
  CURRENT_TIMESTAMP,
  'test123',
  true
);

INSERT INTO user_account (
  user_account_id,
  bookstore_id,
  first_name,
  last_name,
  username,
  email,
  address_id,
  create_date,
  last_upated,
  password,
  active
) 
VALUES (
  2,
  1,
  'Jack',
  'Sparrow',
  'Jack',
  'jack@sparrow.io',
  2,
  '2023-02-03',
  CURRENT_TIMESTAMP,
  'test123',
  false
);