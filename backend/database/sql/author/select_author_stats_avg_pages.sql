SELECT ROUND(AVG(total_pages)) 
FROM ( 
SELECT 
author.author_id, 
SUM(COALESCE(book.pages, null, 0)) AS total_pages 
FROM author 
FULL OUTER JOIN book_author 
ON author.author_id = book_author.author_id 
FULL OUTER JOIN book 
ON book_author.book_id = book.book_id 
GROUP BY author.author_id 
ORDER BY total_pages DESC 
) AS average_pages;
