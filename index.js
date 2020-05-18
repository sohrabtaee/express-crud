import express from 'express'
import bodyParser from 'body-parser'
import createError from 'http-errors'
import routes from './routes/index.js'

const port = 3000

const app = express()
app.use(bodyParser.json())

app.use('/', routes)

app.use((req, res, next) => {
  return next(createError(404, 'Route not found'))
})

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`)
})
