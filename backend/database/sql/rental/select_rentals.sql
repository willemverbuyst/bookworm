SELECT 
    rental.rental_id, 
    rental.rental_date, 
    rental.return_date, 
    book.title, 
    CONCAT (author.first_name, ' ', author.last_name) as author 
FROM rental 
FULL OUTER JOIN inventory 
ON rental.inventory_id = inventory.inventory_id 
FULL OUTER JOIN book 
ON inventory.book_id = book.book_id 
INNER JOIN book_author 
ON book.book_id = book_author.book_id 
INNER JOIN author 
ON author.author_id = book_author.author_id 
LIMIT %s 
OFFSET %s;