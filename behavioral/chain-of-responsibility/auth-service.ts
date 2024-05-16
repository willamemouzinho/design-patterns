import type { Handler } from "./handlers/handler";

export class AuthService {
	private readonly handler: Handler;

	public constructor(handler: Handler) {
		this.handler = handler;
	}

	public logIn(email: string, password: string): boolean {
		if (this.handler.handle(email, password)) {
			// Do stuff for authorized users
			return true;
		}

		return false;
	}
}
