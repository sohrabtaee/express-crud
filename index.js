import express from 'express'
import bodyParser from 'body-parser'
import createError from 'http-errors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/index.js'

dotenv.config()

const port = process.env.PORT || 3000

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', routes)

app.use((req, res, next) => {
  return next(createError(404, 'Route not found'))
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`)
})
