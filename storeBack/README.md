# storeBack

This project was created with Node.js version 16.9.1

## Development server

* Run `watch` for a dev server. Navigate to `http://localhost:5432/` (port specified at .env).
* Run `lint` for ES-lint.
* Run `build` for typescript build, found at /build.
* Run `deploy` for manual EB deployment. (.ebelasticbeanstalk and .ebextensions required).

## Database

* Data is supplied from Postgres db.
* For local development, create .env to storeBack/ with:
1. POSTGRES_USER=''
2. POSTGRES_PASSWORD=''
3. POSTGRES_HOST=''
4. POSTGRES_DB=''
5. PORT=''

* For hosting, run 'eb init' and create .ebextensions/options.config for:
* option_settings:
* aws:elasticbeanstalk:application:environment:
* NodeCommand: "npm start"
* POSTGRES_USER: ''
* POSTGRES_PASSWORD: ''
* POSTGRES_HOST: ''
* POSTGRES_DB: ''
* PORT: ''

* For CircleCi env:
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY
* AWS_PROFILE
* AWS_DEFAULT_REGION
* AWS_BUCKET
* other EB envs

## Testing

* Jasmine and supertest ready to be implemented, no active tests to run atm.
* -> TODO

## TODO

* Testing
* Migrations
* Cors and auth services