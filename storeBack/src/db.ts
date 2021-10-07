import dotenv from 'dotenv'
import { Pool } from 'pg'
import { config } from './config/config'

dotenv.config()

// const {
// 	POSTGRES_HOST,
// 	POSTGRES_DB,
// 	POSTGRES_USERNAME,
// 	POSTGRES_PASSWORD,
// 	PORT
// } = process.env

// let client: Pool

// if (ENV?.toString().trim() == 'test') { // testing
// 	client = new Pool({
// 		host: POSTGRES_HOST,
// 		database: POSTGRES_DB_TEST,
// 		user: POSTGRES_USERNAME,
// 		password: POSTGRES_PASSWORD,
// 		port: PORT as number | undefined
// 	})
// 	console.log('Test DB-connection started')
// } else if (ENV?.toString().trim() == 'dev') { // development
// 	client = new Pool({
// 		host: POSTGRES_HOST,
// 		database: POSTGRES_DB,
// 		user: POSTGRES_USERNAME,
// 		password: POSTGRES_PASSWORD,
// 		port: PORT as number | undefined
// 	})
// 	console.log('Development DB-connection started')
// } else { // production
// 	client = new Pool({
// 		host: POSTGRES_HOST,
// 		database: POSTGRES_DB,
// 		user: POSTGRES_USERNAME,
// 		password: POSTGRES_PASSWORD,
// 		port: PORT as number | undefined
// 	})
// 	console.log('Production DB-connection started')
// }

const client = new Pool({
	host: config.host,
	database: config.database,
	user: config.username,
	password: config.password,
	port: config.port
})
console.log('Production DB-connection started')

export default client