export class Light {
	private switchedOn = false;

	public switchLights(): void {
		this.switchedOn = !this.switchedOn;
	}

	public isSwitchedOn(): boolean {
		return this.switchedOn;
	}
}
