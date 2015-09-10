
var connect = require('connect');
var app = connect();

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) 
{
    fs.readFile("fortuneCookie.txt", "utf8", function (error, data) {
        console.log(data);
    });
});
app.use('/normal', server);

app.listen(process.env.PORT);

console.log('server running');