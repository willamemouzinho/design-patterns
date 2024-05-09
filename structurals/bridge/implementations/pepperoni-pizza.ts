import { Pizza } from "./pizza";

export class PepperonePizza extends Pizza {
	public assemble(): void {
		console.log(`Adding Sauce: ${this.sauce}`);
		console.log(`Adding Toppings: ${this.toppings}`);
		console.log("Adding Pepperoni");
	}

	public qualityCheck(): void {
		console.log(`Crust is: ${this.crust}`);
	}
}
