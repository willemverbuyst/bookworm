SELECT 
  user_account.user_account_id,
  user_account.first_name,
  user_account.last_name,
  user_account.email,
  address.address,
  address.postal_code,
  address.phone,
  city.city,
  country.country
FROM user_account
INNER JOIN address
ON user_account.address_id = address.address_id
INNER JOIN city
ON address.city_id = city.city_id
INNER JOIN country
ON city.country_id = country.country_id
WHERE user_account.activebool is True;