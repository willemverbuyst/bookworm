SELECT 
    library.library_id, 
    library.library_name, 
    user_account.activebool, 
    COUNT(library.library_id) as number_of_bookworms_per_library 
FROM bookworm 
INNER JOIN user_account 
ON bookworm.user_account_id = user_account.user_account_id 
LEFT OUTER JOIN library 
ON bookworm.library_id = library.library_id 
GROUP BY library.library_id, library.library_name, user_account.activebool;