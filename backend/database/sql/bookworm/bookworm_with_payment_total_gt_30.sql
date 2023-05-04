SELECT 
	payment.bookworm_id, 
  user_account.email, 
  SUM(amount) FROM payment
INNER JOIN bookworm
ON payment.bookworm_id = bookworm.bookworm_id
INNER JOIN user_account
ON bookworm.user_account_id = user_account.user_account_id
GROUP BY payment.bookworm_id, user_account.email
HAVING SUM(AMOUNT) > 30;

-- SELECT user_account.email
-- FROM bookworm
-- INNER JOIN user_account
-- ON user_account.user_account_id = bookworm.user_account_id
-- WHERE bookworm_id IN (SELECT bookworm_id
--                       FROM payment
--                       GROUP BY bookworm_id
--                       HAVING SUM(amount) > 30)
