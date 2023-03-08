SELECT 
  book.book_id,
  book.title,
  book.language,
  book.year,
  book.read, 
  author.first_name, 
  author.last_name,
  genre.name AS genre 
FROM book 
INNER JOIN author 
ON book.author_id = author.author_id 
INNER JOIN book_genre 
ON book.book_id = book_genre.book_id 
INNER JOIN genre 
ON book_genre.genre_id = genre.genre_id;