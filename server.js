const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fs = require('fs')

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('build'))

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next()
})

app.set('port', process.env.PORT || 3000)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/', (request, response) => {
  fs.readFile(`${__dirname}/index.html`, (err, file) => {
    response.send(file)
  })
})

// get all items
app.get('/api/v1/items', (request, response) => {
  database('items').select()
  .then(items => {
    response.status(200).json(items)
  })
  .catch(error => {
    console.error('error', error)
  })
})

// post an item
app.post('/api/v1/items', (request, response) => {
  const { name, reason, cleanliness } = request.body;
  const item = { name, reason, cleanliness }

  database('items').insert(item)
  .then(() => {
    database('items').select()
    .then(items => {
      response.status(200).json(items)
    })
  })
  .catch(error => {
    response.status(422).send('Could not add item')
  })
})

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`Garage Bin is running on ${app.get('port')}.`)
  })
}

module.exports = app;
