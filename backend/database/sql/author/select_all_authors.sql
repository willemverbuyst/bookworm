SELECT author_id, author_name, COUNT(book_title) AS number_of_books FROM author 
INNER JOIN book ON author.author_id = book.book_author_id 
GROUP BY author_id, author_name;