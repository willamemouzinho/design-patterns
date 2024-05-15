export abstract class Handler {
	private _next: Handler | null = null;

	public setNextHandler(next: Handler): Handler {
		this._next = next;
		return next;
	}

	public abstract handle(username: string, password: string): boolean;

	public handleNext(username: string, password: string): boolean {
		if (this._next === null) {
			return true;
		}
		return this._next.handle(username, password);
	}
}
