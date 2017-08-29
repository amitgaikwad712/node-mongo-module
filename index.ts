let mongooseInstance:any;
let mongooseConnection: any;
let dbvar;
class UsesTracking{
    static connect(data: any){
    console.log('Is in the Connect');
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId;
    mongoose.connect('mongodb://localhost:27017/uses-tracking');
    var db = mongoose.connection;
    var dbCollection = db.collections;
    var factory = new Factory(Schema,mongoose);
    factory.createSchemas(data);
    }
}
/*function connect(data: any){
    console.log('Is in the Connect');
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ObjectId = Schema.ObjectId;
    mongoose.connect('mongodb://localhost:27017/uses-tracking');
    var db = mongoose.connection;
    var dbCollection = db.collections;
    var factory = new Factory(Schema,mongoose);
    factory.createSchemas(data);
}*/
export = UsesTracking;

let Factory : any= function(Schema : any,mongoose : any) {
    this.Schema = Schema;
    this.mongoose = mongoose;
    this.Item = null;

    this.createSchemas = function(data) {
        console.log("Is in CreateSchemas")
        var PersonSchema = new this.Schema({
            first_name: String,
            last_name: String,
            city: String,
            state: String
        });
        this.Person = mongoose.model('Person',PersonSchema);
        this.Person.create(data,function(error,output) {
            console.log("Inserted Successfully..");
            console.log(JSON.stringify(output));
        });
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
