import { Handler } from "./handler";

export class RoleCheckHandler extends Handler {
	public handle(username: string, password: string): boolean {
		if (username === "admin_username") {
			console.log("Loading Admin Page...");
			return true;
		}

		console.log("Loading Default Page...");
		return this.handleNext(username, password);
	}
}
