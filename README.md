# What is this?

A project to connect and try out some techinques in a docker environment.

## Frontend

- TypeScript
- React
- Overmind
- Mui
- UseFormHook

## Backend

- Python
- Fastapi

## Database

- Postgres
- SQL
- Bash

## Test

- Cypress

# What is this not?

Focussed on effeciency.
Parts are hardcoded and some of the set up contrived.

# Commands

build and start

`docker-compose up --build`

#

start containers

`docker-compose up`

#

start containers without logs

`docker-compose up -d`

#

see logs for service

`docker-compose logs <NAME OF SERVICE>`

#

start specific service

`docker-compose up <NAME OF SERVICE>`

#

stop containers

`docker-compose down`

#

seed database

`docker-compose run backend bash`

`cd database/bash`

`bash set_up_db.sh`

#

format python

`docker-compose run backend bash`

`black .`

#

stop bash in terminal

`exit`

`docker-compose stop`

#

run cypress test

`cd test`

`npm run open`

#

api - swagger docs

`localhost:8000/docs`

#

create csv with dummy data

`bash dummy_data.csv`
