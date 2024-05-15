import type { Database } from "../database";
import { Handler } from "./handler";

export class ValidPasswordHandler extends Handler {
	private readonly _database: Database;

	constructor(database: Database) {
		super();
		this._database = database;
	}

	public handle(username: string, password: string): boolean {
		if (!this._database.isValidPassword(username, password)) {
			console.log("Wrong Password!");
			return false;
		}

		return this.handleNext(username, password);
	}
}
