export default class EventEmitter {
	constructor() {
		this.handlers = {};
	}

	addEventListener(...args) {
		return this.on(...args);
	}

	on(name, handler) {
		if (!this.handlers.hasOwnProperty(name)) {
			this.handlers[name] = [];
		}

		this.handlers[name].push(handler);
	}

	emit(name, ...args) {
		if (!this.handlers.hasOwnProperty(name)) {
			return;
		}

		for (const handler of this.handlers[name]) {
			handler(...args);
		}
	}
}
