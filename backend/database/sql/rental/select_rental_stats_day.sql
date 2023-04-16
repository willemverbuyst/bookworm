SELECT 
  COALESCE(return_dates.return_date, 0) as return_date, 
  COALESCE(rental_dates.rental_date, 0) as rental_date, 
  days.day_of_the_week 
FROM 
  (SELECT 
    CASE 
      WHEN TO_CHAR(rental.return_date, 'Dy') = 'Mon' THEN 1 
      WHEN TO_CHAR(rental.return_date, 'Dy') = 'Tue' THEN 2 
      WHEN TO_CHAR(rental.return_date, 'Dy') = 'Wed' THEN 3 
      WHEN TO_CHAR(rental.return_date, 'Dy') = 'Thu' THEN 4 
      WHEN TO_CHAR(rental.return_date, 'Dy') = 'Fri' THEN 5 
      WHEN TO_CHAR(rental.return_date, 'Dy') = 'Sat' THEN 6 
      ELSE 7
    END AS day_of_the_week,
    COUNT(*) as return_date 
  FROM rental 
  GROUP BY day_of_the_week) return_dates 
FULL OUTER JOIN 
  (SELECT 
    CASE 
      WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Mon' THEN 1 
      WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Tue' THEN 2 
      WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Wed' THEN 3 
      WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Thu' THEN 4 
      WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Fri' THEN 5 
      WHEN TO_CHAR(rental.rental_date, 'Dy') = 'Sat' THEN 6 
      ELSE 7 
    END AS day_of_the_week,
    COUNT(*) as rental_date 
  FROM rental 
  GROUP BY day_of_the_week) rental_dates 
ON return_dates.day_of_the_week = rental_dates.day_of_the_week 
RIGHT JOIN 
  (SELECT 
    ROW_NUMBER() OVER (ORDER BY days.day_of_the_week) as row_num, 
    days.day_of_the_week 
  FROM 
    (SELECT 1 as day_of_the_week UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 
     UNION SELECT 5 UNION SELECT 6 UNION SELECT 7) days) days 
ON return_dates.day_of_the_week = days.day_of_the_week 
OR rental_dates.day_of_the_week = days.day_of_the_week 
ORDER BY row_num;
