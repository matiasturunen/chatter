'use strict'
$( document ).ready(function() {
    const socket = io();

    $('form').submit(evt => {
    	evt.preventDefault();
    	socket.emit('chat message', $('#m').val());
    	$('#m').val('');
    });

    socket.on('chat message', function(msg){
      $('<li class="list-group-item">').text(msg).hide().appendTo('#messages').fadeIn(400);
    });
});