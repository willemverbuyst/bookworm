import os

from address import create_dummy_addresses_sql
from author import create_dummy_authors_sql
from book import create_dummy_books_sql
from book_author import create_dummy_book_author_sql
from city import create_dummy_cities_sql
from country import create_dummy_countries_sql
from genre import create_dummy_genres_sql
from inventory import create_dummy_inventory_sql
from language import create_dummy_languages_sql
from library import create_dummy_libraries_sql
from payment import create_dummy_payments_sql
from rental import create_dummy_rentals_sql
from rental_rate import create_dummy_rental_rates_sql
from review import create_dummy_reviews_sql
from staff import create_dummy_staff_sql
from user_account import create_dummy_user_accounts_sql

from bookworm import create_dummy_bookworms_sql


def create_dummy_data(config):
    dummy_data = {
      "address": create_dummy_addresses_sql(config),
      "city": create_dummy_cities_sql(config),
      "country": create_dummy_countries_sql(config),
      "language": create_dummy_languages_sql(config),
      "rental_rate": create_dummy_rental_rates_sql(config),
      "genre": create_dummy_genres_sql(config),
      "author": create_dummy_authors_sql(config),
      "book": create_dummy_books_sql(config),
      "book_author": create_dummy_book_author_sql(config),
      "library": create_dummy_libraries_sql(config),
      "user_account": create_dummy_user_accounts_sql(config),
      "staff": create_dummy_staff_sql(config),
      "bookworm": create_dummy_bookworms_sql(config),
      "inventory": create_dummy_inventory_sql(config),
      "review": create_dummy_reviews_sql(config),
      "rental": create_dummy_rentals_sql(config),
      "payment": create_dummy_payments_sql(config)
    }


    return dummy_data
    


    

    



