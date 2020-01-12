const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
require('./autoloader')

const app = express()
const port = process.env.APP_PORT || 3000

app.use(bodyParser.json({limit: '10mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}))

fs.readdirSync(path.join(__dirname, `./routes`)).forEach(function(file) {
  if (file.match(/\.js$/) !== null && file !== 'index.js') {
      let name = file.replace('.js', '');
      app.use(require(`./routes/${name}`));
  }
});

app.listen(port, () => {
  console.log(`API Restful ${port}`)
}).on('error', (err) => {
  console.error(err.port)
})