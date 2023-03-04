SELECT 
  *, 
  author.first_name, 
  author.last_name 
FROM book 
INNER JOIN author 
ON book.author_id = author.author_id;
