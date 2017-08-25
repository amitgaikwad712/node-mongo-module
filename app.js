var MongoClient = require('mongodb').MongoClient;

// Connect to the db
/*MongoClient.connect("mongodb://localhost:27017/mongo1", function (err, db) {

    db.collection('Person1', function (err, collection) {

        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });



        db.collection('Persons').count(function (err, count) {
            if (err) throw err;

            console.log('Total Rows: ' + count);
        });
    });

});*/


/*module.exports = function () {
    console.log('bar!');
}*/


module.exports = {
     connect: function(html) {
        MongoClient.connect("mongodb://localhost:27017/mongo1", function (err, db) {

            db.collection('Person1', function (err, collection) {

                collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
                collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
                collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });



                db.collection('Persons11').count(function (err, count) {
                    if (err) throw err;

                    console.log('Total Rows: ' + count);
                });
            });

        });
    },
    insertIntoDB: function(){
        db.collection('Person1', function (err, collection) {

            collection.insert({ id: 11, firstName: 'Steve1', lastName: 'Jobs1' });
            collection.insert({ id: 21, firstName: 'Bill1', lastName: 'Gates1' });
            collection.insert({ id: 31, firstName: 'James1', lastName: 'Bond1' });



            db.collection('Person12').count(function (err, count) {
                if (err) throw err;

                console.log('Total Rows: ' + count);
            });
        });

    }
};
