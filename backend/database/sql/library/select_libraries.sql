SELECT 
    library.library_id,
    library.library_name,
    address.phone, 
    address.address, 
    address.postal_code, 
    city.city,
    country.country
FROM library
INNER JOIN address 
ON library.address_id = address.address_id
INNER JOIN city
ON city.city_id = address.city_id
INNER JOIN country
ON country.country_id = city.country_id 
ORDER BY library.library_id  
LIMIT %s 
OFFSET %s;