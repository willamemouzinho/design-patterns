export class Curtains {
	private open = false;

	public openClose(): void {
		this.open = !this.open;
	}

	public isOpen(): boolean {
		return this.open;
	}
}
