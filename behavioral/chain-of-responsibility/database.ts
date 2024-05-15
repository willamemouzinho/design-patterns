export class Database {
	private readonly _users: Map<string, string>;

	constructor() {
		this._users = new Map();
		this._users.set("admin_username", "admin_password");
		this._users.set("user_username", "user_password");
	}

	public isValidUser(username: string): boolean {
		return this._users.has(username);
	}

	public isValidPassword(username: string, password: string): boolean {
		return this._users.get(username) === password;
	}
}
