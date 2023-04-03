SELECT 
COUNT(*) AS number_of_rentals 
FROM rental 
WHERE rental.return_date is NULL;