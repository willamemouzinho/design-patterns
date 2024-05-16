export abstract class Handler {
	private next: Handler | null = null;

	public setNextHandler(next: Handler): Handler {
		this.next = next;
		return next;
	}

	public abstract handle(username: string, password: string): boolean;

	public handleNext(username: string, password: string): boolean {
		if (this.next === null) {
			return true;
		}
		return this.next.handle(username, password);
	}
}
