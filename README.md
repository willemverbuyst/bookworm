# What is this?

A project to connect and try out some techniques in a docker environment.

## Frontend

- TypeScript
- React
- Overmind
- MUI
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

## Documentation for API

Swagger docs at localhost:8000/docs

# What is this not?

Focussed on efficiency.
Parts are hardcoded and some of the setup is pretty contrived.

# Commands

(re)build and start

`docker-compose up --build`

#

start containers

`docker-compose up`

#

start containers in detached mode

`docker-compose up -d`

#

development

`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`

#

production

`docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build`

#

see logs for service

`docker-compose logs <NAME OF SERVICE>`

#

start specific service

`docker-compose up <NAME OF SERVICE>`

#

log into container

`docker exec -it <NAME OF CONTAINER> bash`

#

stop containers

`docker-compose down`

stop development container and remove volume

`docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v`

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

`npm run cy:open`

`npm run cy:run`

#

create csv with dummy data

`bash dummy_authors.sh`

`bash dummy_books.sh`
