# Deployment pipeline for MyStore

1. ### Step 1
    Installing basic dependencies like node, npm, browser (globals) ->
3. ### Step 2
    Create enviroment variables 'touch .env / touch .ebextensions/options.config' ->
1. ### Step 3 
    Move to backend directory and installing all the dependencies for backend 'cd storeBack && npm i/yarn' ->
2. ### Step 4
    Move to frontend directory and installing all the dependencies for frontend 'cd storeFront && npm i/yarn' ->
4. ### Step 5
    Build backend 'cd storeBack && npm/yarn run build' ->
5. ### Step 6
    Build frontend 'cd storeFront && npm/yarn run build' ->
6. ### Step 7
    Run tests 'cd storeFront && npm/yarn run test' ->
7. ### Step 8
    Deploy backend 'cd storeBack && npm/yarn run deploy' ->
8. ### Step 9
    Deploy frontend 'cd storeFront && npm/yarn run deploy'