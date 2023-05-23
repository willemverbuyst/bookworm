SELECT 
	author_id, 
  CONCAT(author.first_name, ' ', author.last_name) AS name_of_author 
FROM author 
WHERE author.first_name ILIKE %s 
OR author.last_name ILIKE %s;

