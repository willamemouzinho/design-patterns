import { Pizza } from "./pizza";

export class VeggiePizza extends Pizza {
	public assemble(): void {
		console.log(`Adding Sauce: ${this.sauce}`);
		console.log(`Adding Toppings: ${this.toppings}`);
		console.log("Adding Cheese");
	}

	public qualityCheck(): void {
		console.log(`Crust is: ${this.crust}`);
	}
}
