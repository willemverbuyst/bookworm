SELECT 
book.language_id, 
language.language, 
COUNT(*) AS number_of_books 
FROM book 
INNER JOIN language 
ON book.language_id = language.language_id 
GROUP BY book.language_id, language.language;