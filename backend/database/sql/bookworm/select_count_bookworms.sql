SELECT 
COUNT (*) 
FROM bookworm 
INNER JOIN user_account
ON bookworm.user_account_id = user_account.user_account_id 
WHERE user_account.activeint=%s;