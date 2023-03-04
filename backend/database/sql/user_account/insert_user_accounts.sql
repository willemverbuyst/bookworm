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
  9999,
  2001,
  'Ping',
  'Pong',
  'Batman',
  'ping@pong.io',
  3001,
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
  9998,
  2001,
  'Jack',
  'Sparrow',
  'Jack',
  'jack@sparrow.io',
  3002,
  '2023-02-03',
  CURRENT_TIMESTAMP,
  'test123',
  true
);