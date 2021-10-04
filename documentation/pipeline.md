# Deployment pipeline for MyStore

1. ### Step1 
    Installing all the dependencies for backend 'cd storeBack && npm i/yarn' ->
2. ### Step2
    Installing all the dependencies for frontend 'cd storeFront && npm i/yarn' ->
3. ### Step3
    Create enviroment variables 'touch .env / touch .ebextensions/options.config' ->
4. ### Step4
    Build backend 'cd storeBack && npm/yarn run build' ->
5. ### Step5
    Build frontend 'cd storeFront && npm/yarn run build' ->
6. ### Step 6
    Run tests 'cd storeFront && npm/yarn run test' ->
7. ### Step 7
    Deploy backend 'cd storeBack && npm/yarn run deploy' ->
8. ### Step 8
    Deploy frontend 'cd storeFront && npm/yarn run deploy'