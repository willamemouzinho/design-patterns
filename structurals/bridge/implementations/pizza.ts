export abstract class Pizza {
	protected sauce: string | null = null;
	protected toppings: string | null = null;
	protected crust: string | null = null;

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
