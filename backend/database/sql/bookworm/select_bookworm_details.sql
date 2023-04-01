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
    country.country,
    library.library_name
FROM user_account
INNER JOIN address
ON user_account.address_id = address.address_id
INNER JOIN city AS city_city
ON city_city.city_id = address.city_id
INNER JOIN city AS city_place_of_birth
ON city_place_of_birth.city_id = user_account.place_of_birth
INNER JOIN country
ON city_place_of_birth.country_id = country.country_id 
INNER JOIN bookworm 
ON bookworm.user_account_id = user_account.user_account_id 
INNER JOIN library
ON bookworm.library_id = library.library_id
AND bookworm.bookworm_id=%s;