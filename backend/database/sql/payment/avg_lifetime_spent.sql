SELECT ROUND(AVG(total_amount), 2) AS avg_lifetime_spent
FROM
(SELECT 
	bookworm_id, 
  SUM(amount) AS total_amount
FROM payment
GROUP BY bookworm_id) AS subquery;