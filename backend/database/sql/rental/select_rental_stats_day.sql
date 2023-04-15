SELECT 
COUNT(rental.rental_date) AS number_of_rentals, 
COUNT(rental.return_date) AS number_of_returns, 
CASE  
WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Mon' THEN 1 
WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Tue' THEN 2 
WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Wed' THEN 3 
WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Thu' THEN 4 
WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Fri' THEN 5 
WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Sat' THEN 6 
ELSE 7 
END AS day_of_the_week 
FROM rental 
GROUP BY day_of_the_week 
ORDER BY day_of_the_week;
