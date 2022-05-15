import express from 'express'
import cors from 'cors'
import routes from './routes.js'

const PORT = 3333

const app = express()
app.use(cors())

app.use(routes)

app.listen(PORT, () => console.log('Server runing at port:', PORT))