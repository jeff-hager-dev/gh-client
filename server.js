var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/'));


app.use('/modules', express.static(__dirname + '/node_modules/'));
app.use('/styles', express.static(__dirname + '/styles/'));
app.use('/src', express.static(__dirname + '/src/'));
app.use('/views', express.static(__dirname + '/views/'));
app.use('/images', express.static(__dirname + '/images/'));

app.use('/', express.static(__dirname + '/'));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(8080);

