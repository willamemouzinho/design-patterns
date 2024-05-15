import type { Handler } from "./handlers/handler";

export class AuthService {
	private readonly _handler: Handler;

	constructor(handler: Handler) {
		this._handler = handler;
	}

	public logIn(email: string, password: string): boolean {
		if (this._handler.handle(email, password)) {
			// Do stuff for authorized users
			return true;
		}

		return false;
	}
}
