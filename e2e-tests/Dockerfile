FROM cypress/base:16.4.0

WORKDIR /scripts

COPY package.json .

ENV CI=1

RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi

RUN npm ci

# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests

RUN npx cypress verify
