SELECT 
	payment_id, 
  bookworm_id, 
  staff_id, 
  amount,
(SELECT SUM(amount) FROM payment p2
 WHERE p1.bookworm_id = p2.bookworm_id) AS sum_amount,
(SELECT COUNT(amount) FROM payment p2
 WHERE p1.bookworm_id = p2.bookworm_id) AS count_payments
FROM payment p1
ORDER BY bookworm_id;