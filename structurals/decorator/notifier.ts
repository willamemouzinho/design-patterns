import { DatabaseService } from "./database-service";
import type { INotifier } from "./i-notifier";

export class Notifier implements INotifier {
	private readonly username: string;
	private readonly databaseService: DatabaseService;

	public constructor(username: string) {
		this.username = username;
		this.databaseService = new DatabaseService();
	}

	public send(message: string): void {
		const mail: string = this.databaseService.getMailFromUsername(
			this.username,
		);
		console.log(`Sending ${message} by Mail to ${mail}`);
	}

	public getUsername(): string {
		return this.username;
	}
}
