export abstract class Pizza {
	protected sauce!: string;
	protected toppings!: string;
	protected crust!: string;

	public abstract assemble(): void;
	public abstract qualityCheck(): void;

	public setSauce(sauce: string): void {
		this.sauce = sauce;
	}

	public setToppings(toppings: string): void {
		this.toppings = toppings;
	}

	public setCrust(crust: string): void {
		this.crust = crust;
	}
}
