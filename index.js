var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


// app.get('/', function (req, res) {
//     res.send('<h1>Hello world</h1>');
// });

http.listen(4200, function () {
    console.log('listening on *:4200');
});
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + ''))