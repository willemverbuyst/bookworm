SELECT 
book.genre_id, 
genre.name_of_genre, 
COUNT(*) AS number_of_books 
FROM book 
INNER JOIN genre 
ON book.genre_id = genre.genre_id 
GROUP BY book.genre_id, genre.name_of_genre 
ORDER BY genre.name_of_genre;