const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const config = require('./config/config')
itemRoutes = require('./expressRoutes/itemRoutes')

mongoose.Promise = global.Promise
mongoose.connect(config.db).then(
  () => {console.log('***DATABASE RUNNING***') },
  err => { console.log('***CANNOT CONNECT TO DATABASE ERROR: '+ err + "***")}
)

const app = express()
require('./routes/routes')(app)
app.use(express.static('public'))
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(cors())
app.use('/items', itemRoutes)

console.log(`Server running @ ${config.port}`)
app.listen(config.port)
