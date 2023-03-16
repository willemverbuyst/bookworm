SELECT 
author.author_id, 
CONCAT (author.first_name, ' ', author.last_name) as author_name, 
SUM(book.pages) AS total_pages 
FROM author 
INNER JOIN book 
ON author.author_id = book.book_id 
GROUP BY author.author_id, author_name 
ORDER BY total_pages DESC;