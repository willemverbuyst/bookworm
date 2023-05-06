SELECT
	title,
  replacement_cost,
  language.name_of_language,
  ROUND((SELECT AVG(replacement_cost) FROM book b3
   WHERE b1.language_id = b3.language_id), 2) AS avg_replacement_costs
FROM book b1
INNER JOIN language
ON b1.language_id = language.language_id
WHERE replacement_cost = (SELECT MAX(replacement_cost) FROM book b2
                          WHERE b1.language_id = b2.language_id);