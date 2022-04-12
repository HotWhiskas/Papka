
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
const { exec } = require('child_process');
var app = express();
var server = http.Server(app);
var io = socketIO(server);


app.set('port', 8080);
app.use('/dist', express.static(__dirname + '/dist'));

// Маршруты
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/autorisation', function(request, response) {
    response.sendFile(path.join(__dirname, 'autorisation.html'));
});
app.get('/addUsers', function(request, response) {
    response.sendFile(path.join(__dirname, 'AddUsers.html'));
});
app.get('/ChengeUser', function(request, response) {
    response.sendFile(path.join(__dirname, 'ChengeUser.html'));
});

app.get('/addProduct', function(request, response) {
    response.sendFile(path.join(__dirname, 'AddProduct.html'));
});

app.get('/ChengeProduct', function(request, response) {
    response.sendFile(path.join(__dirname, 'ChengeProduct.html'));
});

app.get('/addChek', function(request, response) {
    response.sendFile(path.join(__dirname, 'AddChek.html'));
});
// Запуск сервера
server.listen(8080, function() {
    console.log('Запускаю сервер на порте 8080');
});

// для общения клиента и сервера
io.on('connection', function(socket) {
    socket.on('logIn',function(ok){
       console.log(ok);
    });
    socket.on('usersList',function(usersList){
        console.log(usersList);
    }) 
});


    

