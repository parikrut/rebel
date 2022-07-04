# BACKEND DEVELOPMENT

## Run Application Local

- npm install
- npm run start

## Run on Docker

- docker build . -t local/node-web-app
- docker run -p 8080:8080 -d local/node-web-app

## Heroku deployment

- heroku login
- heroku container:login
- heroku container:push web --app test-rebel-backend
- heroku container:release web --app test-rebel-backend
- URL - https://test-rebel-backend.herokuapp.com/
