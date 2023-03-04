SELECT 
  author.author_id, 
  author.first_name, 
  author.last_name, 
  COUNT(book.title) 
FROM author 
INNER JOIN book ON author.author_id = book.author_id 
GROUP BY author.author_id, author.first_name, author.last_name;
