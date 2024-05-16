export class Database {
	private readonly users: Map<string, string>;

	public constructor() {
		this.users = new Map();
		this.users.set("adminusername", "adminpassword");
		this.users.set("userusername", "userpassword");
	}

	public isValidUser(username: string): boolean {
		return this.users.has(username);
	}

	public isValidPassword(username: string, password: string): boolean {
		return this.users.get(username) === password;
	}
}
