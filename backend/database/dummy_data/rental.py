import datetime
import random

import faker
import pandas as pd

fake = faker.Faker()


def create_list(number_of_rentals, start, end):

    probability_rental = [0.0, 0.2, 0.05, 0.15, 0.15, 0.25, 0.2]
    l =  [int(i * number_of_rentals) for i in probability_rental]
    

    # Create a pandas date range between 2000-01-01 and 2023-01-31
    dates = pd.date_range(start, end, freq='D')

    mondays = dates[dates.weekday == 0]
    tuesdays = dates[dates.weekday == 1]
    wednesdays = dates[dates.weekday == 2]
    thursdays = dates[dates.weekday == 3]
    fridays = dates[dates.weekday == 4]
    saturdays = dates[dates.weekday == 5]
    sundays = dates[dates.weekday == 6]

    random_mondays = pd.DataFrame(mondays).sample(n=l[0], replace=True)
    random_tuesdays = pd.DataFrame(tuesdays).sample(n=l[1], replace=True)
    random_wednesdays = pd.DataFrame(wednesdays).sample(n=l[2], replace=True)
    random_thursdays = pd.DataFrame(thursdays).sample(n=l[3], replace=True)
    random_fridays = pd.DataFrame(fridays).sample(n=l[4], replace=True)
    random_saturdays = pd.DataFrame(saturdays).sample(n=l[5], replace=True)
    random_sundays = pd.DataFrame(sundays).sample(n=l[6], replace=True)

    # Format the dates as "YYYY/MM/DD"
    formatted_dates_mondays = random_mondays[0].dt.strftime('%Y/%m/%d')
    formatted_dates_tuesdays = random_tuesdays[0].dt.strftime('%Y/%m/%d')
    formatted_dates_wednesdays = random_wednesdays[0].dt.strftime('%Y/%m/%d')
    formatted_dates_thursdays = random_thursdays[0].dt.strftime('%Y/%m/%d')
    formatted_dates_fridays = random_fridays[0].dt.strftime('%Y/%m/%d')
    formatted_dates_saturdays = random_saturdays[0].dt.strftime('%Y/%m/%d')
    formatted_dates_sundays = random_sundays[0].dt.strftime('%Y/%m/%d')

    return formatted_dates_mondays.to_list() + formatted_dates_tuesdays.to_list() + formatted_dates_wednesdays.to_list() + formatted_dates_thursdays.to_list() + formatted_dates_fridays.to_list() + formatted_dates_saturdays.to_list() + formatted_dates_sundays.to_list()

def create_dummy_rentals_sql(config):
    print("[INFO] Create dummy data for rental table")
    insert_statements = ""
    old_rentals = create_list(len(config.get("RENTAL")[400:]), '2000-01-01', '2023-01-31' )
    new_rentals = create_list(len(config.get("RENTAL")[:400]), '2023-01-12', '2023-01-31')
    
    for index, i in enumerate(config.get("RENTAL")):
        rental_id = i.get("uuid")
        if index < 400:
            rental_date = new_rentals[index]
        else:
            rental_date = old_rentals[index - 400]
            return_date = datetime.datetime.strptime(rental_date, "%Y/%m/%d") + datetime.timedelta(days=random.randint(1, 21))
        last_updated = datetime.datetime.now() 
        bookworm_id = (config.get("BOOKWORM")[random.randint(0,len(config.get("BOOKWORM")) - 1)]).get("uuid")
        inventory_id = (config.get("INVENTORY")[random.randint(0,len(config.get("INVENTORY")) - 1)]).get("uuid")
        staff_id = (config.get("STAFF")[random.randint(0,len(config.get("STAFF")) - 1)]).get("uuid")

        if index < 400:
            sql = "INSERT INTO rental (rental_id,rental_date,return_date,last_updated,bookworm_id,inventory_id,staff_id) " \
                f"VALUES ('{rental_id}'::UUID,'{rental_date}',NULL,'{last_updated}','{bookworm_id}'::UUID,'{inventory_id}'::UUID,'{staff_id}'::UUID);\n"
        else:
            sql = "INSERT INTO rental (rental_id,rental_date,return_date,last_updated,bookworm_id,inventory_id,staff_id) " \
                f"VALUES ('{rental_id}'::UUID,'{rental_date}','{return_date}','{last_updated}','{bookworm_id}'::UUID,'{inventory_id}'::UUID,'{staff_id}'::UUID);\n"
        insert_statements += sql

    return insert_statements