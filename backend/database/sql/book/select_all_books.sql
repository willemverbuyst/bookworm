SELECT 
  book.book_id,
  book.title,
  book.year_published, 
  CONCAT (author.first_name, ' ', author.last_name) as author,
  genre.genre, 
  language.language 
FROM book 
INNER JOIN book_author 
ON book.book_id = book_author.book_id 
INNER JOIN author 
ON author.author_id = book_author.author_id 
INNER JOIN genre 
ON genre.genre_id = book.genre_id 
INNER JOIN language 
ON book.language_id = language.language_id;