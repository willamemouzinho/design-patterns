import type { Database } from "../database";
import { Handler } from "./handler";

export class UserExistsHandler extends Handler {
	private readonly database: Database;

	public constructor(database: Database) {
		super();
		this.database = database;
	}

	public handle(username: string, password: string): boolean {
		if (!this.database.isValidUser(username)) {
			console.log("This username is not registered!");
			console.log("Sign Up to our app now!");

			return false;
		}

		return this.handleNext(username, password);
	}
}
