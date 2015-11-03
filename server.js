var express = require('express')

var app = express()

app.use(express.static('./'))

// to serve directory index
// var serveIndex = require('serve-index')
// app.use(serveIndex('public'))

app.listen(81);
