SELECT 
    rental.rental_id, 
    rental.rental_date, 
    rental.return_date, 
    book.title, 
    CONCAT (author.first_name, ' ', author.last_name) as author 
FROM rental 
INNER JOIN inventory 
ON rental.inventory_id = inventory.inventory_id 
INNER JOIN book 
ON inventory.book_id = book.book_id 
INNER JOIN book_author 
ON book.book_id = book_author.book_id 
INNER JOIN author 
ON author.author_id = book_author.author_id 
ORDER BY rental.return_date DESC, rental.rental_date DESC  
LIMIT %s 
OFFSET %s;