import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('src/public'));

app.get('/chat', (req, res) => {

});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

	socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });  
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
