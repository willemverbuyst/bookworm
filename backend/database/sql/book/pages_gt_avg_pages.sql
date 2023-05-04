SELECT 
COUNT(*)
FROM book
WHERE pages > (SELECT AVG(pages) FROM book);