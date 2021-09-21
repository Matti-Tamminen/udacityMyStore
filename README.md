# MyStore
Course app to imitate basic netstore functionality. Contains separate frontend and backend projects.

## Init

1. npm i (both storeBack & storeFront)
2. backend server up: /storeBack: <npm start> / <npm run watch> (http://localhost:3000)
3. frontend tests: /storeFront: <ng test>
4. frontend server up: /storeFront: <ng serve> (http://localhost:4200)

## Data

* Data is supplied from storeBack/src/server as dummydata (atm).
* Full database support is on the way, ignore unused files and dependencies for now.

## Testing

* Backend has nothing meaningfull to test so testing is focused on the front (atm).
* Currency localisation is not ready, so magic strings are tested for currency.

