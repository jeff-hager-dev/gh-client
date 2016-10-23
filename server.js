var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');
var mongoUtil = require('./mongoUtil');
var mongo = require('mongodb');

app.use(express.static(__dirname + '/'));

app.use(bodyParser.json());

app.use('/modules', express.static(__dirname + '/node_modules/'));
app.use('/styles', express.static(__dirname + '/styles/'));
app.use('/src', express.static(__dirname + '/src/'));
app.use('/views', express.static(__dirname + '/views/'));
app.use('/images', express.static(__dirname + '/images/'));
app.use('/fonts', express.static(__dirname + '/fonts/'));
app.use('/', express.static(__dirname + '/'));

mongoUtil.connect();

app.get('/', function(req, res) {
    console.log('responding to request');
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get("/resource/:Type", function(req, res) {
    mongoUtil.resources().find({ type: req.params.type })
        .toArray(function(err, docs){
            var resources = docs.map(function(resource){
                return resource;
            });
            res.send(resources);
        });
});

app.put("/resource/id/:id", function(req, res) {
    //req.body._id = mongo.ObjectId(req.body._id);
    mongoUtil.resources().update({_id: mongo.ObjectId(req.params.id)}, req.body, function (err, result) {
        if (err) {

        }

        res.status(200).json("updated success");
        return;
    });

/*
        .toArray(function(err, docs){
            var resources = docs.map(function(resource){
                return resource;
            });
            res.send(resources);
        });
        */
});

app.get("/resource/id/:id", function(req, res) {
    mongoUtil.resources().find({_id : mongo.ObjectId(req.params.id)})
        .toArray(function(err, docs){
            var resources = docs.map(function(resource){
                return resource;
            });
            res.send(resources);
        });
});

app.get("/resource/:type/:subType", function(req, res) {
    mongoUtil.resources()
        .find({ type: req.params.type,
                subTypes: req.params.subType },
            {fields: {_id: 0}})
        .toArray(function(err, docs){
            var resources = docs.map(function(resource){
                return resource;
            });
            res.send(resources);
        });
});

app.get("/client", function(req, res){
    mongoUtil.clients()
        .find(searchObject(req.query), {fields: {_id: 0}})
        .toArray(function (err, docs) {
            var clients = docs.map(function(client){
                return client;
            });
            res.send(clients);
        });
});

app.post("/client", function (req, res) {
    var client = req.body;
    mongoUtil.clients()
        .insertOne(client);
    res.statusCode = 200;
    res.send();
});

app.listen(8080);

function GetRegex(val){
    var value = (val == undefined ? '' : val);
    return new RegExp(".*"+value +".*", 'i');
}

function searchObject(query){
    return {
        firstName: GetRegex(query.firstName),
        lastName: GetRegex(query.lastName),
        ssn: GetRegex(query.ssn),
    }
}
