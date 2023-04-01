SELECT 
    author.author_id, 
    author.first_name, 
    author.last_name, 
    COUNT(book.title) AS books_written 
FROM author 
FULL OUTER JOIN book_author 
ON author.author_id = book_author.author_id 
FULL OUTER JOIN book 
ON book_author.book_id = book.book_id 
GROUP BY author.author_id, author.first_name, author.last_name 
ORDER BY author.author_id 
LIMIT %s 
OFFSET %s;