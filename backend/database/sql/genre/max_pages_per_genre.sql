SELECT 
  title, 
  book_id, 
  pages, 
  genre_id 
FROM book b1
WHERE pages = (SELECT MAX(pages) FROM book b2
               WHERE b1.genre_id = b2.genre_id)
ORDER BY pages;