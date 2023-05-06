SELECT user_account_id, UPPER(first_name), 'user' AS origin FROM user_account
UNION
SELECT author_id, UPPER(first_name), 'author' AS origin FROM author;