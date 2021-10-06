# App architecture
* References AWS_Architecture_charts

## Environment
* App can be run either in local environment or hosted environment, setting up dev-env is covered in README.
* Hosted environment is currently AWS-cloud, change requires overhaul of the environment variables.

## General flow
1. Backend provides access to database: Listens to db-port and exposes endpoints for frontend.
2. Frontend provides MyStore as a static website to client: fetches data from exposed endpoints.
3. Database provides data manipulation to backend and data display and insertion to frontend: contains database to hold required data.
4. AWS environment provides hosting and authentication/authorization to included services: security groups and tokens maintain access to services.

### Backend
* Main dependencies Node.js and express.
* Models for postgres @/src/models*.
* Handlers for postgres operations @/src/handlers*.
* Services for routes @/src/services* (not implemented).
* Env configuration @/src/config*.
* Database connection @/src/db.ts.
* Server setup @/src/server.ts.

### Frontend
* Main dependency Angular.
* Routing with angular-router @/src/app/app-routing.module.
* Home is the welcome page for the store @/src/app/home.
* List is the main product catalogue @/src/app/list.
* List-item is the product object used in the list.
* Detail is product detail, accessed by clicking the image at List, @/src/app/detail.
* Cart is the shopping cart page, where order can be finished, @/src/app/cart.
* Order is the order page, where created order is processed, @/src/app/order.
* Services contain access to endpoints and handling functions for data, @/src/app/services/data-service.