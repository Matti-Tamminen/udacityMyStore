# MyStore
Course app to imitate basic netstore functionality. Contains separate frontend and backend projects.

## Hosted

* Hosted at aws: *[MyStore](http://storefront-s3-bucket.s3-website.eu-north-1.amazonaws.com/)*

## Init

1. npm i (storeBack)
2. npm local server up: /storeBack: 'npm run watch'
3. npm i (storeFront)
4. frontend tests: /storeFront: 'ng test'
5. frontend local server up: /storeFront: 'ng serve' (http://localhost:4200)

## Data

* Data is supplied from Postgres db.
* For local development, create .env to storeBack/ with:
1. POSTGRES_USER=''
2. POSTGRES_PASSWORD=''
3. POSTGRES_HOST=''
4. POSTGRES_DB=''
5. PORT=3000

* For hosting, run 'eb init' and create .ebextensions/options.config for:
> option_settings:
    aws:elasticbeanstalk:application:environment:
        NodeCommand: "npm start"
        POSTGRES_USER: ''
        POSTGRES_PASSWORD: ''
        POSTGRES_HOST: ''
        POSTGRES_DB: ''
        PORT: ''

## Testing

* Backend has nothing meaningfull to test so testing is focused on the front (atm).
* Currency localisation is not ready, so magic strings are tested for currency.

