require('dotenv').config({path: __dirname + '/.env'})
global.express = require('express')
global.Route = express.Router()

global.send405 = (req, res) => res.status(405).send("Method Not Allowed")

//database
if (process.env.MONGO_URI) {
  global.mongoose = require('mongoose')
  require('./database/DB_mongodb_connection')
}