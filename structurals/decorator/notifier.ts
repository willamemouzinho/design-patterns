import { DatabaseService } from "./database-service";
import type { INotifier } from "./i-notifier";

export class Notifier implements INotifier {
	private readonly _username: string;
	private readonly _databaseService: DatabaseService;

	constructor(username: string) {
		this._username = username;
		this._databaseService = new DatabaseService();
	}

	public send(message: string): void {
		const mail: string = this._databaseService.getMailFromUsername(
			this._username,
		);
		console.log(`Sending ${message} by Mail to ${mail}`);
	}

	public getUsername(): string {
		return this._username;
	}
}
