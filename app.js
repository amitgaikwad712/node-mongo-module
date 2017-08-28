var mongooseInstance;
var mongooseConnection;
var dbvar;

module.exports = {
     connect: function() {
   /*      mongooseConnection = Mongoose.connection;
         mongooseConnection.once('open', () => {
             console.log('Connected to its me.');
         });
         mongooseInstance = Mongoose.connect("mongodb://localhost:27017/uses-tracking");*/
         var mongoose = require('mongoose');
         var Schema = mongoose.Schema;
         var ObjectId = Schema.ObjectId;
         mongoose.connect('mongodb://localhost:27017/uses-tracking');
         var db = mongoose.connection;
         var dbCollection = db.collections;
         var factory = new Factory(Schema,mongoose);
         factory.createSchemas();

    },
    insertIntoDB: function(){
            console.log('mongoose mongooseInstance '+mongooseInstance);
            console.log('mongooseConnection data'+mongooseConnection);
    },

};
var Factory = function(Schema,mongoose) {
    this.Schema = Schema;
    this.mongoose = mongoose;
    this.Item = null;

    this.createSchemas = function() {
        console.log("Is in CreateSchemas")
        var PersonSchema = new this.Schema({
            first_name: String,
            last_name: String,
            city: String,
            state: String
        });
        this.Person = mongoose.model('Person',PersonSchema);
    };

    this.getPerson = function(query,res) {
        this.Person.find(query,function(error,output) {
            res.json(output);
        });
    };

    this.doLogin = function(query,res) {
        this.Person.findOne(query,function(error,output) {
            console.log(query);
            res.json(output);
            console.log(output);
        });
    };
};
