import express, { Response, Request } from 'express'
import { config } from './config/config'
import cors, { CorsOptions } from 'cors'
import { productRoutes } from './handlers/productsHandler'

const whitelist = ['http://localhost:3000', 'http://localhost:4200', 'http://localhost:5432', 'http://storeapi-env.eba-ub3a4zsk.eu-north-1.elasticbeanstalk.com', 'http://storefront-s3-bucket.s3-website.eu-north-1.amazonaws.com'] // add your safe domain
const corsOptions: CorsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin as string) !== -1 || !origin) {
			callback(null, true)
		} else {
			callback(new Error('Not allowed by CORS'))
		}
	}
}

const app = express()
const port = config.port | 5432

app.use(express.json())
app.use(cors(corsOptions))

app.use(express.urlencoded({ extended: true }))

app.get('/', (_req: Request, res: Response) => {
	res.send('Connection OK')
})

productRoutes(app)

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`)
})