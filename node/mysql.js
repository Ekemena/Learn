var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'mydb',
    port: '3306'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //var sql = "update customers set address ='RAOd road' where address = 'warri road'";
    var sql = "select * from customers limit 2"
    con.query(sql, function(err, result){
      if(err) throw err;
      console.log(result);
    });


    //var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    // var sql = "Insert into customers(name, address) values?";
    // var values = [
    //   ['John doe', 'Highway 72'],
    //   ['Police Jude', 'Warri road'],
    //   ['Jonh mose', 'Mountain 21']
    // ];
   
    // con.query("select * from customers where address like 'w%' ", function(err, result, fields){
    //    if(err) throw err;
    //    console.log(result);
    // });
    // con.query(sql, [values], function (err, result) {
    //   if (err) throw err;
    //   console.log("1 record inserted");
    // });
    
  });