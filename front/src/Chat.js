import Message from "./Message";
import EventEmitter from "./EventEmitter";

export default class Chat extends EventEmitter {
	constructor() {
		super();

		this.messages = [];
		this.user = { id: null };

		this.view = document.createElement("div");
		this.view.innerHTML = template;
		this.view = this.view.firstElementChild;

		this.button = this.view.querySelector("button");
		this.button.addEventListener("click", (e) => this.handlerClick(e));

		this.input = this.view.querySelector("input");
		this.input.addEventListener("keyup", (e) => this.handlerKeyup(e));
	}

	addMessage(data) {
		const message = new Message(data.user, data.date, data.content);
		this.messages.push(message);

		const messagesPlate = this.view.querySelector("[data-messages]");
		messagesPlate.append(message.view);
		messagesPlate.scrollTop = messagesPlate.scrollHeight;
	}

	clearInput() {
		this.input.value = "";
	}

	handlerClick(e) {
		if (this.input.value) {
			this.emit("send", this.input.value);
		}
	}

	handlerKeyup(e) {
		if (e.key === "Enter") {
			this.emit("send", this.input.value);
		}
	}
}

const template = `
<div class="container vh-100 p-2">
	<div class="card h-100">
		<div class="d-flex flex-column">
			<div class="card-header">
				<h3 class="card-title">Чат-Онлайн</h3>
			</div>

			<div class="list-group flex-grow-1 overflow-auto message-panel" data-messages></div>

			<div class="card-footer">
				<div class="input-group w-100 d-flex">
					<input
						type="text"
						class="form-input flex-grow-1"
						id="validatedInputGroupCustomFile"
						required
					/>
					<div class="input-group-append">
						<button class="btn btn-outline-primary" type="button">
							Отправить
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`;
