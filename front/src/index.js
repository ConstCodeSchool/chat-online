const socket = io();

import Chat from "./Chat";

const chat = new Chat();

document.body.append(chat.view);

chat.addEventListener("send", (message) => {
	message = message.trim();

	if (!message) {
		return;
	}

	if (message.startsWith("/setname ")) {
		const split = message.split(" ");
		const name = split[1].slice(0, 10);

		socket.emit("setname", name);
		chat.clearInput();
		return;
	}

	socket.emit("message", message);
	chat.clearInput();
});

socket.on("message", (data) => {
	chat.addMessage(data);
});

// chat.addMessage({
// 	user: "Сергея Воронина",
// 	date: Date.now(),
// 	content: "Привет, други!",
// });

// chat.addMessage({
// 	user: "Татьяна Ошка",
// 	date: Date.now(),
// 	content: "Всем добрый вечер!",
// });

// chat.addMessage({
// 	user: "Сергея Воронина",
// 	date: Date.now(),
// 	content: "Привет, други!",
// });
