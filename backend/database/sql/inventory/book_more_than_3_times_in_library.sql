SELECT * FROM book
WHERE book_id IN 
(SELECT 
book_id
FROM inventory
WHERE library_id=%s
GROUP BY book_id
HAVING COUNT(*) > 3);
