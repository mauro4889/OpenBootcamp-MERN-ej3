import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import rootRouter from '../routes/index'
import helmet from 'helmet'
import cors from 'cors'

dotenv.config()

//Create Express APP
const server: Express = express()
const port: string | number = process.env.PORT || 8000

server.use(
    '/api',
    rootRouter
)

//Static server
server.use(express.static('public'))

//Security Config
server.use(helmet())
server.use(cors())

//Content Type Config
server.use(express.urlencoded({extended: true, limit: '50mb'}))
server.use(express.json({limit: '50mb'}))

//Redirection Config
server.get('/', (req: Request, res: Response) => {
    res.redirect('/api')
})

export default server