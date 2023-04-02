SELECT 
    rental.return_date::DATE - rental.rental_date::DATE AS duration, 
    COUNT(*) AS total_rentals
FROM rental 
GROUP BY duration 
ORDER BY duration ASC;