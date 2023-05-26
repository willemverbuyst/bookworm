SELECT 
  book.book_id, 
  book.title 
FROM author 
INNER JOIN book_author 
ON author.author_id=book_author.author_id 
INNER JOIN book 
ON book_author.book_id=book.book_id 
WHERE author.author_id=%s;
