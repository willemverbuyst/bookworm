SELECT 
COUNT (*) 
FROM book 
INNER JOIN book_author 
ON book.book_id = book_author.book_id 
INNER JOIN author 
ON author.author_id = book_author.author_id 
INNER JOIN genre 
ON genre.genre_id = book.genre_id 
INNER JOIN language 
ON book.language_id = language.language_id 
WHERE ( ( %s IS NOT NULL AND genre.genre_id = %s ) 
    OR %s IS NULL) 
AND ( ( %s IS NOT NULL AND language.language_id = %s ) 
    OR %s IS NULL);