SELECT
    bookworm.bookworm_id,
    user_account.first_name, 
    user_account.last_name, 
    user_account.email, 
    address.phone, 
    user_account.activebool AS user_is_active, 
    library.library_name 
FROM bookworm
INNER JOIN user_account
ON bookworm.user_account_id = user_account.user_account_id
LEFT OUTER JOIN library
ON bookworm.library_id = library.library_id
LEFT OUTER JOIN address
ON user_account.address_id = address.address_id
ORDER BY bookworm.bookworm_id 
LIMIT %s 
OFFSET %s;