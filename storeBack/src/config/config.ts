import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	port: Number(process.env.PORT),
	host: process.env.POSTGRES_HOST,
	aws_region: process.env.AWS_REGION,
	aws_profile: process.env.AWS_PROFILE,
	aws_media_bucket: process.env.AWS_BUCKET,
	aws_access_key_id: process.env.AWS_ACCESS_KEY_ID,
	aws_secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
	nodecommand: process.env.NodeCommand
}
