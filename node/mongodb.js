var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db){
   if(err) throw err;
   var dbo = db.db("mydb");
   var myquery = {address: 'Mountain 21'};
   dbo.collection("customers").deleteOne(myquery, function(err, obj){
     if(err) throw err;
     console.log("1 document deleted");
     db.close();
   });
//    var myobj = {
//        name: "Company Inc", 
//        address: "Highway 37"
//    };
// var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},

//   ];
//    dbo.collection("customers").insertMany(myobj,function(err, res){
//     if(err) throw err;
//     console.log("Number of document inserted" + res.insertedCount);
    
//     db.close();
//    });
//    dbo.createCollection("customers", function(err, res){
//     if(err) throw err;
//     console.log("Collection created!");
    
//     db.close();
//    });



});