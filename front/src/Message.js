export default class Message {
	constructor(author, date, content) {
		this.author = author;
		this.date = new Date(date);
		this.content = content;

		this.view = document.createElement("div");

		this.view.innerHTML = template
			.replace("%MESSAGE%", this.content)
			.replace("%AUTHOR%", this.author)
			.replace(
				"%TIME%",
				`${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`
			);

		this.view = this.view.firstElementChild;
	}
}

const template = `
<div class="list-group-item d-flex">
    <div class="message_info">
        <div class="message_info_autor">%AUTHOR%</div>
        <small>%TIME%</small>
    </div>
    <div class="message_content flex-grow-1">%MESSAGE%</div>
</div>`;
