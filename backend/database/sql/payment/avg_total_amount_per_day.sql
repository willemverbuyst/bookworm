SELECT ROUND(AVG(total_amount), 2) AS avg_total_amount_per_day
             FROM
                (SELECT rental.return_date, SUM(payment.amount) AS total_amount from payment
                INNER JOIN rental
                ON payment.rental_id = rental.rental_id
                WHERE rental.return_date is not NULL
                GROUP BY rental.return_date) AS subquery;
