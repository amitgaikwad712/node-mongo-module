var MongoClient = require('mongodb').MongoClient;
var Mongoose = require("mongoose");
var mongooseInstance;
var mongooseConnection;
var dbvar;

module.exports = {
     connect: function() {
         mongooseConnection = Mongoose.connection;
         mongooseConnection.once('open', () => {
             console.log('Connected to its me.');
         });
         mongooseInstance = Mongoose.connect("mongodb://localhost:27017/uses-tracking");


    },
    insertIntoDB: function(){
            console.log('mongoose mongooseInstance '+mongooseInstance);
            console.log('mongooseConnection data'+mongooseConnection);
    },

};
