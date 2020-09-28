const socket = io();

socket.emit("message", "Привет мир!", { a: 5 });
socket.emit("abra", "cadabra");
