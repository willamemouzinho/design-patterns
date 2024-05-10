import { DatabaseService } from "./database-service";
import type { INotifier } from "./i-notifier";

export abstract class BaseNotifierDecorator implements INotifier {
	private readonly _wrapped: INotifier;
	protected readonly databaseService: DatabaseService;

	constructor(wrapped: INotifier) {
		this._wrapped = wrapped;
		this.databaseService = new DatabaseService();
	}

	public send(message: string): void {
		this._wrapped.send(message);
	}

	public getUsername(): string {
		return this._wrapped.getUsername();
	}
}
