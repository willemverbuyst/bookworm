SELECT 
author.author_id, 
CONCAT (author.first_name, ' ', author.last_name) as author_name, 
SUM(COALESCE(book.pages, 0)) AS total_pages 
FROM author 
FULL OUTER JOIN book_author 
ON author.author_id = book_author.author_id 
FULL OUTER JOIN book 
ON book_author.book_id = book.book_id 
GROUP BY author.author_id, author_name 
ORDER BY total_pages DESC 
LIMIT 10;