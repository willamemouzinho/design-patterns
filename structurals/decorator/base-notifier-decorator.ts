import { DatabaseService } from "./database-service";
import type { INotifier } from "./i-notifier";

export abstract class BaseNotifierDecorator implements INotifier {
	private readonly wrapped: INotifier;
	protected readonly databaseService: DatabaseService;

	public constructor(wrapped: INotifier) {
		this.wrapped = wrapped;
		this.databaseService = new DatabaseService();
	}

	public send(message: string): void {
		this.wrapped.send(message);
	}

	public getUsername(): string {
		return this.wrapped.getUsername();
	}
}
