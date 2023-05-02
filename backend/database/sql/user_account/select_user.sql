SELECT 
    user_account.user_account_id,
    user_account.first_name,
    user_account.last_name,
    TO_CHAR(user_account.birth_date, 'DD/MM/YYYY'), 
    city_place_of_birth.city AS place_of_birth,
    user_account.email, 
    address.phone, 
    address.address, 
    address.postal_code, 
    city_city.city,
    country.name_of_country,
    library.library_name
FROM user_account
FULL OUTER JOIN address
ON user_account.address_id = address.address_id
FULL OUTER JOIN city AS city_city
ON city_city.city_id = address.city_id
FULL OUTER JOIN city AS city_place_of_birth
ON city_place_of_birth.city_id = user_account.place_of_birth
FULL OUTER JOIN country
ON city_place_of_birth.country_id = country.country_id 
FULL OUTER JOIN bookworm 
ON bookworm.user_account_id = user_account.user_account_id 
FULL OUTER JOIN library
ON bookworm.library_id = library.library_id
WHERE user_account.activebool is True
AND user_account.email=%s 
AND user_account.password=%s;