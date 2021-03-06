# MyStore
Course app to imitate basic netstore functionality. Contains separate frontend and backend projects.

## Hosted

* Hosted at aws: *[MyStore](http://storefront-s3-bucket.s3-website.eu-north-1.amazonaws.com/)*

## Init

1. npm i (storeBack)
2. npm local server up: /storeBack: 'npm run watch' (http://localhost:5432)
3. npm i (storeFront)
4. frontend tests: /storeFront: 'ng test'
5. frontend local server up: /storeFront: 'ng serve' (http://localhost:4200)

## Data

* Data is supplied from Postgres db.
* For local development, create .env to storeBack/ with:
1. POSTGRES_USERNAME=''
2. POSTGRES_PASSWORD=''
3. POSTGRES_HOST=''
4. POSTGRES_DB=''
5. PORT=5432
6. AWS_REGION=''
7. AWS_PROFILE=''
8. AWS_BUCKET=''
9. AWS_ACCESS_KEY_ID=''
10. AWS_SECRET_ACCESS_KEY=''
11. NodeCommand="npm start"

* For hosting, run 'eb init' and create .ebextensions/options.config for:
    option_settings:
        aws:elasticbeanstalk:application:environment:
            NodeCommand: "npm start"
            POSTGRES_USERNAME: ''
            POSTGRES_PASSWORD: ''
            POSTGRES_HOST: ''
            POSTGRES_DB: ''
            PORT: ''

## Testing

* Backend has nothing meaningfull to test so testing is focused on the front (atm).
* Currency localisation is not ready, so magic strings are tested for currency.

## Documentation

* Documentation directory contains:
1. Architecture chart (both transparent and greybackground).
2. Architecture overview as detailed information.
3. Deployment chart.
4. Deployment pipeline as detailed information.
5. Dependencies overview.

* Screenshots directory contains:
1. RDS database screenshot from general status and basic conf.
2. S3 bucket screenshot from general status and basic conf.
3. Elastic Beanstalk screenshot from general status (updated node) and configurements (env variables etc.).
4. Terminal screenshots succesfull run of the eb-cli and aws-cli.
5. CircleCi screenshot for deployment and env.