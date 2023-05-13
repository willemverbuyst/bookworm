SELECT 
	payment.payment_id, 
  payment.amount, 
  payment.payment_date, 
  book.title, 
  user_account.email 
FROM payment
INNER JOIN bookworm
ON payment.bookworm_id = bookworm.bookworm_id
INNER JOIN user_account
ON bookworm.user_account_id = user_account.user_account_id
INNER JOIN rental
ON payment.rental_id = rental.rental_id
INNER JOIN inventory
ON rental.inventory_id = inventory.inventory_id
INNER JOIN book
ON inventory.book_id = book.book_id 
WHERE payment.amount < %s;