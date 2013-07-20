var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs'); 
    response.send(fs.readFileSync('index.html').toString());
});

app.use(express.static(__dirname + '/bootstrap'));
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
