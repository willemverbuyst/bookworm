build and start

`docker-compose up --build`

#

start containers

`docker-compose up`

#

stop containers

`docker-compose down`

#

seed database

`docker-compose run backend bash`

`cd database\bash`

`bash set_up_db.sh`

#

format python

`docker-compose run backend bash`

`black .`

#

stop terminal

in terminal `exit`
or `docker-compose stop`

#

run cypress test

`cd test`

`npm run open`
