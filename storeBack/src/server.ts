import express, { Response, Request } from 'express'
// import cors from 'cors'
import { productRoutes } from './handlers/productsHandler'

// const whitelist = ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:9876'] // add your safe domain
// const corsOptions: CorsOptions = {
// 	origin: function (origin, callback) {
// 		if (whitelist.indexOf(origin as string) !== -1 || !origin) {
// 			callback(null, true)
// 		} else {
// 			callback(new Error('Not allowed by CORS'))
// 		}
// 	}
// }

// const data = [
// 	{
// 		id: 1,
// 		name: 'Book',
// 		description: 'You can read it!',
// 		price: 9.99,
// 		url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
// 		quantity: 1
// 	},
// 	{
// 		id: 2,
// 		name: 'Headphones',
// 		description: 'Listen to stuff!',
// 		price: 249.99,
// 		url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
// 		quantity: 1
// 	},
// 	{
// 		id: 3,
// 		name: 'Backpack',
// 		description: 'Carry things around town!',
// 		price: 79.99,
// 		url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
// 		quantity: 1
// 	},
// 	{
// 		id: 4,
// 		name: 'Glasses',
// 		description: 'Now you can see!',
// 		price: 129.99,
// 		url: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
// 		quantity: 1
// 	},
// 	{
// 		id: 5,
// 		name: 'Cup',
// 		price: 4.99,
// 		url: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
// 		description: 'Drink anything with it!',
// 		quantity: 1
// 	},
// 	{
// 		id: 6,
// 		name: 'Shirt',
// 		price: 29.99,
// 		url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
// 		description: 'Wear it with style!',
// 		quantity: 1
// 	}
// ]

const app = express()
const port = 5432

app.use(express.json())
// app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.get('/', (_req: Request, res: Response) => {
	res.send('Connection OK')
})

productRoutes(app)

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})