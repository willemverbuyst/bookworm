SELECT 
book.year_published, 
COUNT(*) AS number_of_books 
FROM book 
GROUP BY book.year_published 
ORDER BY book.year_published;