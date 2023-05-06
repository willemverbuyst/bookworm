SELECT 
    library.library_id,
    library.name_of_library,
    address.phone, 
    address.address, 
    address.postal_code, 
    city.city,
    country.name_of_country
FROM library
INNER JOIN address 
ON library.address_id = address.address_id
INNER JOIN city
ON city.city_id = address.city_id
INNER JOIN country
ON country.country_id = city.country_id 
AND library.library_id=%s;