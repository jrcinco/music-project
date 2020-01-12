require('dotenv').config({path: __dirname + '/.env'})
global.express = require('express')
global.Route = express.Router()

global.send405 = (req, res) => res.status(405).send("Method Not Allowed")