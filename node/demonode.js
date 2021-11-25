var http = require('http'); //node module for http calls
var dt = require('./firstmodule'); // exported module for date 
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  fs.readFile('demofile1.html', function(err, data){
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(data);

   return res.end();


    //res.write("The date and time are currently: " + dt.myDateTime()); // write a response to the client
   // res.write(req.url);
    // var  q = url.parse(req.url, true).query; //split the query string on the url
    // var txt = q.year + " " + q.month;
  
  
    //res.end(txt);//end the response
    
  });
 
  
}).listen(8080); //the server object listens on port 8080