const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
	socket.on("message", (...args) => {
		console.log(args);
	});

	socket.on("abra", (message) => {
		console.log(message);
	});

	console.log("a user connected");
});

http.listen(3000, () => {
	console.log("listening on *:3000");
});
