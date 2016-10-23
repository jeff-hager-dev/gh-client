var mongo = require('mongodb');
var client = mongo.MongoClient;
var _db;

var server = "//45.55.36.252:27017";

module.exports = {
    connect: function () {
        client.connect("mongodb:"+server+"/ServiceSTL", function (err, db) {
            if (err) {
                console.log(err);
                console.log("Connection to mongo failed. Check for running server");
                process.exit(1);
                return;
            }
            _db = db;
            console.log("Mongo Connected!");
        })
    },
    resources: function() {
        return _db.collection("resource");
    },
    clients: function(){
        return _db.collection("client");
    }
};
