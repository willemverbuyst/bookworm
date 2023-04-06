SELECT 
    review.review_id, 
    review.description, 
    review.rating, 
    book.title,
    CONCAT (user_account.first_name, ' ', user_account.last_name) as reviewer  
FROM review 
INNER JOIN book 
ON review.book_id = book.book_id 
INNER JOIN bookworm 
ON review.bookworm_id = bookworm.bookworm_id 
INNER JOIN user_account 
ON bookworm.user_account_id = user_account.user_account_id
ORDER BY review.rating DESC  
LIMIT %s 
OFFSET %s;