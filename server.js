var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Welcome to the booking app people!')
})

app.get('/sell', function (req, res) {
  res.send('Welcome to the sellers area')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
